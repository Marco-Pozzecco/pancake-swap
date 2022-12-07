import React from "react";
import { HowToPlayCard } from "../../components/card/HowToPlayCard";
import { GreyLine } from "../../components/lines/GreyLine";
import "./_how-to-play-wp.scss";

export function HowToPlayWP() {
  return (
    <section className="htp-wp-main-container">
      <div className="htp-wp-sub-container">
        <h2 className="htp-wp-title">How to Play</h2>
        <p className="htp-wp-text">
          Deposit CAKE to get your Pottery tickets. More CAKE deposited, higher
          the chance of winning (and of course, higher the rewards)!
        </p>
        <p className="htp-wp-text htpwpt-last">Simple!</p>
        <div className="htp-wp-card-wrapper">
          <HowToPlayCard
            style={{ eigth: 326 }}
            htpsc_step="STEP 1"
            htpsc_title="Deposit CAKE"
            htpsc_text="Deposit CAKE on the monthly subscription date -- first Monday of each Month. Your chance of winning depends on how many CAKE you deposit compared to the total pool. Your CAKE deposit will be locked for 10 weeks. There will be a monthly TVL cap in the beta product stage."
          />
          <HowToPlayCard
            htpsc_step="STEP 2"
            htpsc_title="Wait for the Draw"
            htpsc_text="A portion of the staking rewards from the CAKE deposited will fill the prize pot and there will be one weekly draw. There will be eight (8) winners each week. Check your chance of winning, add more CAKE on the monthly subscription date to increase your odds!"
          />
          <HowToPlayCard
            htpsc_step="STEP 3"
            htpsc_title="Claim & Withdrawal"
            htpsc_text="You can claim any winnings that you may have once the weekly draw is completed. Your CAKE can be withdrawn after 10 weeks but they won't be providing any winning odds anymore."
          />
        </div>
        <GreyLine />
      </div>
    </section>
  );
}
