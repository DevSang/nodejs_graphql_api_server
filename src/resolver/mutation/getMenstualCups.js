module.exports = async (parent, {
    id,
    cupName,
    cupSize,
    rimDiameter,
    bodyLength,
    stemLength,
    totalLength,
    stemType,
    quarterVolume,
    halfVolume,
    threeFourthVolume,
    totalVolume
}, ctx, info) => {

    let query = {}
    if(id && id != -1) query.id = id;
    if(cupName) query.cupName = cupName;
    if(cupSize) query.cupSize = cupSize;
    if(rimDiameter) query.rimDiameter = rimDiameter;
    if(bodyLength) query.bodyLength = bodyLength;
    if(stemLength) query.stemLength = stemLength;
    if(totalLength) query.totalLength = totalLength;
    if(stemType) query.stemType = stemType;
    if(quarterVolume) query.quarterVolume = quarterVolume;
    if(halfVolume) query.halfVolume = halfVolume;
    if(threeFourthVolume) query.threeFourthVolume = threeFourthVolume;
    if(totalVolume) query.totalVolume = totalVolume;

    let all = await ctx.db.query.menstualCups({where: query, orderBy: 'cupName_ASC'})
    return all
}
