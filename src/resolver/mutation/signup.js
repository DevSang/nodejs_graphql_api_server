const admin = require('firebase-admin');
const jwtConfig = require('../../../config/jwt.json');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const crypto = require("crypto");
var rand = require('csprng');
var voucher_codes = require('voucher-code-generator');

// private key
var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPrivate));

var timerHashmap = {};

module.exports = async (parent, { email, password, dob, given_birth,last_name,first_name,country_id, ethnicity_id, emailVerify}, ctx, info) => {
    // exception:no firebase token
    // if(!ctx.response.locals.user) throw new Error('NO_FIREBASE_TOKEN');
    // else console.log(`>> [SIGNUP] ${email}`);

    // exception: duplicated email
    const lowerEmail = email.toLowerCase();

    var user = await ctx.db.query.user({ where: { email : lowerEmail } });
    let country= null;
    if(user){
        try{
            console.log("User already exist");
            let fbUser = await admin.auth().getUserByEmail(lowerEmail)
            let fbProvider = fbUser.toJSON().providerData[0].providerId;

            //Email & Oauth구분
            if(fbProvider === 'password'){
                clearTimeout(timerHashmap[lowerEmail]);

                timerHashmap[lowerEmail] = setTimeout(async () => {
                    let fbUser = await admin.auth().getUserByEmail(lowerEmail);
                    if(!fbUser.toJSON().emailVerified || fbUser.toJSON().emailVerified === 'false'){
                        admin.auth().deleteUser(fbUser.toJSON().uid);
                        let deleteResult = await ctx.db.mutation.deleteUser({ where: { email : lowerEmail } });
                        console.log(">> [Delete User]" , deleteResult.email);
                        delete timerHashmap[lowerEmail];
                    }
                }, 48 * 60 * 60 * 1000);

            } else {
                throw new Error('EMAIL_ALREADY_EXIST');
            }
        } catch(err) {
            throw err;
        }
    } else {
        try{
            console.log(">> [New User] ", lowerEmail);
            let inputPassword = password;
            let salt = rand(160, 36);
            let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
            let referralCode;
            let data;
            do { 
                referralCode = voucher_codes.generate({length: 6, count: 1});
                referralCode = referralCode[0].toUpperCase();
                data = await ctx.db.query.user({ where: { referralCode } });
            } while(data)

            user = await ctx.db.mutation.createUser({
                data:{
                    dob:dob,
                    givenBirth:given_birth,
                    email:lowerEmail,
                    password: hashPassword,
                    lastName:last_name,
                    firstName:first_name,
                    countryId:country_id,
                    ethnicityId:{
                        connect:{
                            id:ethnicity_id
                        }
                    },
                    encryptSaltString : salt,
                    emailVerify : emailVerify,
                    referralCode
                }
            });

            // loon hemo db
            country = await ctx.db.query.country(
                { 
                    where: { id : country_id} 
                }, 
                `{
                    id
                    countryName
                }`
            );

            //Set signup expire time
            let fbUser = await admin.auth().getUserByEmail(lowerEmail)
            let fbProvider = fbUser.toJSON().providerData[0].providerId;

            if(fbProvider === 'password'){
                try{
                    timerHashmap[lowerEmail] = setTimeout(async () => {
                        let fbUser = await admin.auth().getUserByEmail(lowerEmail);
                        if(!fbUser.toJSON().emailVerified || fbUser.toJSON().emailVerified === 'false'){
                            admin.auth().deleteUser(fbUser.toJSON().uid);
                            let deleteResult = await ctx.db.mutation.deleteUser({ where: { email : lowerEmail } });
                            console.log(">> [Delete User]" , deleteResult.email);
                            delete timerHashmap[lowerEmail];
                        }
                    }, 48 * 60 * 60 * 1000);
                } catch(err) {
                    throw err;
                }
                // console.log("Timer Start : ",email,"time : ", timerHashmap[email]);
            }
        } catch(err) {
            throw err;
        }

        // // jwt payload
        let payload = {
            email:user.email
        }

        return {
            accessToken : jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
            refreshToken: jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh),
            user,
            country
        }
    }
}
