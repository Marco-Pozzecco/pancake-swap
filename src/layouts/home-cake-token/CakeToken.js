import React, { useEffect, useState } from "react";
import { Button } from "../../components/buttons/Button";
import {LearnBtn} from "../../components/buttons/LearnBtn"
// images imports
import bottomRight from "../../resources/home/cake/bottom-right.webp";
import bottomRight2x from "../../resources/home/cake/bottom-right@2x.webp";
import coin from "../../resources/home/cake/coin.webp";
import coin2x from "../../resources/home/cake/coin@2x.webp";
import topLeft from "../../resources/home/cake/top-left.webp";
import topLeft2x from "../../resources/home/cake/top-left@2x.webp";
import topRight from "../../resources/home/cake/top-right.webp";
import topRight2x from "../../resources/home/cake/top-right@2x.webp";
// Import scss
import "./cake-token.scss";

export function CakeToken() {
    let [token, setToken] = useState(null);

    const baseURL = "https://api.coingecko.com/api/v3/"

    async function getPancakeSwapData() {
        let response = await fetch(`${baseURL}coins/pancakeswap-token?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`);
        let data = await response.json();
        setToken(data);
    }

    useEffect(() => {
        getPancakeSwapData();
        const intervalID = setInterval(() => getPancakeSwapData(), 6000);
        return () => clearInterval(intervalID);
    }, []) 

    return (
        <section className="cake-token">
            <div className="cake-wrapper">
                <div className="cake-content">
                    <div className="cake-info">
                        <h1>
                            <span className="accent-color-text">CAKE </span>
                            makes our world go round.
                        </h1>
                        <p>
                            CAKE token is at the heart of the PancakeSwap
                            ecosystem. Buy it, win it, farm it, spend it, stake
                            it... heck, you can even vote with it!
                        </p>
                        <div className="cake-info-buttons">
                            <Button 
                                type="fullButton"
                                text="Buy CAKE"
                            />
                            <LearnBtn />
                        </div>
                    </div>
                    <div className="cake-coins">
                        <img
                            id="pancake-bottom-right"
                            srcSet={`${bottomRight} 512w, ${bottomRight2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="pancake-top-left"
                            srcSet={`${topLeft} 512w, ${topLeft2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="pancake-top-right"
                            srcSet={`${topRight} 512w, ${topRight2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="cake-coin"
                            srcSet={`${coin} 512w, ${coin2x} 1024w`}
                            alt="Pancake coin"
                        />
                    </div>
                </div>

                <div className="cake-stats">
                    <div className="cake-circulating-supply">
                        <p className="text-subtle">Circulating Supply</p>
                        <p className="text-cake-stats" id="circulating-supply">
                            {token && token.market_data?.circulating_supply.toLocaleString("en")}
                        </p>
                    </div>
                    <div className="cake-supply">
                        <p className="text-subtle">Total Supply</p>
                        <p className="text-cake-stats" id="total-supply">
                            {token && token.market_data?.total_supply.toLocaleString("en")}
                        </p>
                    </div>
                    <div className="cake-max-supply">
                        <p className="text-subtle">Max Supply</p>
                        <p className="text-cake-stats" id="max-supply">
                            {token && token.market_data?.max_supply.toLocaleString("en")}
                        </p>
                    </div>
                    <div className="cake-cap">
                        <p className="text-subtle">Market cap</p>
                        <p className="text-cake-stats" id="market-cap">
                            ${token && token.market_data?.market_cap.usd.toLocaleString("en")}
                        </p>
                    </div>
                    <div className="cake-burned">
                        <p className="text-subtle">Burned to date</p>
                        <p className="text-cake-stats" id="cake-burned">
                            585,593,391
                        </p>
                    </div>
                    <div className="cake-emissions">
                        <p className="text-subtle">Current emissionis</p>
                        <p className="text-cake-stats" id="cake-stats">
                            11.16/block
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
