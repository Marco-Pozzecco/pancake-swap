import React, { useState } from "react";
import "./_get-your-ticket-card.scss";

export function GetYourTicketCard() {
  const [showDetails, setShowDetails] = useState(false);

  const svgPath =
    "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z";

  return (
    <section className="gytc-main-container">
      <div className="gytc-sub-container">
        {/* -----HEADER---------------------- */}
        <div className="gytc-header-container">
          <div className="gytc-sub-header-left">
            <h2>Next Draw</h2>
          </div>
          <div className="gytc-sub-header-right">
            #734 | Draw: Dec 1, 2022, 1:00 PM
          </div>
        </div>
        {/* ----BODY--------------------- */}
        <div className="gytc-body-container">
          <div className="gytc-body-sub-container">
            <div className="gytc-sbi gytc-prize-pocket-box">
              <div className="gytc-sub-sbi gytc-sbi-a1">Prize Pot </div>
              <div className="gytc-sub-sbi gytc-sbi-a2">
                <h2>~$98,441</h2>
                <p>24,807 CAKE</p>
              </div>
            </div>
            {/* --   --   --   --   --   --    */}
            <div className="gytc-sbi gytc-your-tickets-box">
              {" "}
              <div className="gytc-sub-sbi gytc-sbi-b1">Your tickets </div>
              <div className="gytc-sub-sbi gytc-sbi-b2">
                <button>button</button>
              </div>
            </div>
          </div>
          <div
            // className="gytc-data"
            className={`hidden-section-body-row ${showDetails && "active"}`}
            style={{
              height: 253,
              width: 754,
              backgroundColor: "black",
              padding: 24,
              display: showDetails ? "block" : "none",
            }}
          >
            {/* <div className="gytc-sub-data aaa">ccc</div> */}
            {/* <div className="gytc-sub-data bbb"></div> */}
          </div>
        </div>
        {/* --FOOTER------------------- */}
        <div className="gytc-footer-container">
          <div className="gytc-footer-btn">
            Details
            <a href="#" onClick={() => setShowDetails(!showDetails)}>
              <svg width="32" height="32" viewBox="0 0 38 38">
                <g fill="aqua">
                  <path d={svgPath} />
                </g>
              </svg>
            </a>
          </div>
        </div>
        {/* -------------------------- */}
      </div>
    </section>
  );
}
