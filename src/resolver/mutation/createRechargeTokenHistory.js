const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { email, toAddress, gem },
    ctx,
    info
) => {
    try {
        console.log('>>[CREATE RECHARGE DATA COIN HISTORY]', moment().format('YYYY.MM.DD HH:mm:ss ddd'));
        console.log(`email : ${email}`)
        console.log(`toAddress : ${toAddress}`)
        console.log(`gem : ${gem}`)

        let wallet = await ctx.db.query.userWallets({where: {address: toAddress, status: true}},
            `{
                id 
                userId {
                    id
                }
                address 
                createTime 
                status
            }`
        );    

        if(wallet.length == 0) {
            throw new Error('NO USER WALLET');
        }

        let reqBody = {
            toAddress: toAddress,
            token: gem,
        }

        const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
        let options = {
            headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
            // url: 'http://localhost:8080/api/recharge',
            url: 'http://34.85.62.36:8080/api/recharge',
            body: JSON.stringify(reqBody)
        };
        let res = await request.post(options);
        res = JSON.parse(res);

        console.log(JSON.stringify(wallet));

        let data = {
            userId: {
                connect: {
                    id: wallet[0].userId.id
                }
            },
            category: 'RECHARGE',
            contents: 'Recharge ' + gem + 'G'  ,
            coin: gem,
            date: new Date(),
            txhash: res.message,
            walletId: wallet[0].id
        }
        console.log(`data ${data}`);

        let createUserCoin = await ctx.db.mutation.createUserCoinHistory({
            data
        });

        return createUserCoin;
        
    } catch(err) {
        throw err;
    }
};
