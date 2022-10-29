import React from "react";
import "./_win-prizes.scss";
import {randomNumInRange, callFuncAtInterval} from "../../script/randomize.mjs";
// import images
import ball2 from "../../resources/home/winPrizes/ball2-1024.webp";
import ball4 from "../../resources/home/winPrizes/ball4-1024.webp";
import ball6 from "../../resources/home/winPrizes/ball6-1024.webp";
import ball7 from "../../resources/home/winPrizes/ball7-1024.webp";
import ball9 from "../../resources/home/winPrizes/ball9-1024.webp";

import cardBottomLeft from "../../resources/home/winPrizes/card-bottom-left-1024.webp";
import cardGreen from "../../resources/home/winPrizes/card-green-1024.webp";
import cardRed from "../../resources/home/winPrizes/card-red-1024.webp";
import cardTopRight from "../../resources/home/winPrizes/card-top-right-1024.webp";

import crystalBall from "../../resources/svgs/crystal-ball.svg";
import ticket from "../../resources/svgs/ticket.svg";

export function WinPrizes() {
    return (
        <section className="win-prizes">
            <div className="floating-balls">
                <img src={ball2} alt="Lottery ball number 2" id="ball-n2" />
                <img src={ball4} alt="Lottery ball number 4" id="ball-n4" />
                <img src={ball6} alt="Lottery ball number 6" id="ball-n6" />
                <img src={ball7} alt="Lottery ball number 7" id="ball-n7" />
                <img src={ball9} alt="Lottery ball number 9" id="ball-n9" />
            </div>
            <div className="floating-cards">
                <img
                    src={cardTopRight}
                    alt="Card top right (placeholder)"
                    id="card-top-right"
                />
                <img src={cardGreen} alt="card green" id="card-green" />
                <img src={cardRed} alt="card red" id="card-red" />
                <img
                    src={cardBottomLeft}
                    alt="card bottom left"
                    id="card-bottom-left"
                />
            </div>
            <div className="prizes-wrapper">
                <h2>
                    <span>Win</span> millions in prizes
                </h2>
                <p>Probably fair, on chain games.</p>
                <p className="last">Win big with PancakeSwap.</p>
                <div className="card-container">
                    <div className="card card-prediction">
                        <div className="card-content">
                            <div className="card-img">
                                <img src={crystalBall} alt="Crystal ball" />
                            </div>
                            <h3>Prediction</h3>
                            <h2>
                                $<span id="value-prediction">800</span> million
                            </h2>
                            <h3>in BNB + CAKE won so far</h3>
                            <p>Predict the price trend of BNB or CAKE to win</p>

                            <a href="#" className="link-aquagreen">
                                <button className="button-aquagreen buttons-home">
                                    Play
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card card-lottery">
                        <div className="card-content">
                            <div className="card-img">
                                <img src={ticket} alt="Ticket" />
                            </div>
                            <h3>Lottery</h3>
                            <h2>
                                $<span id="value-lottery">120000</span>
                            </h2>
                            <h3>in CAKE prizes this round</h3>
                            <p>
                                Buy tickets with CAKE, win CAKE if your numbers
                                match
                            </p>

                            <a href="#" className="link-aquagreen">
                                <button className="button-aquagreen buttons-home">
                                    Buy tickets
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
