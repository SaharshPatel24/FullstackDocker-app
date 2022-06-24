import React from 'react';
import Coin from '../interface/interface';
import "./card.css"


const CoinCard = () => {
    const Data = { "id": "bitcoin", "symbol": "btc", "name": "Bitcoin", "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", "current_price": "21232", "timestamp": "2022-06-24T03:20:16.264Z" };

    return (
        <div className="card">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={Data.image} alt={Data.id} />
                    </div>

                    <div className="contentBx">

                        <h2>{Data.name}</h2>

                        <div className="size">
                            {Data.current_price}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CoinCard;