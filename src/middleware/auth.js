const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt.json');
const serviceAccount = require('../../config/serviceAccountKey.json');
const fs = require('fs');
const path = require('path');
const certAccessPublic = fs.readFileSync(path.resolve(jwtConfig.certAccessPublic));
const moment = require('moment');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

module.exports = (req, res, next) => {
    const firebaseAuth = req.header('Authorization');
    const accessToken = req.header('LOON-HEADER-ACCESSTOKEN');
    const refreshToken = req.header('LOON-HEADER-REFRESHTOKEN');
    const marketToken = req.header('LOON-MARKET-TOKEN');

    // console.log('>> [AUTH REQUEST]', moment().format('YYYY.MM.DD HH:mm:ss ddd') );
    // console.log('>>> accessToken  : ', accessToken);
    // console.log('>>> refreshToken : ', refreshToken);
    // console.log('>>> firebaseAuth : ', firebaseAuth);


    // console.log('');

    if (firebaseAuth) {
        let parsed = firebaseAuth.split('Bearer ')[1];
        admin.auth().verifyIdToken(parsed)
        .then((user) => {
            let payload = {
                email: user.email
            }
            res.locals.user = payload;
            console.log('>> [Firebase Request] : ', moment().format('YYYY.MM.DD HH:mm:ss ddd') );
            console.log('>> User : ', user.email);
            next();
        })
        .catch(err => {
            next(err);
        });

    } else if(accessToken){
        let parsed = accessToken.split('Bearer ')[1];

        if(refreshToken){
            res.locals.refreshToken = refreshToken.split('Bearer ')[1];
            next();
            return;
        }
        
        jwt.verify(parsed, certAccessPublic, function(err, decoded) {

            //Loon data 분석 시스템 로그인 시 
            if(!decoded) {
                return res.status(400).send({message:'EXPIRED_ACCESS_TOKEN'});
            } else if(decoded.email === 'admin@looncup.com'){
                console.log('>> [Admin Request]', moment().format('YYYY.MM.DD HH:mm:ss ddd'));
                next();
                return;
            } else if (err) {
                if(err.name=='TokenExpiredError') {
                    next({message:'EXPIRED_ACCESS_TOKEN'});
                } else if(marketToken) {
                    next();
                } else next(err);
                return;
            }
            console.log('>> [Common Request] ', moment().format('YYYY.MM.DD HH:mm:ss ddd') );
            console.log('>> User : ', decoded.email, '\n');

            next();
            return;
        });

    } else{
        return res.status(401).send({message:'NO_TOKEN'});
    }
}
