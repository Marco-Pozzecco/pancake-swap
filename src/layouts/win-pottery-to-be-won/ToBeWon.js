import React from "react";
import { UntilTheDrawCD } from "../../components/count-down/until-the-draw-countdown/UntilTheDrawCD";
import "./_to-be-won.scss";

export function ToBeWon() {
  //COUNTDOWN DEADLINE DATE
  const deadlineDate = "December 27 2022";

  return (
    <section className="tbw-main-container">
      <div className="tbw-sub-container">
        <div className="tbw-image-container">
          <img src="https://pancakeswap.finance/images/pottery/banner-bunny.png" />
        </div>
        <div className="tbw-titles-container">
          <div className="tbw-title-a">
            <div className="tbw-title-a1">The PancakeSwap</div>
            <div className="tbw-title-a2">Pottery</div>
          </div>
          <div className="tbw-title-amount">$17,766</div>
          <div className="tbw-title-b">To be won !</div>
          <div className="tbw-ticket">PLACE HOLDER</div>
          <div className="tbw-features">
            <div className="tbw-feature">
              <span className="tbwf-a">Deposit CAKE for </span>
              <span className="tbwf-b">10 Weeks</span>
            </div>
            <div className="tbw-feature">
              <span className="tbwf-a">to earn </span>
              <span className="tbwf-b">13.59% </span>
              <span className="tbwf-a">APY</span>
            </div>
            <div className="tbw-feature">
              <span className="tbwf-a">And a chance to </span>
              <span className="tbwf-b">win prize pot!</span>
            </div>
          </div>

          <div className="tbw-countdown-box-wrap">
            <UntilTheDrawCD deadline={deadlineDate} />
          </div>
        </div>
      </div>
      {/* <div className="tbw-animations-container">animation container</div>   DA DECPMMENTARE POI*/}
    </section>
  );
}
