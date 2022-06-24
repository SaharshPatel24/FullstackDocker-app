import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateCoin = async (name: string) => {
    const urlName = name?.toString().toLowerCase()
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + urlName + '&vs_currencies=usd'
    return await fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(async (res) => {
            return await prisma.coin.update({
                where: {
                    id: urlName,
                },
                data: {
                    current_price: res[urlName!].usd.toString(),
                },
            })
        })
        .catch((err: Error) => {
            return err.message;
        })
}

export default updateCoin;