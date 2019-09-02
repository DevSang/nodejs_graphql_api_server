const admin = require('firebase-admin');
const jwtConfig = require('../../../config/jwt.json');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const crypto = require("crypto");
var rand = require('csprng');

// private key
var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPrivate));

module.exports = async (parent, { email, password}, ctx, info) => {
    // exception:no firebase token
    // if(!ctx.response.locals.user) throw new Error('NO_FIREBASE_TOKEN');
    // else console.log(`>> [SIGNUP] ${email}`);

    // exception: duplicated email
    var user = await ctx.db.query.user({ where: { email : email } });
    if (!user) throw new Error('NO_USER_IN_DB');
    try{
        console.log(">> [Change Password] ", email);
        let inputPassword = password;
        let salt = rand(160, 36);
        let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

        user = await ctx.db.mutation.updateUser({
            data:{
                password: hashPassword,
                encryptSaltString : salt,
            }
        });

    } catch(err) {
        throw err;
    }

    // jwt payload
    let payload = {
        email:user.email
    }

    return {
        // accessToken : jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
        // refreshToken: jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh),
        user,
    }
}
