import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Coin from '../interface/interface';
import "./card.css"


const CoinCard = () => {
    const [Data, SetData] = useState<Coin>();
    const [loading, setLoading] = useState(true)
    const params = useParams();



    useEffect(() => {
        console.log(params.id)
        const Url = `http://localhost:5001/coin?id=${params.id!}`;
        const FecthCoin = async () => {
            const data = await fetch(Url)
            console.log(data);
            const coin: Coin = await data.json();
            console.log(coin);
            SetData(coin);
            setLoading(false);
        }
        FecthCoin();
    }, [loading]);

    setInterval(() => setLoading(true), 5000);

    return (
        <div className="card">
            <div className="container">
                <div className="card">
                    <div className="imgBx">

                        <img src={Data && Data!.image} alt={Data && Data!.id} />
                    </div>

                    <div className="contentBx">

                        <h2>{Data && Data!.name}</h2>

                        <div className="size">
                            {Data && Data!.current_price}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CoinCard;