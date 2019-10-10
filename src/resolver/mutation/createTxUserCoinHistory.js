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

    let reqBody = {
        toAddress: address,
        fromAddress,
        fromPkey,
        token: 0
    }
    console.log(`category ${category}`)
    console.log(`contents ${contents}`)
    console.log(`recordedDayCount ${recordedDayCount}`)
    console.log(`isImageColorCount ${isImageColorCount}`)
    // coin 가격 확인
    if(category == 'REWARDS') {
        let feeQuery = contents.includes('Data record') ? {contents_in: ['DATA', 'CAMERA DATA']} : {contents};
        let rewards = await ctx.db.query.userCoinRewardsFees({where: feeQuery, orderBy: 'contents_DESC'});

        if(contents.includes('Data record')) {
            if(rewards[0].contents == 'Data') {
                reqBody.token = rewards[0].amount * recordedDayCount + rewards[1].amount * isImageColorCount;
            } else {
                reqBody.token = rewards[1].amount * recordedDayCount + rewards[0].amount * isImageColorCount;
            }
        } else {
            reqBody.token = rewards[0].amount;
        }
        console.log(`reqBody.token ${reqBody.token}`)
    } else if (price) {
        reqBody.token = price;
    } else {
        return Error('No Data')
    }

    //url : 172.31.0.13
    let options = {
        headers: { 'Content-Type': 'application/json' },
        // url: 'http://localhost:8080/api/token',
        url: 'http://34.85.62.36:8080/api/token',
        body: JSON.stringify(reqBody)
    };
    
    let res = await request.post(options);
    res = JSON.parse(res);
    console.log(res);
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

    let wallet = await ctx.db.query.userWallets({where: {userId: {id: userId}, address}})
    if(wallet.length !== 0) {
        data.walletId = wallet[0].id
    }
    let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
        data
    });
    return createUserCoin;
};
