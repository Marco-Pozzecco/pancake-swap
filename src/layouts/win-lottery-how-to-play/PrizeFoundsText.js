import React from "react";
import "./_prize-founds-text.scss";
import { VscCircleFilled } from "react-icons/vsc";

export function PrizeFoundsText() {
  return (
    <div className="pft-main-container">
      <h2 className="pft-title">Prize Founds</h2>
      <div className="pft-text-box">
        The prizes for each lottery round come from three sources:
      </div>
      <h2 className="pft-sub-title">Ticket Purchases</h2>
      <div className="pft-text-box">
        <ul>
          <li>
            <span>
              <VscCircleFilled />
            </span>
            100% of the CAKE paid by people buying tickets that round goes back
            into the prize pools.
          </li>
        </ul>
      </div>

      <h2 className="pft-sub-title">Rollover Prizes</h2>
      <div className="pft-text-box">
        <ul>
          <li>
            <span>
              <VscCircleFilled />
            </span>
            After every round, if nobody wins in one of the prize brackets, the
            unclaimed CAKE for that bracket rolls over into the next round and
            are redistributed among the prize pools.
          </li>
        </ul>
      </div>

      <h2 className="pft-sub-title">CAKE Injections</h2>
      <div className="pft-text-box">
        <ul>
          <li>
            <span>
              <VscCircleFilled />
            </span>
            An average total of 35,000 CAKE from the treasury is added to
            lottery rounds over the course of a week. This CAKE is of course
            also included in rollovers! Read more in our guide to CAKE
            Tokenomics{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
