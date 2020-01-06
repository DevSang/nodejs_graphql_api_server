module.exports = async (parent, {changeTime}, ctx, info) => {
    console.log(">>[GET CAMEARA DATA]");
    console.log(`changeTime: ${changeTime}`)
    let allData = [];
    let result = [];
    let cameraDataIds = [];
    try {
        //Get serial number
        let serialNumber = await ctx.db.query.userRecordDataByPeriods({
            where: {
                coinHistoryRowId_not: null,
                userRecordDataByDay_some: {
                    userRecordDataByTime_some: {
                        // changeTime_gte: new Date(changeTime),
                        cameraDataId_not : null,
                    }
                }
            }
        },  `
        {
            id
            userId {
                id
                email
            }
            coinHistoryRowId
            userRecordDataByDay {
                userRecordDataByTime {
                        id
                        changeTime
                        colorR
                        colorG
                        colorB
                        cameraDataId 
                    }
                }
        }
        `)


        if(serialNumber) {
            serialNumber.map((periodData, idx) => {
                periodData.userRecordDataByDay.map((dayData) => {
                    dayData.userRecordDataByTime.map(async (timeData) => {
                        if(timeData.cameraDataId) {
                            let d = {
                                periodDataId: periodData.id,
                                user: {
                                    id: periodData.userId.id,
                                    email: periodData.userId.email,
                                },
                                coinHistoryRowId: periodData.coinHistoryRowId,
                                timeDataId: timeData.id,
                                changeTime: timeData.changeTime,
                                color: `rgb(${timeData.colorR}, ${timeData.colorG}, ${timeData.colorB})` ,
                                cameraDataId: timeData.cameraDataId
                            }
                            allData = allData.concat(d)
                            cameraDataIds.push(timeData.cameraDataId)
                        }
                    })
                })
            })
            
            const all = await ctx.db.query.userRecordCameraDataByTimes({where: {id_in: cameraDataIds}});
            all.forEach(cameraData => {
                allData.some((data, idx) => {
                    if(data.cameraDataId == cameraData.id) {
                        let d = {...cameraData, cameraCoinHistoryId: cameraData.coinHistoryRowId}
                        delete d.coinHistoryRowId
                        result.push(Object.assign(data, cameraData))
                        return true;
                    }
                })
            });
        }

        return result
    } catch(err) {
        console.log(err)
        return null
    }
}
