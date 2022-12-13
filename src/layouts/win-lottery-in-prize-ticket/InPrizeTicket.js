import React from "react";
import "./_in-prize-ticket.scss";

export function InPrizeTicket(props) {
  return (
    <section className="ipt-section">
      <div className="in-prize-main-container">
        <div className="ip-sc-titles">
          <h2 className="ipt-title-a">{props.ipt_title_a}</h2>
          <div className="ipt-number">
            <span>{props.ipt_amount_prize}</span>
          </div>
          <h2 className="ipt-title-b">{props.ipt_title_b}</h2>
        </div>

        <div>PLACEHOLDER BIGLIETTO</div>
      </div>
      <div className="bottom-svg-container">
        <svg>
          <defs>
            <clipPath id="topConcaveCurve" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
