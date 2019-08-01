module.exports = async (parent, { name, price, plusYn }, ctx, info) => {
    const couponList = await ctx.db.query.marketLists({
        where: { name, price }
    });
    if (!couponList || couponList.length == 0) {
        throw new Error(
            `Couldn't fine amazon coupon name ${name} price ${price}`
        );
    }
    let { count } = couponList[0];
    if (plusYn) {
        count = count + 1;
    } else {
        count = count - 1;
    }
    const result = await ctx.db.mutation.updateMarketList({
        data: {
            count
        },
        where: { id: couponList[0].id }
    });
    return result;
};
