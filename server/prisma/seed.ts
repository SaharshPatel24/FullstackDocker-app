import { PrismaClient } from '@prisma/client';
import coin from '../src/interface/interface';
const prisma = new PrismaClient();

// const usersData = [
//     {
//         id: "",
//         symbol: "",
//         name: "",
//         image: "",
//         current_price: "",
//     },
// ]

const fetchCoins = async () => {
    const CoinsData: coin[] = []
    return await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res) => {
            return res.json();
        })
        .then(async (data) => {
            for (const _coin of data) {
                const coin = {
                    id: _coin.id,
                    symbol: _coin.symbol,
                    name: _coin.name,
                    image: _coin.image,
                    current_price: _coin.current_price.toString(),
                    timestamp: new Date(),
                }
                CoinsData.push(coin);
            }
            for (const _user of CoinsData) {
                const user: coin = await prisma.coin.create({
                    data: _user,
                });
                console.log(`Created user with id: ${user.id}`);
            }

        })
        .catch(err => { console.log(err) });
}

const main = async () => {
    console.log('start seeding …')
    return await fetchCoins()
        .then(() => {
            console.log('seeding done');
        })
        .catch(err => {
            return err
        });
}

main()
    .catch(e => {
        console.error('foo', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })