const moment = require('moment');

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


module.exports = async (parent, {userId, mdateRowIdArray}, ctx, info) => {
    console.log(">>[GET CUP DATA]", moment().format('YYYY.MM.DD HH:mm:ss ddd'));
    console.log(">>> userId : " + userId);
    console.log(">>> Request mdate row id : " + mdateRowIdArray);
    mdateRowIdArray = JSON.parse(mdateRowIdArray);

    let allData = new Array();
    let result;

    //Get serial number
    let serialNumber = await ctx.db.query.user_cupses({ where: {user : {id: userId}}},
        `{
            serial_number {
                id
            }
        }`
    );
    serialNumber = serialNumber[0].serial_number.id
    try{
        for(let i = 0; i < mdateRowIdArray.length; i++){

            //Set period common information
            let mdDateRowData = mdateRowIdArray[i];

            let periodData = new Object();
            periodData.mDateRowId = mdDateRowData.id;
            periodData.men_start = new Date(mdDateRowData.men_start);
            periodData.men_finish = new Date(mdDateRowData.men_finish);
            
            let totalDate = (periodData.men_finish).getTime() - (periodData.men_start).getTime()
            console.log(">>> menDate " + periodData.men_start + "-" + periodData.men_finish);
            totalDate = Math.ceil(totalDate / (1000 * 60 * 60 * 24));


            //Set [allVolArray]
            let allVolArray = new Array();
            var periodVolChartData = await ctx.db.query.cup_data_proc_flows({where:{user:{id:userId}, mdate_row:{id:mdDateRowData.id}, date_gte:periodData.men_start, date_lte:periodData.men_finish}},
                `{
                    hourly_flow
                    date
                }`
            );

            for(let j = 0 ; j < periodVolChartData.length ; j++){
                let volObject = new Object();
                volObject.date = periodVolChartData[j].date;
                volObject.volume = periodVolChartData[j].hourly_flow / 100;
                allVolArray.push(volObject);
            }

            periodData.allVolArray = allVolArray;

            //Set [allTempArray]
            let allTempArray = new Array();
            var periodTempChartData= await ctx.db.query.cup_datas({where:{serial_number:{id:serialNumber}, date_gte:periodData.men_start, date_lte:periodData.men_finish}},
                `{
                    temperature
                    date
                }`
            );

            for(let j = 0 ; j < periodTempChartData.length ; j++){
                let tempObject = new Object();
                tempObject.date = periodTempChartData[j].date;
                tempObject.temperature = periodTempChartData[j].temperature / 100;
                allTempArray.push(tempObject);
            }

            periodData.allTempArray = allTempArray;


            periodData.day = new Array();
            for(let i = 0; i < totalDate+1; i++){
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
                // let dayTempArray = new Array();

                // for(let j = 0 ; j < 24; j++){
                //     let startTime = "";
                //     let endTime = "";

                //     if(j < 10){
                //         startTime = getDataStartDate + "T0" + j + ":00:00";    
                //     } else {
                //         startTime = getDataStartDate + "T" + j + ":00:00";
                //     }
                //     if(j < 9){
                //         endTime =  getDataStartDate +  "T0" + j + ":59:59";
                //     } else {
                //         endTime =  getDataStartDate +  "T" + j + ":59:59";
                //     }
                    
                //     var hourTempData = await ctx.db.query.cup_datas({where:{serial_number:{id:serialNumber}, date_gte:startTime, date_lte:endTime}},
                //         `{
                //             temperature
                //         }`
                //     );
                    
                //     if(hourTempData.length === 0){
                //         dayTempArray[j] = 0
                //     } else {
                //         let avg = 0;

                //         //Calc avg 1hour temperature data
                //         for(let j in hourTempData){
                //             avg += hourTempData[j].temperature;
                //         }

                //         avg = avg / (hourTempData.length * 100)
                //         dayTempArray[j] = avg;
                //         periodTempAvg += avg;
                //         tempCount ++;
                //     }
                // }

                // dayObject.tempChartData = dayTempArray;
                dayObject.tempChartData = new Array();
                dayObject.volChartData = new Array();
                periodData.day.push(dayObject);
            }

            allData.push(periodData);
        }

        result = JSON.stringify(allData);
        console.log(">>> allCupData : " + result + "\n");

    } catch(err) {
        console.log(err);
    }

    return {
        result
    }
        
}
