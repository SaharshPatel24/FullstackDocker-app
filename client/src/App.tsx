import React, { useState } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Coin from './interface/interface';
import './App.css';

const App = () => {
  const Data: Coin[] = [{ "id": "bitcoin", "symbol": "btc", "name": "Bitcoin", "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", "current_price": "21232", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "ethereum", "symbol": "eth", "name": "Ethereum", "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", "current_price": "1156.73", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "tether", "symbol": "usdt", "name": "Tether", "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707", "current_price": "1.001", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "usd-coin", "symbol": "usdc", "name": "USD Coin", "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389", "current_price": "1.002", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "binancecoin", "symbol": "bnb", "name": "BNB", "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850", "current_price": "233.53", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "ripple", "symbol": "xrp", "name": "XRP", "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731", "current_price": "0.366762", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "binance-usd", "symbol": "busd", "name": "Binance USD", "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766", "current_price": "1.003", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "cardano", "symbol": "ada", "name": "Cardano", "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860", "current_price": "0.495254", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "binancecoin", "symbol": "bnb", "name": "BNB", "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850", "current_price": "233.53", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "ripple", "symbol": "xrp", "name": "XRP", "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731", "current_price": "0.366762", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "binance-usd", "symbol": "busd", "name": "Binance USD", "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766", "current_price": "1.003", "timestamp": "2022-06-24T03:20:16.264Z" }, { "id": "cardano", "symbol": "ada", "name": "Cardano", "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860", "current_price": "0.495254", "timestamp": "2022-06-24T03:20:16.264Z" }]

  const [query, setQuery] = useState("")

  return (<>
    <div className='App'>
      <form className="form-search" method="get" action="#">
        <input type="search" name="search" onChange={event => setQuery(event.target.value)} placeholder="search your book here for.." />
        <button type="submit">Search</button>
      </form>
      <List
        sx={{
          marginTop: "-5%",
          width: '100%',
          maxWidth: 700,
          bgcolor: 'background.paper',
          position: 'fixed',
          maxHeight: 150,
          '& ul': { padding: 0 },
          '&:hover': {
            cursor: 'pointer',
            background: "#ddd",
          }

        }} >
        {
          Data.filter((data: Coin) => {
            if (query === '') {
              return;
            } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
              return data;
            }
          }).map((data: Coin, key: number) => {
            return <ListItem key={key}>
              <ListItemAvatar>
                <Avatar>
                  <img src={data.image} alt={data.id} width="30" height="30" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={data.name}
              />
            </ListItem>
          })
        }
      </List>
    </div>
  </>
  )
}

export default App;
