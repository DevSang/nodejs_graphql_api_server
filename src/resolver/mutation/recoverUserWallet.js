const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { address, email, userId },
    ctx,
    info
) => {
    console.log('>>[CREATE RECOVER USER WALLET]', moment().format('YYYY.MM.DD HH:mm:ss ddd'));
    console.log('>>> address : ' + address);
    console.log('>>> email : ' + email);
    console.log('>>> userId : ' + userId);
    console.log('\n');

    //url : 172.31.0.13
    // console.log(parent)
    // console.log(info)
    const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
    let options = {
        headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
        // url: 'http://localhost:8080/api/user/wallet',
        url: 'http://34.85.62.36:8080/user/wallet',
        body: JSON.stringify({
            "user_id" : Number(userId),
            "email" : email.toLowerCase(),
            "wallet_address" : address
        })
    };
    
    let res = await request.patch(options);
    await ctx.db.mutation.updateManyUserWallets({where: {userId: {id: Number(userId)}}, data: {status: false}});
    let wallet = await ctx.db.query.userWallets({where: {address}});
    let result;
    if(wallet.length > 0) {
        result = await ctx.db.mutation.updateUserWallet({data: {status: true}, where: {id: wallet[0].id}}, `
        {
            id
            address
            createTime
        }
        `);
    } else {
        result = await ctx.db.mutation.createUserWallet({
            data: {
                userId: {
                    connect: {id: Number(userId)}
                }, 
                address,
                status: true, 
                createTime: new Date()
            },
        }, `
        {
            id
            address
            createTime
        }
        `)
    }
    return result;
};
