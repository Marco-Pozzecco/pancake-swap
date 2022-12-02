import React from "react";
import "./how-to-play-wn.scss";
import { HowToPlayCard } from "./HowToPlayCard";
import { StillGotQuestions } from "./StillGotQuestions";

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
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
          <div className="htp-content htpc-3">
            {/* -- -- --  */}
            {/* -- -- --  */}
            {/* -- -- --  */}
            <div className="htpc-3-text">
              {/* -- -- --  */}
              <h2 className="htpc-3-title-a htp-titles-c-fs">
                Winning Criteria
              </h2>
              {/* -- -- --  */}
              <h2 className="htpc-3-title-b htp-sub-titles-c-fs">
                The digits on your ticket must match in the correct order to
                win.
              </h2>
              {/* -- -- --  */}
              <div className="htpc-3-description htp-description htp-description-a  htp-text-c-fs">
                Here’s an example lottery draw, with two tickets, A and B.
              </div>
              {/* -- -- --  */}
              <ul className="htp-list-style htp-text-c-fs htp-description htp-description-b">
                {/* -- -- --  */}
                <li>
                  <div>
                    <span style={{ color: "white", fontWeight: "700" }}>
                      ・
                    </span>
                    Ticket A: The first 3 digits and the last 2 digits match,
                    but the 4th digit is wrong, so this ticket only wins a
                    “Match first 3” prize.
                  </div>
                </li>
                {/* -- -- --  */}
                <li>
                  <div>
                    <span style={{ color: "white", fontWeight: "700" }}>
                      ・
                    </span>
                    Ticket B: Even though the last 5 digits match, the first
                    digit is wrong, so this ticket doesn’t win a prize.{" "}
                  </div>
                </li>
                {/* -- -- --  */}
              </ul>
              {/* -- -- --  */}
              <div className="htp-text-c-fs htp-description htp-description-c">
                Prize brackets don’t stack’: if you match the first 3 digits in
                order, you’ll only win prizes from the Match 3’ bracket, and not
                from Match 1’ and Match 2’.
              </div>
            </div>
            {/* -- -- --  */}
            {/* -- -- --  */}
            {/* -- -- --  */}

            {/* -- -- --  */}
            {/* -- -- --  */}
            {/* -- -- --  */}
          </div>

          {/* // */}
          {/* // */}
          {/* // */}
          {/* ----------------- */}
          <div className="htp-div-line"></div>
          {/* ----------------- */}
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
          <div className="htp-content htpc-4">
            <div className="htpc-4-text">
              <div className="">
                <h2 className="htp-titles-c-fs ">Prize Funds</h2>
              </div>
              <div className="">
                <p className="htp-text-c-fs">
                  The prizes for each lottery round come from three sources:
                </p>
              </div>
              <div className="">
                <h2 className="htp-sub-titles-c-fs">Ticket Purchases</h2>
              </div>
              <div className="">
                <ul className="htp-text-c-fs">
                  <li>
                    100% of the CAKE paid by people buying tickets that round
                    goes back into the prize pools.
                  </li>
                </ul>
              </div>

              <div className="">
                <h2 className="htp-sub-titles-c-fs">Rollow Prizes</h2>
              </div>
              <div className="">
                <ul className="htp-text-c-fs">
                  <li>
                    After every round, if nobody wins in one of the prize
                    brackets, the unclaimed CAKE for that bracket rolls over
                    into the next round and are redistributed among the prize
                    pools.
                  </li>
                </ul>
              </div>

              <div className="">
                <h2 className="htp-sub-titles-c-fs">CAKE Injections </h2>
              </div>
              <div className="">
                <ul className="htp-text-c-fs">
                  <li>
                    An average total of 35,000 CAKE from the treasury is added
                    to lottery rounds over the course of a week. This CAKE is of
                    course also included in rollovers! Read more in our guide to
                    CAKE Tokenomics
                  </li>
                </ul>
              </div>
            </div>
            <div className="htpc-4-card">CARD</div>
          </div>
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
          {/* // */}
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
