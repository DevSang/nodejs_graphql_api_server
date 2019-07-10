module.exports = async (parent, { anon_serial_number }, ctx, info) => {


    let cup = await ctx.db.mutation.createCup({
        data:{
            hw:{
                connect : {
                    id : 1
                }
            },
            fw :{
                connect : {
                    id : 1
                    }
            },
            company :{
                connect : {
                    id : 1
                }
            },
            calib :{
                connect : {
                    id : 1
                }
            },
            encryption_key : 12345,
            anon_serial_number : anon_serial_number
        }
    });

    let user_cup = await ctx.db.mutation.createUser_cups({
        data:{
            user :{
                connect : {
                    id:anon_serial_number
                }
            },
            serial_number : {
                connect: {
                    id:cup.id
                }
            } 
        }
    },
    `{
        id
        serial_number {
            id
        }
    }`
    )

    console.log('>> [REGISTER CUP] user_Id : ',anon_serial_number," serial_number : ", user_cup.serial_number.id);

    return {
        user_cup
    }
}
