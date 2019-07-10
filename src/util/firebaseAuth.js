const admin = require("firebase-admin")

const validateToken = (idToken)=> {
    admin.auth().verifyIdToken(idToken)
        .then(function(decodedToken) {
            return uid = decodedToken.uid;
            console.lod(uid);
        }).catch(function(error) {
            console.log(error)
        });
}

const createToken = (uid)=> {
    admin.auth().getIdToken(idToken.uid, true)
    .then(function(customToken) {
        return customToken;
    })
    .catch(function(error) {
        console.log("Error creating custom token:", error);
    });
}

module.exports = {
  validateToken,
  createToken
}