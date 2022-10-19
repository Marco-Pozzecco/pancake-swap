import React from "react";
import './_win-prizes.scss';
// import images
import ball2 from '../../resources/ball2-1024.webp';
import ball4 from '../../resources/ball4-1024.webp';
import ball6 from '../../resources/ball6-1024.webp';
import ball7 from '../../resources/ball7-1024.webp';
import ball9 from '../../resources/ball9-1024.webp';

import cardTopRight from '../../resources/card-top-right-1024.webp';
import cardGreen from '../../resources/card-green-1024.webp';
import cardRed from '../../resources/card-red-1024.webp';
import cardBottomLeft from '../../resources/card-bottom-left-1024.webp';

import crystalBall from '../../resources/svgs/crystal-ball.svg';
import ticket from '../../resources/svgs/ticket.svg';

export function WinPrizes() {

    return (
        <section class="win-prizes">
            <div class="floating-balls">
                <img src={ball2} alt="Lottery ball number 2" id="ball-n2" />
                <img src={ball4} alt="Lottery ball number 4" id="ball-n4" />
                <img src={ball6} alt="Lottery ball number 6" id="ball-n6" />
                <img src={ball7} alt="Lottery ball number 7" id="ball-n7" />
                <img src={ball9} alt="Lottery ball number 9" id="ball-n9" />
            </div>
            <div class="floating-cards">
                <img src={cardTopRight} alt="Card top right (placeholder)" id="card-top-right" />
                <img src={cardGreen} alt="card green" id="card-green" />
                <img src={cardRed} alt="card red" id="card-red" />
                <img src={cardBottomLeft} alt="card bottom left" id="card-bottom-left" />
            </div>
            <div class="prizes-wrapper">
                <h2><span>Win</span> millions in prizes</h2>
                <p>Probably fair, on chain games.</p>
                <p class="last">Win big with PancakeSwap.</p>
                <div class="card-container">
                    <div class="card card-prediction">

                        <div class="card-content">

                            <div class="card-img">
                                <img src={crystalBall} alt="Crystal ball" />
                            </div>
                            <h3>Prediction</h3>
                            <h2>$<span id="value-prediction">800</span> million</h2>
                            <h3>in BNB + CAKE won so far</h3>
                            <p>Predict the price trend of BNB or CAKE to win</p>
                            
                            <a href="#" class="link-aquagreen">
                                <button class="button-aquagreen buttons-home">Play</button>
                            </a>

                        </div>

                    </div>
                    <div class="card card-lottery">

                        <div class="card-content">

                            <div class="card-img">
                                <img src={ticket} alt="Ticket" />
                            </div>
                            <h3>Lottery</h3>
                            <h2>$<span id="value-lottery">120000</span></h2>
                            <h3>in CAKE prizes this round</h3>
                            <p>Buy tickets with CAKE, win CAKE if your numbers match</p>

                            <a href="#" class="link-aquagreen">
                                <button class="button-aquagreen buttons-home">Buy tickets</button>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}