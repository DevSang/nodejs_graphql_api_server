const admin = require("firebase-admin")
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../../config/jwt.json');
const fs = require('fs');
const path = require('path');

module.exports = (parent, { email, password }, ctx, info) => {
      // private key
      var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
      var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPrivate));

      let payload = {
        email: email
      }

      return {
        accessToken : jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
        refreshToken: jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh)
      }      
  }
