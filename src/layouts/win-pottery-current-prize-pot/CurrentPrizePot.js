import React from "react";
import { PrizePotCard } from "../../components/card/prize-pot-card/PrizePotCard";
import "./_current-prize-pot.scss";

export function CurrentPrizePot() {
  return (
    <section className="ccp-main-container">
      {/* ----------------SVG CONTAINER(senza svg, utilizzato un altro metodo)------------------- */}
      <div className="ccp-top-svg-container"></div>
      {/* ----------------COMPONENTS------------------- */}
      <div className="ccp-sub-container">
        <div className="ccp-titles">
          <div className="ccp-title-a ccp-title">Current Prize Pot</div>
          <div className="ccp-amount">$17,721</div>
          <div className="ccp-title-b ccp-title">
            Stake to get your tickets NOW
          </div>
        </div>
        <div className="ccp-content-wrapper">
          <div className="ccp-card-container">
            <PrizePotCard />
          </div>
          <div className="ccp-image-container">
            <img src="https://pancakeswap.finance/images/pottery/honeypot.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
