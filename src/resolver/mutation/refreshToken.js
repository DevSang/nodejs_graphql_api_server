const jwt = require('jsonwebtoken');
const jwtConfig = require('../../../config/jwt.json');
const fs = require('fs');
const path = require('path');
const crypto = require("crypto");
const moment = require('moment');

// private key
var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPublic));

// public key (for verify)
var certRefreshPublic = fs.readFileSync(path.resolve(jwtConfig.certRefreshPublic));

module.exports = async (parent, { email }, ctx, info) => {
    if(!ctx.response.locals.refreshToken)
        throw new Error('NO_REFRESH_TOKEN');
    else
        // console.log('>> [GET NEW TOKEN] ',ctx.response.locals.refreshToken);
        console.log('>> [GET NEW TOKEN] ', moment().format('YYYY.MM.DD HH:mm:ss ddd'));

    console.log('>> SignIn : ', email, '\n');
    var refreshToken = ctx.response.locals.refreshToken;
    var user = await ctx.db.query.user({ where: { email : email } });
    
    var country = await ctx.db.query.country(
        { 
            where: { id : user.countryId} 
        }, 
        `{
            id
            countryName
        }`
    );
    var wallet = await ctx.db.query.userWallets(
        { 
            where: { userId : {id : user.id}, status: true } 
        }, 
        `{
            id
            address
        }`
    );
    wallet = wallet[0];
    
    // var cups = await ctx.db.query.userCups(
    //                     { 
    //                        where: { userId : {id : user.id} } 
    //                     }, 
    //                     `{
    //                         id
    //                         serialNumber {
    //                             id
    //                         }
    //                     }`
    //                 );
    // cups = cups[0];

    try {
        var decodedRefesh = jwt.verify(refreshToken, certRefreshPublic);
    } catch(err) {
        if(err.name=='TokenExpiredError') {
            throw new Error('EXPIRED_REFRESH_TOKEN');
        }else {
            throw err;
        }
    }

    let payload = {
        email : decodedRefesh.email
    }

    refreshToken = (decodedRefesh.exp-new Date().getTime()/1000) < (60*60*24*10)?
                    jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh) : refreshToken;

    return {
        accessToken : jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
        refreshToken: refreshToken,
        user,
        country,
        wallet
    }
}

