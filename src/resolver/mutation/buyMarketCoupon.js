const request = require('request-promise-native');
const moment = require('moment');
const changeCouponCount = require('./changeCouponCount');
const createTxUserCoinHistory = require('./createTxUserCoinHistory');

module.exports = async (
    parent,
    { userId, address, pKey, marketListId, category },
    ctx,
    info
) => {
    console.log('>>[CREATE USER TOKEN HISTORY]' , moment().format('YYYY.MM.DD HH:mm:ss ddd'));
    console.log('>>> userId : ' + userId);
    console.log('>>> marketListId : ' + marketListId);

    //url : 172.31.0.13
    // 쿠폰 조회
    // 추후 쿠폰 외의 상품 검색 추가
    // if(!category || category==='AMAZONECOUPON') {
        
    // }
    let coupon = await ctx.db.query.marketAmazonCoupons({
        where: {
            marketListId,
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
        let date = new Date();
        const coinHistory = await createTxUserCoinHistory(
            parent,
            {
                userId,
                category: 'USE',
                contents: 'Amazon Coupon',
                date,
                address: address,
                fromPkey: pKey,
                fromAddress: address,
                price: coupon.price
            },
            ctx,
            info
        );
        tokenTxYn = true;
        
        const orderNumber = date.toISOString().split(/[-TL:\.Z]/).join('');

        // 쿠폰 구매 히스토리 저장
        const result = await ctx.db.mutation.createMarketBuyHistory(
            {
                data: {
                    userId,
                    productId: coupon.id,
                    createTime: date,
                    updateTime: date,
                    coinHistoryRowId: {
                        connect: {
                            id: coinHistory.id
                        }
                    },
                    orderNumber,
                    category:"AMAZONCOUPON",
                    status: true
                }
            },
            `
        {
          id
          productId
          orderNumber
          coinHistoryRowId {
            id
            coin
            txhash
          }
          status
          category
          cancelYn
          createTime
        }
        `
        );
        result.coupon = coupon;

        // 구매가능한 쿠폰 수 수정(-1)
        changeCouponCount(
            parent,
            {
                marketListId,
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
                    price: coupon.price
                },
                ctx,
                info
            );
        }
        return err;
    }
};
