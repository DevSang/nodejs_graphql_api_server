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
    let user_id = userId;
    // 지불해야할 coin 확인
    if(category == 'REWARDS') {
        let feeQuery = contents.includes('Data record') ? {contents_in: ['RECORD', 'CAMERA RECORD']} : {contents};
        let rewards = await ctx.db.query.userCoinRewardsFees({where: feeQuery, orderBy: 'contents_DESC'});
        const today = new Date();
        
        // history 확인
        if(contents.includes('Data record')) {
            const paidHistory = await ctx.db.query.userCoinHistories({where: {contents: contents, 
                                                                    userId: {id: user_id},
                                                                    date_gte: new Date(`${today.getFullYear()}-${today.getMonth()}-01`)
                                                                    },
                                                                    orderBy: 'date_DESC'});
            let paidGem = 0;
            if(paidHistory.length > 0) {
                const check = await paidHistory.some((old) => {
                    paidGem += old.coin;
                    if(paidGem >= 50) return true;
                })
                if(check) {
                    console.log(`paidGem ${paidHistory}`)
                    return res.status(401).json({message: 'ALREADY PAID'});
                } 
            }

            if(rewards[0].contents == 'RECORD') {
                reqBody.contents = rewards[0].contents;
                reqBody.token = rewards[0].amount * recordedDayCount + rewards[1].amount * isImageColorCount;
                if(reqBody.token + paidGem >= 50) {
                    reqBody.token = 50 - paidGem;
                }
            } else {
                reqBody.contents = rewards[1].contents;
                reqBody.token = rewards[1].amount * recordedDayCount + rewards[0].amount * isImageColorCount;
            }
        } else if(contents == 'INVITE FRIEND') {
            const referralUser = await ctx.db.query.users({where: {referralCode : address}}, '{ id userWallet{id address status}}');
            if(!referralUser || referralUser.length == 0) {
                console.log(`NO REFFERAL CODE: ${address} USER`)
                return null;
            }
            let refferalAddress;
            await referralUser[0].userWallet.some((data) => {
                if(data.status) {
                    refferalAddress = data.address;
                    return data.address
                }
            })
            
            if(!refferalAddress) {
                console.log('NO REFFERAL USER WALLET')
                return null;
            }
            user_id = referralUser[0].id;
            reqBody.toAddress = refferalAddress;
            reqBody.contents = rewards[0].contents;
            reqBody.token = rewards[0].amount;
        } else {
            const paidHistory = await ctx.db.query.userCoinHistories({where: {contents: contents, userId: {id: user_id}}, orderBy: 'date_DESC'});
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
    // url : 172.31.0.13
    const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
    let options = {
        headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
        // url: 'http://localhost:8080/api/token',
        url: 'http://34.85.62.36:8080/api/token',
        body: JSON.stringify(reqBody)
    };
    let res = await request.post(options);
    res = JSON.parse(res);
    let data = {
        userId: {
            connect: {
                id: user_id
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

    let wallet = await ctx.db.query.userWallets({where: {userId: {id: user_id}, address, status: true}})
    if(wallet.length !== 0) {
        data.walletId = wallet[0].id
    }
    let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
        data
    });
    return createUserCoin;
    // return null;
} catch(err) {
    console.log(`[ERROR] : ${err}`)
    return null;
}
};
