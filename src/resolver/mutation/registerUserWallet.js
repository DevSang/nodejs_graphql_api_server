const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (
    parent,
    { address, email, userId },
    ctx,
    info
) => {
    console.log('>>[CREATE REGISTE USER WALLET]');
    console.log('>>> address : ' + address);
    console.log('>>> email : ' + email);
    console.log('>>> userId : ' + userId);

    //url : 172.31.0.13
    // console.log(parent)
    // console.log(info)
    const accesstoken = ctx.request.header('LOON-HEADER-ACCESSTOKEN');
    let options = {
        headers: { 'Content-Type': 'application/json', 'LOON-HEADER-ACCESSTOKEN':  accesstoken},
        // url: 'http://localhost:8080/api/user',
        url: 'http://34.85.62.36:8080/api/token',
        body: JSON.stringify({
            "user_id" : Number(userId),
            "email" : email,
            "wallet_address" : address
        })
    };
    
    let res = await request.post(options);
    res = JSON.parse(res);
    console.log(res.isExist)
    if(res.isExist == true) {
        await ctx.db.mutation.updateManyUserWallets({data: {status: false}, where: {userId: {id: Number(userId)}}})
    }
    const result = await ctx.db.mutation.createUserWallet({
        data: {
            userId: {
                connect: {id: Number(userId)}
            }, 
            address,
            status: true, 
            createTime: new Date()
        }
    }, `
    {
        id
        address
        createTime
    }
    `)
    console.log(result)
    return result;
};
