import React from "react";
import "./_home-trade-anything.scss";
import BNB from "../../resources/BNB@2x.webp";
import BTC from "../../resources/BTC@2x.webp";
import CAKE from "../../resources/CAKE@2x.webp";
import { TradeNowBtn } from "../../components/buttons/TradeNowBtn";
import { LearnBtn } from "../../components/buttons/LearnBtn";

export function TradeAnything() {
  return (
    <>
      <div className="usedbyColors">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-4ba21b47-0 IIbzK"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      </div>
      <section className="ta-trade-anything">
        <div className="ta-wrapper">
          <div className="ta-contents-section">
            <h2>
              <span className="ta-text-span">Trade</span> anything. No
              registration, no hassle.
            </h2>
            <h3>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </h3>
            <div className="ta-buttons-section">
              <a href="" className="link-aquagreen">
                <TradeNowBtn />
              </a>

              <a href="" className="link-onlyborder">
                <LearnBtn />
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
            <svg
              viewBox="0 0 1660 48"
              preserveAspectRatio="none"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-8a800401-0 fGhPpn"
            >
              <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="earnColors">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-4ba21b47-0 IIbzK"
        >
          <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
        </svg>
      </div>
    </>
  );
}
