const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { userId, address, category, contents, date, price, recordedDayCount, isImageColorCount, fromAddress, fromPkey },
    ctx,
    info
) => {
    console.log('>>[CREATE TX USER COIN HISTORY]');
    console.log('>>> address : ' + address);
    console.log('>>> category : ' + category);
    console.log('>>> contents : ' + contents);
    console.log('>>> date : ' + date);
    console.log('>>> price : ' + price);
    console.log('>>> recordedDayCount : ' + recordedDayCount);
    console.log('>>> isImageColorCount : ' + isImageColorCount);
    try {
    let reqBody = {
        toAddress: address,
        fromAddress,
        fromPkey,
        category,
        contents,
        token: 0,
        recordedDayCount,
        isImageColorCount
    }
    console.log(`category ${category}`)
    console.log(`contents ${contents}`)
    console.log(`recordedDayCount ${recordedDayCount}`)
    console.log(`isImageColorCount ${isImageColorCount}`)
    // 지불해야할 coin 확인
    if(category == 'REWARDS') {
        let feeQuery = contents.includes('Data record') ? {contents_in: ['RECORD', 'CAMERA RECORD']} : {contents};
        let rewards = await ctx.db.query.userCoinRewardsFees({where: feeQuery, orderBy: 'contents_DESC'});
        const paidHistory = await ctx.db.query.userCoinHistories({where: {contents: contents.includes('Data record') ? 'RECORD' : contents, userId: {id: userId}},
                                                                  orderBy: 'date_DESC'});
        if(contents.includes('Data record')) {
            if (paidHistory.length > 0) {
                const today = new Date();
                const paidDate = new Date(paidHistory[0].date);
                if(today.getFullYear() == paidDate.getFullYear() && today.getMonth() == paidDate.getMonth()) {
                    console.log('ALREADY PAID')
                    return Error('ALREADY PAID');
                }
            }
            if(rewards[0].contents == 'RECORD') {
                reqBody.contents = rewards[0].contents;
                reqBody.token = rewards[0].amount * recordedDayCount + rewards[1].amount * isImageColorCount;
            } else {
                reqBody.contents = rewards[1].contents;
                reqBody.token = rewards[1].amount * recordedDayCount + rewards[0].amount * isImageColorCount;
            }
        } else {
            if (paidHistory.length > 0) {
                console.log('ALREADY PAID')
                return null;
            }
            reqBody.contents = rewards[0].contents;
            reqBody.token = rewards[0].amount;
        }
        console.log(`reqBody.token ${reqBody.token}`)
    } else if (price) {
        reqBody.token = price;
    } else {
        return Error('No Data')
    }

    //url : 172.31.0.13
    // console.log(parent)
    // console.log(info)
    const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
    let options = {
        headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
        url: 'http://localhost:8080/api/token',
        // url: 'http://34.85.62.36:8080/api/token',
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
        category: category,
        contents: contents,
        coin: reqBody.token,
        date: new Date(date),
        txhash: res.message,
    }

    if(category === 'BUY') {
        data.coin = data.coin * -1
    }

    let wallet = await ctx.db.query.userWallets({where: {userId: {id: userId}, address, status: true}})
    if(wallet.length !== 0) {
        data.walletId = wallet[0].id
    }
    let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
        data
    });
    return createUserCoin;
} catch(err) {
    console.log(`[ERROR] : ${err}`)
    return null;
}
};
