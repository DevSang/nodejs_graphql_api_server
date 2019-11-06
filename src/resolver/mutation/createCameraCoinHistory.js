const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { cameraId, userId, periodCoinHistoryRowId },
    ctx,
    info
) => {
    try {
        console.log('>>[CREATE CAMERA DATA COIN HISTORY]');
        console.log(`userId ${userId}`)
        console.log(`cameraId ${cameraId}`)

        let wallet = await ctx.db.query.userWallets({where: {userId: {id: userId}, status: true}})
        if(wallet.length == 0) {
            throw new Error('NO USER WALLET');
        }

        let periodCoinHistory = await ctx.db.query.userCoinHistory({where: {id: periodCoinHistoryRowId}})
        let contents = periodCoinHistory.contents;
        contents = contents.replace('Data record', 'Camera data record');

        let rewards_fee = await ctx.db.query.userCoinRewardsFees({where: {contents: 'CAMERA RECORD'}});
        rewards_fee = rewards_fee[0].amount;

        const today = new Date();
        const paidHistory = await ctx.db.query.userCoinHistories({where: {contents: contents, 
                                                                    userId: {id: userId},
                                                                    date_gte: new Date(`${today.getFullYear()}-${today.getMonth()}-01`)
                                                                },
                                                                orderBy: 'date_DESC'});
        if(paidHistory.length >= 5) {
            await ctx.db.mutation.updateUserRecordCameraDataByTime({where: {id: cameraId}, data: {confirmYn: true, deleteYn: false}})
            throw new Error('ALREADY PAID')
        }

        let reqBody = {
            userId,
            toAddress: wallet[0].address,
            contents: 'CAMERA RECORD',
            token: rewards_fee,
        }

        const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
        let options = {
            headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
            // url: 'http://localhost:8080/api/token/camera',
            url: 'http://34.85.62.36:8080/api/token/camera',
            body: JSON.stringify(reqBody)
        };
        let res = await request.post(options);
        res = JSON.parse(res);

        let data = {
            userId: {
                connect: {
                    id: userId
                }
            },
            category: 'REWARDS',
            contents: contents,
            coin: rewards_fee,
            date: new Date(),
            txhash: res.message,
            walletId: wallet[0].id
        }
        let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
            data
        });

        await ctx.db.mutation.updateUserRecordCameraDataByTime({where: {id: cameraId}, data: {coinHistoryRowId: {connect: {id: createUserCoin.id}}, confirmYn: true, deleteYn: false}})
        return createUserCoin;
        
    } catch(err) {
        throw err;
    }
};
