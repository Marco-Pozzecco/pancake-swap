import React from "react";
import { GetYourTicketCard } from "../../components/card/get-your-ticket-card/GetYourTicketCard";
import { UntilTheDrawCD } from "../../components/count-down/until-the-draw-countdown/UntilTheDrawCD";
import "./_get-your-tickets.scss";

export function GetYourTickets() {
  //COUNTDOWN DEADLINE DATE
  const deadlineDate = "December 27 2022";

  return (
    <section className="gyt-section">
      {/* --- SVG / IMAGE TOP CONTAINER --- */}
      <div className="gyt-top-svg-main-container">
        <div className="gyt-top-svg-sub-container">
          <svg width="0" height="0">
            <defs>
              <clipPath id="topConcaveCurve" clipPathUnits="objectBoundingBox">
                <path d="M0 0v1h1V0C.75 1 .25 1 0 0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="gyt-main-container">
        <div className="gyt-sub-main-container">
          <div className="gyt-header">
            <h2 className="gyt-h-title-a">Get your tickets now!</h2>

            <div className="countdown-box">
              <UntilTheDrawCD deadline={deadlineDate} color={"orange"} />
            </div>
          </div>
          <div className="gyt-card-wrapper">
            <GetYourTicketCard />
          </div>
        </div>
      </div>
    </section>
  );
}
