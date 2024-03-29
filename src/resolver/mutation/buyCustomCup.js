const request = require('request-promise-native');
const moment = require('moment');
const createTxUserCoinHistory = require('./createTxUserCoinHistory');

module.exports = async (
    parent,
    { userId, address, pKey, marketListId, rimDiameter, bodyLength, stemType, firmness, airHoles, lettering, letteringText,
        userName, email, address1, address2, city, country, postalCode, phoneCountry, phoneNumber, addtionalSuggestion, deliveryStatus

    },
    ctx,
    info
) => {
    try {
        console.log('>>[CREATE CUSTOM HISTORY] ', moment().format('YYYY.MM.DD HH:mm:ss ddd'));
        console.log(`>> userId : ${userId}`)
        console.log(`>> rimDiameter : ${rimDiameter} \n >> bodyLength : ${bodyLength}\n >> stemType : ${stemType}\n >> firmness : ${firmness}\n >> airHoles : ${airHoles}\n >> lettering : ${lettering}\n >> letteringText : ${letteringText}\n\n`)
        
        let marketList = await ctx.db.query.marketList({where: {id: marketListId}});
        if(!marketList) throw new Error(`NO MARKET DATA ${marketListId}`);
        let price = marketList.price;
        if(userId == 4){
            price = 1;
        }
        let date = new Date();
        const coinHistory = await createTxUserCoinHistory(
            parent,
            {
                userId,
                category: 'USE',
                contents: 'LEONA Designed by _',
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
                    category:'LEONA Designed by _',
                    status: true,
                    deliveryStatus:'Order complete'
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
          category
          createTime
          deliveryStatus
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
                userName: userName, email, address1, address2, city, country, postalCode, phoneCountry, phoneNumber,
                addtionalSuggestion
            }
        },`
        {
            userId
            rimDiameter
            bodyLength
            stemType
            firmness
            airHoles
            lettering
            letteringText
            userName
            email
            address1
            address2
            city
            country
            postalCode
            phoneCountry
            phoneNumber
            addtionalSuggestion
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
