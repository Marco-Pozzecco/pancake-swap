import React from "react";
import "./how-to-play-wn.scss";
import { HowToPlayCard } from "./../../components/card/HowToPlayCard";
import PrizeFoundsCard from "./PrizeFoundsCard";
import { PrizeFoundsText } from "./PrizeFoundsText";
import { StillGotQuestions } from "./StillGotQuestions";
import { WinningCriteriaCard } from "./WinningCriteriaCard";
import { WinningCriteriaText } from "./WinningCriteriaText";

export function HowToPlayWN() {
  return (
    <section className="htp-section">
      <div className="htp-main-container">
        <div className="htp-sub-container">
          {/* ----------------- */}
          <div className="htp-content htpc-1">
            <h2 className="htpc-1-title">How to Play</h2>
            <p className="htpc-1-text-a">
              If the digits on your tickets match the winning numbers in the
              correct order, you win a portion of the prize pool.
            </p>
            <p className="htpc-1-text-b">Simple!</p>
          </div>
          {/* ----------------- */}
          <div className="htp-content htpc-2">
            <HowToPlayCard
              htpsc_step="STEP 1"
              htpsc_title="Buy Tickets"
              htpsc_text="Prices are set when the round starts, equal to 5 USD in CAKE per ticket."
            />
            <HowToPlayCard
              htpsc_step="STEP 2"
              htpsc_title="Wait for the Draw"
              htpsc_text="There is one draw every day alternating between 0 AM UTC and 12 PM UTC."
            />
            <HowToPlayCard
              htpsc_step="STEP 3"
              htpsc_title="Check for Prizes"
              htpsc_text="Once the round’s over, come back to the page and check to see if you’ve won!"
            />
          </div>
          {/* ----------------- */}
          <div className="htp-div-line"></div>
          {/* ----------------- */}

          <div className="htp-content htpc-3">
            <div className="htpc-3-text">
              <WinningCriteriaText />
            </div>
            <div className="htpc-3-card">
              <WinningCriteriaCard />
            </div>
          </div>
          {/* ----------------- */}
          <div className="htp-div-line"></div>
          {/* ----------------- */}
          <div className="htp-content htpc-4">
            <div className="htpc-4-text">
              <PrizeFoundsText />
            </div>
            <div className="htpc-4-card">
              <PrizeFoundsCard />
            </div>
          </div>
          {/* ----------------- */}
          <div className="htp-div-line"></div>
          {/* ----------------- */}
          <div className="htp-content htpc-5">
            <StillGotQuestions />
          </div>
        </div>
      </div>
    </section>
  );
}

// #######################################################

//
// ⇓⇓ NON CANCELLARE ⇓⇓
//
//

// style={...props.outerCardStyle}
// style={...props.innerCardStyle}
// // -------------------
// <Card outerCardStyle={{}}>
//   {/* -------------- */}
//   <Card outerCardClasses={"outercardStyle2"}
//   // --------------------
//   <div className={...outerCardClasses + " blablabla"}>
//     {/* ----------------- */}
