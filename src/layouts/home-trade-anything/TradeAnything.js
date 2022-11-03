import React from 'react';
import './_home-trade-anything.scss';
import BNB from "../../resources/BNB@2x.webp";
import BTC from "../../resources/BTC@2x.webp";
import CAKE from "../../resources/CAKE@2x.webp";

export function TradeAnything() {
    return (
        <section className="ta-trade-anything">
            <div className="ta-wrapper">
                <div className="ta-contents-section">
                    <h2><span className="ta-text-span">Trade</span> anything. No registration, no hassle.</h2>
                    <h3>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</h3>
                    <div className="ta-buttons-section">
                        <a href="" className="link-aquagreen">
                            <button className="button-aquagreen buttons-home">Trade now</button>
                        </a>

                        <a href="" className="link-onlyborder">
                            <button className="button-onlyborder buttons-trade-swap-grafico">Learn</button>
                        </a>
                    </div>
                </div>

                <div className="ta-img-section">
                    <div className="ta-goldencoin">
                        <img src={BNB} />
                    </div>
                    <div className="ta-bitcoin">
                        <img src={BTC} />
                    </div>
                    <div className="ta-cakecoin">
                        <img src={CAKE} />
                    </div>
                </div>
                <div className="ta-bottom-gradient">
                    <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="20px"
                        xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn">
                        <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
                    </svg>
                </div>
            </div>

        </section>
    );
}