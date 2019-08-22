const jwtConfig = require('../../../config/jwt.json');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPrivate));
const crypto = require("crypto");

module.exports = async (parent, { email, password }, ctx, info) => {
	// exception : no firebase token
	if (!ctx.response.locals.user)
		throw new Error('NO_FIREBASE_TOKEN');
	else console.log('>> [SIGN IN]', email);

	const tokenUser = ctx.response.locals.user;
	var user = await ctx.db.query.user({ where: { email: email } });

	// exception : DB에 user가 없을 때
	if (!user) throw new Error('NO_USER_IN_DB');

	// exception : token email 과 param 으로 온 email이 다를 때
	if (user.email != tokenUser.email) throw new Error(`NOT_USERS_TOKEN ${user.email}`);

	let salt = user.encryptSaltString;
	let decodedPassword = crypto.createHash("sha512").update(password + salt).digest("hex");
	
	// exception : password가 일치하지 않을 때
	if(user.password != decodedPassword) throw new Error('INVALID_PASSWORD');
	
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
            where: { userId : {id : user.id} } 
        }, 
        `{
            id
            address
        }`
    );
    wallet = wallet[0];
	// var cups = await ctx.db.query.userCups(
	// 	{
	// 		where: { userId: { id: user.id } }
	// 	},
	// 	`{
	// 			id
	// 			serialNumber {
	// 				id
	// 			}
	// 		}`
	// );
	// cups = cups[0];

	// jwt payload
	let payload = {
		email: user.email
	}

	return {
		accessToken: jwt.sign(payload, certAccessPrivate, jwtConfig.algorithmAccess),
		refreshToken: jwt.sign(payload, certRefreshPrivate, jwtConfig.algorithmRefresh),
		user,
		country,
        wallet
	};
}

