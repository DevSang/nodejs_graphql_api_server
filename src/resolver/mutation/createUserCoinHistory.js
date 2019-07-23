const request = require('request-promise-native');
const moment = require('moment');

module.exports = async (parent, { userId, address, category }, ctx, info) => {
  console.log('>>[CREATE USER TOKEN HISTORY]');
  console.log('>>> address : ' + address);
  console.log('>>> Reward : ' + category);
  // console.log(category.title);
  category = category.replace(/'/g, '"');
  category = JSON.parse(category);
  const key = Object.keys(category.contents);
  const value = eval(`category.contents.${key}.coin`);
  const contents = eval(`category.contents.${key}.text`);
  console.log('>>> value : ' + value);
  //url : 172.31.0.13
  let options = {
    headers: { 'Content-Type': 'application/json' },
    url: 'http://34.85.62.36:8080/api/token',
    body: JSON.stringify({
      address,
      value
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
      category: 'REWARDS',
      contents,
      coin: value,
      date: moment()
      // txHash: res.message
    }
  });
  return createUserCoin;
};
