const spawn   = require('child_process').spawn;
const carrier = require('carrier');

const script_path = '/home/www/scripts/blogic/perl';
var maxDate = {};

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

async function structData(mdDateRowData, serialNumber, userId, ctx){
        return new Promise(async function (resolve, reject) {
        let periodData = new Object();
        periodData.mDateRowId = mdDateRowData.id;
        periodData.men_start = new Date(mdDateRowData.men_start);
        periodData.men_finish = new Date(mdDateRowData.men_finish);
        
        let totalDate = (periodData.men_finish).getTime() - (periodData.men_start).getTime()
        console.log(periodData.men_start + "-" + periodData.men_finish);

        totalDate = Math.ceil(totalDate / (1000 * 60 * 60 * 24));

        //Set [allVolArray]
        let volCount = 0;
            
        let allVolArray = new Array();
        var dayVolChartData = await ctx.db.query.cup_data_proc_flows({where:{user:{id:userId}, mdate_row:{id:mdDateRowData.id}, date_gte:periodData.men_start, date_lte:periodData.men_finish}},
            `{
                hourly_flow
                date
            }`
        );

        for(let j = 0 ; j < dayVolChartData.length ; j++){
            let volObject = new Object();
            volObject.date = dayVolChartData[j].date;
            volObject.volume = dayVolChartData[j].hourly_flow / 100;
            allVolArray.push(volObject);
        }

        periodData.allVolArray = allVolArray;


        let periodTempAvg = 0;
        let tempCount = 0;
        periodData.day = new Array();
        for(let i = 0; i < totalDate; i++){
            let dayObject = new Object();

            //Set [index, open]
            dayObject.index = i+1;
            dayObject.open = false;

            let firstDate = new Date(periodData.men_start);
            let getDataStartDate = formatDate(firstDate.setDate(firstDate.getDate() + i));
            let getDataEndDate = formatDate(new Date(getDataStartDate).setDate(new Date(getDataStartDate).getDate() + 1));

            //Set [Color]
            var dayColorData = await ctx.db.query.cup_data_colour_calcsConnection({where:{row:{serial_number:{id:serialNumber}, date_gte:getDataStartDate, date_lte:getDataEndDate }}},
                `{
                    edges{
                        node{
                            row{
                                date
                                cup_data_colour_calcs{
                                    red
                                    green
                                    blue
                                }
                            }
                        }
                    }
                }`
            );
            
            if(dayColorData.edges.length === 0 ){
                dayObject.color = null;
            } else {
                dayObject.color = "rgb(" + dayColorData.edges[0].node.row.cup_data_colour_calcs[0].red + "," + dayColorData.edges[0].node.row.cup_data_colour_calcs[0].blue + "," +dayColorData.edges[0].node.row.cup_data_colour_calcs[0].green + ")";
            }

            //Set [Change]
            let dayChangeArray = new Array();
            var dayChangeTime = await ctx.db.query.cup_data_user_removes({where:{serial_number:{id:serialNumber}, change_time_gte:getDataStartDate, change_time_lte:getDataEndDate }},
                `{
                    change_time
                }`
            );

            for(let j = 0; j < dayChangeTime.length; j++){
                let dayChangeObject = new Object();
                var dayChangeData = await ctx.db.query.cup_datasConnection({where:{serial_number:{id:serialNumber}, date_lte:dayChangeTime[j].change_time}, orderBy:"date_ASC", last:1},
                    `{
                        edges{
                            node{
                                date
                                cup_data_proc_volumes{
                                    id
                                    volume
                                }
                            }
                        }  
                    }`
                );
                if(dayChangeData.edges[0].node.cup_data_proc_volumes.length !== 0){
                    dayChangeObject.time = dayChangeData.edges[0].node.date;
                    dayChangeObject.volume = (dayChangeData.edges[0].node.cup_data_proc_volumes[0].volume) / 100;
                    dayChangeArray.push(dayChangeObject);
                }
            }

            dayObject.change = dayChangeArray;

            //Set [tempChartData]
            let dayTempArray = new Array();

            for(let j = 0 ; j < 24; j++){
                let startTime = "";
                let endTime = "";

                if(j < 10){
                    startTime = getDataStartDate + "T0" + j + ":00:00";    
                } else {
                    startTime = getDataStartDate + "T" + j + ":00:00";
                }
                if(j < 9){
                    endTime =  getDataStartDate +  "T0" + j + ":59:59";
                } else {
                    endTime =  getDataStartDate +  "T" + j + ":59:59";
                }
                
                var hourTempData = await ctx.db.query.cup_datas({where:{serial_number:{id:serialNumber}, date_gte:startTime, date_lte:endTime}},
                    `{
                        temperature
                    }`
                );
                
                if(hourTempData.length === 0){
                    dayTempArray[j] = 0
                } else {
                    let avg = 0;

                    //Calc avg 1hour temperature data
                    for(let j in hourTempData){
                        avg += hourTempData[j].temperature;
                    }

                    avg = avg / (hourTempData.length * 100)
                    dayTempArray[j] = avg;
                    periodTempAvg += avg;
                    tempCount ++;
                }
            } 
            dayObject.tempChartData = dayTempArray;
            dayObject.volChartData = new Array();
            periodData.day.push(dayObject);
        }
        periodData.tempAvg = periodTempAvg / tempCount;

        resolve(periodData);
    })
}


function runScript(args) {
    return new Promise(function (resolve, reject) {
        let script_exc = spawn('perl', args);
        let script_result = null;

        script_result = carrier.carry(script_exc.stdout || script_exc.stderr);

        let reg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1]) ([1-9]|[01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/ ;
        let mdatesArray = new Array();

        script_result.on('line', function(line) {
            console.log('>> ',line);
            
            //db_men_dates.pl 실행시
            if(args[0].indexOf('db_men_dates.pl') !== -1){
                if(reg.test(line) === true){
                    mdatesArray.push(line);
                }

                maxDate[args[1]] = mdatesArray;
            }
        }).on('end',()=>{
            console.log("");
            resolve();
        })
    })
}


module.exports = async (parent, {userId}, ctx, info) => {
    let result;
    let resultArray = new Array();
    console.log(">> [RUN SCRIPT] User_id : ", userId);

    try{
        //Run db_update_synch_time.pl (insert app_server_sync table)
        await runScript([script_path + 'db_update_synch_time.pl', userId]);

        //Run db_men_dates.pl (insert cup_data_proc_mdates table)
        await runScript([script_path + 'db_men_dates.pl', userId]);
        
        //Get mdate_row_id
        if(maxDate[userId] !== 'false'){

            var mdateRowIdArray = new Array();

            for(let i = 0; i < maxDate[userId].length; i++){
                let result = await ctx.db.query.cup_data_proc_mdateses({ 
                    where: { 
                        user : {id: userId},
                        men_finish : new Date(maxDate[userId][i])
                    }
                });
                mdateRowIdArray.push(result[0]);
            }
            
            for(let i = 0; i < mdateRowIdArray.length; i++){
                 //Run db_volume_calculation_octave.pl (insert cup_data_proc_volume table)
                await runScript([script_path + 'db_volume_calculation_octave.pl', userId, mdateRowIdArray[i].id]);
    
    
                //Run db_rgb_calculation.pl (insert cup_data_colour_calc table)
                await runScript([script_path + 'db_rgb_calculation.pl', userId, mdateRowIdArray[i].id]);
    
                //Get serial number
                var serialNumber = await ctx.db.query.user_cupses({ where: {user : {id: userId}}},
                    `{
                        serial_number {
                            id
                        }
                    }`
                );
                serialNumber = serialNumber[0].serial_number.id
    
                //Run db_volume_adj.pl (update cup_data_proc_volume table)
                await runScript([script_path + 'db_volume_adj.pl', userId, mdateRowIdArray[i].id]);
    
                //Run db_user_cup_change.pl (insert cup_data_user_remove table)
                await runScript([script_path + 'db_user_cup_change.pl', userId, mdateRowIdArray[i].id, serialNumber]);
    
                //Run db_hourly_volume_flow.pl (insert cup_data_proc_flow table)
                await runScript([script_path + 'db_hourly_volume_flow.pl', userId, mdateRowIdArray[i].id]);
    
                //Run db_data_verification_interval.pl (insert cup_data_proc_mdates table)
                await runScript([script_path + 'db_data_verification_interval.pl', userId, mdateRowIdArray[i].id]);
                let data = await structData(mdateRowIdArray[i], serialNumber, userId, ctx);
                resultArray.push(data);
    
                console.log('[RUN SCRIPT COMPLETE] USER : ', userId, '// MDATE_ROW_ID : ', mdateRowIdArray[i].id);
                console.log('------------------------------------------------------------');
            }
            result = JSON.stringify(resultArray);
        } else {
            result = "[NO NEW MENSTRUAL DATA]"
        }
        
    } catch(err) {
        console.log(err);
    }

    return {
        result
    }
        
}
