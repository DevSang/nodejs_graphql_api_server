
module.exports = async (parent, {userId}, ctx, info) => {
    const user = await ctx.db.query.user({where: {id: userId}});
    if(!user || user.length == 0) return new Error('No User')
    const country = await ctx.db.query.country({where: {id: user.countryId}})
    
    return {
        user,
        country
    }
}
