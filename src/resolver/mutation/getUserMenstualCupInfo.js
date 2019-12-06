module.exports = async (parent, {
    userId,
}, ctx, info) => {
    let usedCups = await ctx.db.query.users({where: {id:userId, menstrualCup_not: ""}});
    let cup;
    if(usedCups.length == 0) {
        return null
    } else {
        cup = await ctx.db.query.menstrualCups({where: {cupName: usedCups[0].menstrualCup}, orderBy: 'cupName_ASC'})
    }

    // let cup = await ctx.db.query.menstualCups({where: query, orderBy: 'cupName_ASC'})
    if(cup.length > 0) {
        let cupData = [];
        await cup.map((data) => {
            cupData.push({size: String(data.cupSize), rim: data.rimDiameter, body: data.bodyLength})
        })
        return {name: usedCups[0].menstrualCup, size: usedCups[0].cupSize, cupData}
    } else {
        return null;
    }
    
}
