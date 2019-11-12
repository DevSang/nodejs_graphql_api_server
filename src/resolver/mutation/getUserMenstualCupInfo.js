module.exports = async (parent, {
    userId,
}, ctx, info) => {
    let usedCups = await ctx.db.query.additionalInfoes({where: {userId, inUseMenstrualCup_not: ""}});
    let cup;
    if(usedCups.length == 0) {
        return null
    } else {
        cup = await ctx.db.query.menstualCups({where: {cupName: usedCups[0].inUseMenstrualCup}, orderBy: 'cupName_ASC'})
    }

    // let cup = await ctx.db.query.menstualCups({where: query, orderBy: 'cupName_ASC'})
    if(cup.length > 0) {
        let cupData = [];
        await cup.map((data) => {
            cupData.push({size: String(data.cupSize), rim: data.rimDiameter, body: data.bodyLength})
        })
        return {name: usedCups[0].inUseMenstrualCup, size: usedCups[0].inUseMenstrualCupSize, cupData}
    } else {
        return null
    }
    
}
