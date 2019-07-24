const { extractFragmentReplacements, forwardTo } = require('prisma-binding');

const resolvers = {
  Query: {
    users: forwardTo('db'),
    userses: forwardTo('db'),
    user_cupses: forwardTo('db'),
    hardware: forwardTo('db'),
    cup_datas: forwardTo('db'),
    cup_data_proc_volume: forwardTo('db'),
    cup_data_proc_mdates: forwardTo('db'),
    cup_data_proc_mdateses: forwardTo('db'),
    cup_data_man_mdateses: forwardTo('db'),
    cup_data_colour_calcsConnection: forwardTo('db'),
    cup_data_user_removes: forwardTo('db'),
    cup_datasConnection: forwardTo('db'),
    cup_data_proc_flows: forwardTo('db'),
    users_data_analyses: forwardTo('db'),
    user_coin_histories: forwardTo('db'),
    user_record_data_by_times: forwardTo('db'),
    user_record_data_by_days: forwardTo('db'),
    user_record_data_by_periods: forwardTo('db')
  },
  Mutation: {
    //Use Prisma own mutation
    deleteUsers: forwardTo('db'),
    createUser_cups: forwardTo('db'),
    createCup_data_raw: forwardTo('db'),
    createCup_data: forwardTo('db'),
    updateCup_data_proc_mdates: forwardTo('db'),
    createUser_coin_history: forwardTo('db'),
    createUser_record_data_by_time: forwardTo('db'),
    createUser_record_data_by_day: forwardTo('db'),
    createUser_record_data_by_period: forwardTo('db'),
    updateUser_record_data_by_time: forwardTo('db'),
    updateUser_record_data_by_day: forwardTo('db'),
    updateUser_record_data_by_day: forwardTo('db'),
    updateUser_record_data_by_period: forwardTo('db'),
    deleteUser_record_data_by_time: forwardTo('db'),
    deleteUser_record_data_by_day: forwardTo('db'),
    deleteUser_record_data_by_period: forwardTo('db'),

    //Use Custom mutation
    signin: require('./mutation/signin'),
    signup: require('./mutation/signup'),
    gettesttoken: require('./mutation/getTestToken'),
    getNewToken: require('./mutation/refreshToken'),
    registerCup: require('./mutation/registerCup'),
    runPerlScript: require('./mutation/runPerlScript'),
    getCupData: require('./mutation/getCupData'),
    signinDataAnalysis: require('./mutation/signinDataAnalysis'),
    createTxUserCoinHistory: require('./mutation/createTxUserCoinHistory')
  }
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

module.exports = {
  resolvers,
  fragmentReplacements
};
