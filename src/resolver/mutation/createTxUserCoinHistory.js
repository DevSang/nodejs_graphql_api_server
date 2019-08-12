const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { userId, address, category, contents, coin, date, fromAddress, fromPkey },
    ctx,
    info
) => {
    console.log('>>[CREATE USER TOKEN HISTORY]');
    console.log('>>> address : ' + address);
    console.log('>>> category : ' + category);
    console.log('>>> contents : ' + contents);
    console.log('>>> value : ' + coin);

    //url : 172.31.0.13
    let options = {
        headers: { 'Content-Type': 'application/json' },
        // url: 'http://localhost:8080/api/token',
        url: 'http://34.85.62.36:8080/api/token',
        body: JSON.stringify({
            toAddress: address,
            token: coin,
            fromAddress,
            fromPkey
        })
    };

    let res = await request.post(options);
    res = JSON.parse(res);
    console.log(res);
    let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
        data: {
            userId: {
                connect: {
                    id: userId
                }
            },
            category: category,
            contents: contents,
            coin: coin,
            date: date,
            txhash: res.message
        }
    });
    return createUserCoin;
};
