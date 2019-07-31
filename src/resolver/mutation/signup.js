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

var timerHashmap = {};

module.exports = async (parent, { email,password, dob, given_birth,last_name,first_name,country_id, ethnicity_id}, ctx, info) => {
    // exception:no firebase token
    if(!ctx.response.locals.user) throw new Error('NO_FIREBASE_TOKEN');
    else console.log(`>> [SIGNUP] ${email}`);

    // exception: duplicated email
    var user = await ctx.db.query.user({ where: { email : email } });
    console.log(user);
    if(user){
        try{
            console.log("User already exist");
            let fbUser = await admin.auth().getUserByEmail(email)
            let fbProvider = fbUser.toJSON().providerData[0].providerId;

            //Email & Oauth구분
            if(fbProvider === 'password'){
                clearTimeout(timerHashmap[email]);

                timerHashmap[email] = setTimeout(async () => {
                    let fbUser = await admin.auth().getUserByEmail(email);
                    if(!fbUser.toJSON().emailVerified || fbUser.toJSON().emailVerified === 'false'){
                        admin.auth().deleteUser(fbUser.toJSON().uid);
                        let deleteResult = await ctx.db.mutation.deleteUser({ where: { email : email } });
                        console.log(">> [Delete User]" , deleteResult.email);
                        delete timerHashmap[email];
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
            console.log(">> [New User] ", email);
            let inputPassword = password;
            let salt = rand(160, 36);
            let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

            user = await ctx.db.mutation.createUser({
                data:{
                    dob:dob,
                    givenBirth:given_birth,
                    email:email,
                    password: hashPassword,
                    lastName:last_name,
                    firstName:first_name,
                    countryId:{
                        connect:{
                            id:country_id
                        }
		            },
                    ethnicityId:{
                        connect:{
                            id:ethnicity_id
                        }
                    },
                    encryptSaltString : salt
                }
            });

            //Set signup expire time
            let fbUser = await admin.auth().getUserByEmail(email)
            let fbProvider = fbUser.toJSON().providerData[0].providerId;

            if(fbProvider === 'password'){
                try{
                    timerHashmap[email] = setTimeout(async () => {
                        let fbUser = await admin.auth().getUserByEmail(email);
                        if(!fbUser.toJSON().emailVerified || fbUser.toJSON().emailVerified === 'false'){
                            admin.auth().deleteUser(fbUser.toJSON().uid);
                            let deleteResult = await ctx.db.mutation.deleteUser({ where: { email : email } });
                            console.log(">> [Delete User]" , deleteResult.email);
                            delete timerHashmap[email];
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

        // jwt payload
        let payload = {
            email:user.email
        }

        return {
            accessToken : jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
            refreshToken: jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh),
            user
        }
    }
}
