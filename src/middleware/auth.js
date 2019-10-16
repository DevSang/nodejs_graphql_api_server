const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt.json');
const serviceAccount = require('../../config/serviceAccountKey.json');
const fs = require('fs');
const path = require('path');
const certAccessPublic = fs.readFileSync(path.resolve(jwtConfig.certAccessPublic));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

module.exports = (req, res, next) => {
    const firebaseAuth = req.header('Authorization');
    const accessToken = req.header('LOON-HEADER-ACCESSTOKEN');
    const refreshToken = req.header('LOON-HEADER-REFRESHTOKEN');
    const adminToken = req.header('LOON-ADMIN-TOKEN');

    // console.log('>> [REQUEST]');
    // console.log('>>> accessToken  : ', accessToken);
    // console.log('>>> refreshToken : ', refreshToken);
    // console.log('>>> firebaseAuth : ', firebaseAuth);
    // console.log('');

    if (firebaseAuth) {
        let parsed = firebaseAuth.split('Bearer ')[1];
        admin.auth().verifyIdToken(parsed)
        .then((user) => {
            console.log(`user ${JSON.stringify(user)}`)
            let payload = {
                email: user.email
            }
            res.locals.user = payload;
            console.log('>> [FIREBASE REQUEST]', user.email);
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
            if(decoded.email === 'admin@looncup.com'){
                console.log('>> [LOON DATA ANALYSIS SYSTEM REQUEST]', decoded.email);
                next();
                return;
            }
            else if (err) {
                if(err.name=='TokenExpiredError') {
                    next({message:'EXPIRED_ACCESS_TOKEN'});
                }
                else next(err);
                return;
            }
            console.log('>> [COMMON REQUEST] from :', decoded.email);
            // access token 만료 10분 전일 때-사용하지 않음
            // if (decoded.exp-new Date().getTime()/1000 < 10 * 60){
            //     res.set('JWT-TOKEN-NOTICE', 'NEED_REFRESH_TOKEN');
            // }
            // 얘는 user를 넘기면 안되고 필요도 없음.
            next();
            return;
        });

    } else{
        return res.status(401).send({message:'NO_TOKEN'});
    }
}
