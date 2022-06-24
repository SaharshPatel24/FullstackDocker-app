import express from "express";
import { PrismaClient } from "@prisma/client";
import coin from "../src/interface/interface";
import updateCoin from "./dataSource/data";
// import "../prisma/seed";

const app = express()
const PORT = process.env.PORT || 5000

const prisma = new PrismaClient()

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("Welcome to TypeScript server!")
})

app.get('/coins', async (req, res) => {
  const coins: coin[] = await prisma.coin.findMany()
  if (coins!) {
    res.status(200).json(coins);
  }
  else {
    res.status(404).send("There is no data available in the database");
  }
})



app.get('/coin', async (req, res) => {

  // if (req.query.id) {
  //   coin = await prisma.coin.findUnique({
  //     where: {
  //       id: req.query.id?.toString(),
  //     },
  //   })
  // } else if (req.query.name) {
  //   coin = await prisma.coin.findUnique({
  //     where: {
  //       name: req.query.name?.toString(),
  //     },
  //   })
  // } else if (req.query.symbol) {
  //   coin = await prisma.coin.findUnique({
  //     where: {
  //       symbol: req.query.symbol?.toString(),
  //     },
  //   })
  // }
  if (req.query.id) {
    const data: coin | null = await prisma.coin.findUnique({
      where: {
        id: req.query.id.toString().toLowerCase()!,
      },
    })
    if (data!) {
      if (data != undefined && data != null) {
        if (Math.abs(data.timestamp!.getTime() - new Date().getTime()) > 150000) {
          updateCoin(data.id!.toString())
            .then((coin) => {
              res.status(200).json(coin);
            })
            .catch((err: Error) => {
              res.status(404).json(err);
            })
        }
        else {
          res.status(200).json(data!)
        }
      }
    }
    else {
      res.status(404).json(" Sorry, Not data available")
    }
  }
  else {
    res.status(404).json("name query is required")
  }
})

app.use((req, res) => {
  res.status(404).send(
    "<h1>Page not found on the server</h1>")
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});