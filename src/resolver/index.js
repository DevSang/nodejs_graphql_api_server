const { extractFragmentReplacements, forwardTo } = require('prisma-binding');

const resolvers = {
    Query: {
        user: forwardTo('db'),
        users: forwardTo('db'),
        userCup: forwardTo('db'),
        userCups: forwardTo('db'),
        hardware: forwardTo('db'),
        cupData: forwardTo('db'),
        //cup_data_proc_volume: forwardTo('db'),
        //cup_data_proc_mdates: forwardTo('db'),
        //cup_data_proc_mdateses: forwardTo('db'),
        //cup_data_man_mdateses: forwardTo('db'),
        //cup_data_colour_calcsConnection: forwardTo('db'),
        //cup_data_user_removes: forwardTo('db'),
        //cup_datasConnection: forwardTo('db'),
        //cup_data_proc_flows: forwardTo('db'),
        usersDataAnalysis: forwardTo('db'),
        userCoinHistories: forwardTo('db'),
        userCoinRewardsFee: forwardTo('db'),
        userCoinRewardsFees: forwardTo('db'),
        userRecordDataByTimes: forwardTo('db'),
        userRecordCameraDataByTime: forwardTo('db'),
        userRecordCameraDataByTimes: forwardTo('db'),
        userRecordDataByDays: forwardTo('db'),
        userRecordDataByPeriods: forwardTo('db'),
        marketAmazonCoupon: forwardTo('db'),
        marketAmazonCoupons: forwardTo('db'),
        marketLists: forwardTo('db'),
        marketBuyHistory: forwardTo('db'),
        marketBuyHistories: forwardTo('db'),
        userWallet: forwardTo('db'),
        userWallets: forwardTo('db'),
        marketListDetail: forwardTo('db'),
        marketListDetails: forwardTo('db'),
        additionalInfo: forwardTo('db'),
        additionalInfoes: forwardTo('db'),

    },
    Mutation: {
        //Use Prisma own mutation
        createUser: forwardTo('db'),
        updateUser: forwardTo('db'),
        deleteUser: forwardTo('db'),
        createUserCup: forwardTo('db'),
        //createCup_data_raw: forwardTo('db'),
        //createCup_data: forwardTo('db'),
        //updateCup_data_proc_mdates: forwardTo('db'),
        createUserCoinHistory: forwardTo('db'),
        createUserCoinHistory: forwardTo('db'),
        createUserCoinRewardsFee: forwardTo('db'),
        updateUserCoinRewardsFee: forwardTo('db'),
        deleteUserCoinRewardsFee: forwardTo('db'),
        createUserRecordDataByTime: forwardTo('db'),
        createUserRecordCameraDataByTime: forwardTo('db'),
        upsertUserRecordCameraDataByTime: forwardTo('db'),
        updateUserRecordCameraDataByTime: forwardTo('db'),
        deleteUserRecordCameraDataByTime: forwardTo('db'),
        createUserRecordDataByDay: forwardTo('db'),
        createUserRecordDataByPeriod: forwardTo('db'),
        updateUserRecordDataByTime: forwardTo('db'),
        updateUserRecordDataByDay: forwardTo('db'),
        updateUserRecordDataByPeriod: forwardTo('db'),
        deleteUserRecordDataByTime: forwardTo('db'),
        deleteUserRecordDataByDay: forwardTo('db'),
        deleteUserRecordDataByPeriod: forwardTo('db'),
        createMarketAmazonCoupon: forwardTo('db'),
        updateMarketAmazonCoupon: forwardTo('db'),
        deleteMarketAmazonCoupon: forwardTo('db'),
        createMarketBuyHistory: forwardTo('db'),
        updateMarketBuyHistory: forwardTo('db'),
        deleteMarketBuyHistory: forwardTo('db'),
        createUserWallet: forwardTo('db'),
        updateUserWallet: forwardTo('db'),
        deleteUserWallet: forwardTo('db'),
        createMarketListDetail: forwardTo('db'),
        updateMarketListDetail: forwardTo('db'),
        deleteMarketListDetail: forwardTo('db'),
        createAdditionalInfo: forwardTo('db'),
        updateAdditionalInfo: forwardTo('db'),
        deleteAdditionalInfo: forwardTo('db'),

        //Use Custom mutation
        signin: require('./mutation/signin'),
        signup: require('./mutation/signup'),
        gettesttoken: require('./mutation/getTestToken'),
        getNewToken: require('./mutation/refreshToken'),
        registerCup: require('./mutation/registerCup'),
        runPerlScript: require('./mutation/runPerlScript'),
        getCupData: require('./mutation/getCupData'),
        signinDataAnalysis: require('./mutation/signinDataAnalysis'),
        createTxUserCoinHistory: require('./mutation/createTxUserCoinHistory'),
        createTxMarketBuyHistory: require('./mutation/createTxMarketBuyHistory'),
        changeCouponCount: require('./mutation/changeCouponCount'),
        changePasswordSignIn: require('./mutation/changePasswordSignIn')
    }
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

module.exports = {
    resolvers,
    fragmentReplacements
};
