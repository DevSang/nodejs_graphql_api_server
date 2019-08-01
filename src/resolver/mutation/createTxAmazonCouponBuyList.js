const request = require('request-promise-native');
const moment = require('moment');
const changeCouponCount = require('./changeCouponCount');
const createTxUserCoinHistory = require('./createTxUserCoinHistory');

module.exports = async (
    parent,
    { userId, address, pKey, couponPrice, couponName },
    ctx,
    info
) => {
    console.log('>>[CREATE USER TOKEN HISTORY]');
    console.log('>>> userId : ' + userId);
    console.log('>>> couponPrice : ' + couponPrice);

    //url : 172.31.0.13
    // 쿠폰 조회
    let coupon = await ctx.db.query.marketAmazonCoupons({
        where: {
            price: couponPrice,
            name: couponName,
            availability: true
        },
        orderBy: 'startTime_ASC',
        first: 1
    });
    if (!coupon || coupon.length == 0) {
        return new Error('No coupon');
    }
    coupon = coupon[0];
    let tokenTxYn = false;

    // 쿠폰 lock
    await ctx.db.mutation.updateMarketAmazonCoupon({
        data: { availability: false },
        where: { id: coupon.id }
    });

    try {
        //토큰 구매 트랜잭션 요청
        let date = moment().format('YYYY-MM-DDThh:mm:ss');
        const coinHistory = await createTxUserCoinHistory(
            parent,
            {
                userId,
                category: 'BUY',
                contents: 'Amazon Coupon',
                date,
                fromPkey: pKey,
                fromAddress: address,
                coin: coupon.price
            },
            ctx,
            info
        );
        tokenTxYn = true;

        // 쿠폰 구매 히스토리 저장
        const result = await ctx.db.mutation.createMarketAmazonCouponBuyList(
            {
                data: {
                    userId,
                    couponRowId: {
                        connect: {
                            id: coupon.id
                        }
                    },
                    createTime: date,
                    updateTime: date,
                    coinHistoryRowId: {
                        connect: {
                            id: coinHistory.id
                        }
                    },
                    status: true
                }
            },
            `
        {
          id
          couponRowId {
            id
            couponId
            name
            price
            startTime
            endTime
          }
          coinHistoryRowId {
            id
            coin
            txhash
          }
          status
          cancelYn
          createTime
        }
        `
        );

        // 구매가능한 쿠폰 수 수정(-1)
        changeCouponCount(
            parent,
            {
                name: '10% 할인 Amazon Coupon',
                price: 10,
                plusYn: false
            },
            ctx,
            info
        );

        return result;
    } catch (err) {
        console.log(err);
        //쿠폰 상태 변경
        await ctx.db.mutation.updateMarketAmazonCoupon({
            data: { availability: true },
            where: { id: coupon.id }
        });

        // 토큰 환불
        if (tokenTxYn) {
            date = moment().format('YYYY-MM-DDThh:mm:ss');
            await createTxUserCoinHistory(
                parent,
                {
                    userId,
                    category: 'REFUND',
                    contents: 'Fail to buy Amazon Coupon',
                    date,
                    fromAddress: 'loon',
                    address,
                    coin: coupon.price
                },
                ctx,
                info
            );
        }
        return err;
    }
};
