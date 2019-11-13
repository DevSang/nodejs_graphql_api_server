const request = require('request-promise-native');
const moment = require('moment');
const createTxUserCoinHistory = require('./createTxUserCoinHistory');

module.exports = async (
    parent,
    { userId, address, pKey, marketListId, rimDiameter, bodyLength, stemType, firmness, airHoles, lettering, letteringText,
        userName, email, address1, address2, city, country, postalCode, phoneCountry, phoneNumber  
    },
    ctx,
    info
) => {
    try {
        console.log('>>[CREATE CUSTOM HISTORY]');
        console.log(`userId ${userId}`)
        console.log(`rimDiameter ${rimDiameter} bodyLength ${bodyLength} stemType ${stemType} firmness ${firmness} airHoles ${airHoles} lettering ${lettering} letteringText ${letteringText}`)
        
        let marketList = await ctx.db.query.marketList({where: {id: marketListId}});
        if(!marketList) throw new Error(`NO MARKET DATA ${marketListId}`);
        let price = marketList.price;
        let date = new Date();
        const coinHistory = await createTxUserCoinHistory(
            parent,
            {
                userId,
                category: 'BUY',
                contents: 'LEONA D.I.Y.',
                date,
                address: address,
                fromPkey: pKey,
                fromAddress: address,
                price: price
            },
            ctx,
            info
        );
        const orderNumber = date.toISOString().split(/[-TL:\.Z]/).join('');
        
        // 쿠폰 구매 히스토리 저장
        const marketBuyHistory = await ctx.db.mutation.createMarketBuyHistory(
            {
                data: {
                    userId,
                    productId: null,
                    createTime: date,
                    updateTime: date,
                    coinHistoryRowId: {
                        connect: {
                            id: coinHistory.id
                        }
                    },
                    orderNumber,
                    status: true
                }
            },
            `
        {
          id
          orderNumber
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

        return ctx.db.mutation.createMarketCustomize({
            data: {
                userId,
                rimDiameter,
                bodyLength,
                stemType,
                firmness,
                airHoles,
                lettering,
                letteringText,
                marketBuyHistoryId: {
                    connect: {id: marketBuyHistory.id}
                },
                name: userName, email, address1, address2, city, country, postalCode, phoneCountry, phoneNumber 
            }
        },`
        {
            userId
            rimDiameter
            bodyLength
            stemType
            airHoles
            lettering
            letteringText
            name
            email
            address1
            address2
            city
            country
            postalCode
            phoneCountry
            phoneNumber
            marketBuyHistoryId {
                id
                productId
                orderNumber
                status
                cancelYn
                createTime
                coinHistoryRowId {
                    id
                    coin
                    txhash
                }
            }
        }
        `)

    } catch(err) {
        throw err;
    }
};
