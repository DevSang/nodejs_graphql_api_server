const jwtConfig = require('../../../config/jwt.json');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
var certAccessPrivate = fs.readFileSync(path.resolve(jwtConfig.certAccessPrivate));
var certRefreshPrivate = fs.readFileSync(path.resolve(jwtConfig.certRefreshPrivate));
const crypto = require("crypto");
var rand = require('csprng');

module.exports = async (parent, { email, password }, ctx, info) => {
	// exception : no firebase token
	if (!ctx.response.locals.user)
		throw new Error('NO_FIREBASE_TOKEN');
	else console.log(">> [Change Password] ", email);

	const tokenUser = ctx.response.locals.user;
	var user = await ctx.db.query.user({ where: { email: email } });

	// exception : DB에 user가 없을 때
	if (!user) throw new Error('NO_USER_IN_DB');

	// exception : token email 과 param 으로 온 email이 다를 때
	if (user.email != tokenUser.email) throw new Error(`NOT_USERS_TOKEN ${user.email}`);
	
	let inputPassword = password;
	let salt = rand(160, 36);
	let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
	try{
		user = await ctx.db.mutation.updateUser({
			data:{
				password: hashPassword,
				encryptSaltString : salt,
			},
			where: {
				email: user.email
			}
		});

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

	} catch(err) {
		throw err;
	}
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

