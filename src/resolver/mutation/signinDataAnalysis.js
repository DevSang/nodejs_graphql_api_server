const fs = require('fs');
const path = require('path');

module.exports = async (parent, { userId, password }, ctx, info) => {
	console.log('>> [DATA ANALYSIS SIGN IN]', userId);

	var user = await ctx.db.query.users_data_analyses({ where: { user_id : userId } });

	// exception : loon DB에 user가 없을 때
	if (!user) throw new Error('NO_USER_IN_LOON_DB');

	// exception : password 불일치
	if(user[0].password != password) throw new Error('INVALID_PASSWORD');


	return {
		result: true
	}
}
