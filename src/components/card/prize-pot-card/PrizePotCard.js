import React from "react";
import "./_prize-pot-card.scss";
import { ConnectWalletBtn } from "../../buttons/ConnectWalletBtn";

export function PrizePotCard() {
  return (
    <section className="ppc-main-container-wrapper">
      <section className="ppc-main-container">
        <section className="ppc-sub-container">
          {/* --- TOP HEADER-(Buttons) --- */}
          <section className="ppc-buttons-top-container">
            <button className="ppc-buttons-a">Deposit</button>
            <button className="ppc-buttons-b">Claim</button>
          </section>

          {/* --- CARD main CONTAINER 1 --- */}
          <section className="ppc-card-main-container">
            {/* -- TOP Container -- */}
            <div className="ppcb-card-sub-container ppcc-sc-top">
              {/* ----- */}
              <div className="ppcc-sct-titles">
                <h2>Pottery</h2>
                <div>Stake CAKE, Earn CAKE, Win CAKE</div>
              </div>
              {/* --------------------- */}
              <div className="ppcc-sct-icons-wrapper">
                <div className="ppcc-sct-main-icon">
                  <img src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg" />
                </div>
                {/* -- -- -- --  */}
                <div className="ppcc-sct-secondary-icon">
                  <img src="https://pancakeswap.finance/images/tokens/pot-icon.svg" />
                </div>
              </div>
              {/* ----- */}
            </div>
            {/* -- BOTTOM Container -- */}
            <div className="ppcb-card-sub-container ppcc-sc-bottom">
              {/* -- Datas wrapper -- */}
              <div className="ppcb-csc-datas-wrapper">
                {/* -- Display -- */}
                <div className="ppcb-csc-data-display">
                  <div className="ppcb-csc-data-display-content">
                    <div className="ppcb-csc-dd-title">
                      <span>YOUR</span>
                      <span>DEPOSIT</span>
                    </div>
                    <div className="ppcb-csc-dd-amount">0.000</div>
                    <div className="ppcb-csc-dd-sub-amount">~0.000</div>
                  </div>
                </div>
                {/* --DATA NUMBERS-- */}
                <div className="ppcb-csc-datas-spec-wrapper">
                  <div className="ppcb-csc-datas-specs-row">
                    <div className="ppcb-csc-data-title">APY</div>
                    <div className="ppcb-csc-data-number">13.41%</div>
                  </div>
                  <div className="ppcb-csc-datas-specs-row">
                    <div className="ppcb-csc-data-title">Next draw date</div>
                    <div className="ppcb-csc-data-number">in22h34m</div>
                  </div>
                  <div className="ppcb-csc-datas-specs-row">
                    <div className="ppcb-csc-data-title">
                      Total Value Locked
                    </div>
                    <div className="ppcb-csc-data-number">234,881.93 CAKE</div>
                  </div>
                  <div className="ppcb-csc-datas-specs-row">
                    <div className="ppcb-csc-data-title">Max. deposit cap</div>
                    <div className="ppcb-csc-data-number">870,000.00 CAKE</div>
                  </div>
                </div>
              </div>
              {/* -- Button wrapper -- */}
              <div className="ppcb-csc-btn-wrapper">
                <ConnectWalletBtn type={"fullButton"} />
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
