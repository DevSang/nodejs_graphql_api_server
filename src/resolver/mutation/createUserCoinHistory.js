const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (parent, { userId, address, category, contents, coin, date}, ctx, info) => {
   console.log('>>[CREATE USER TOKEN HISTORY]');
   console.log('>>> address : ' + address);
   console.log('>>> category : ' + category);
   console.log('>>> contents : ' + contents);
   console.log('>>> value : ' + coin);

   //url : 172.31.0.13

   let options = {
       headers: { 'Content-Type': 'application/json' },
       url: 'http://34.85.62.36:8080/api/token',
       body: JSON.stringify({
           address,
           value:coin
       })
   };

   let res = await request.post(options);
   res = JSON.parse(res);
   let createUserCoin = await ctx.db.mutation.createUser_coin_history({
       data: {
           user: {
               connect: {
                   id: userId
               }
           },
           category: category,
           contents: contents,
           coin: coin,
           date: date
           // txHash: res.message
       }
   });
   return createUserCoin;
};