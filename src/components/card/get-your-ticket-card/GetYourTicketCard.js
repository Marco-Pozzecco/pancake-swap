import React, { useState } from "react";
import "./_get-your-ticket-card.scss";
import { Button } from "../../buttons/Button";
import "../../buttons/_buttons.scss";
import { FaAngleDown } from "react-icons/fa";

export function GetYourTicketCard() {
  const [showDetails, setShowDetails] = useState(false);
  // ------------------------------------------------------

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
            {/* --   --   --   --   --   --    */}
            <div className="gytc-sbi gytcsbi-a ">
              <div className="gytc-sbi-sub gytcbs-a ">
                <h2>Prize Pot</h2>
              </div>
              <div className="gytc-sbi-sub gytcbs-b ">
                <div className="gytcbs-amount gytcbs-amount-a">
                  <span>$23,567</span>
                </div>
                <div className="gytcbs-amount gytcbs-amount-b">
                  <span>$23,567 CAKE</span>
                </div>
              </div>
            </div>
            {/* --   --   --   --   --   --    */}
            <div className="gytc-sbi gytcsbi-b">
              <div className="gytc-sbi-sub gytcbs-a ">
                <h2>Your tickets</h2>
              </div>
              <div className="gytc-sbi-sub gytcbs-b">
                <Button
                  className="gytcbs-b-button"
                  type={"fullButton"}
                  text="Buy Tickets"
                  style={{ color: "var(--background-primary)" }}
                  action={() => {}}
                />
              </div>
            </div>
            {/* --   --   --   --   --   --    */}
          </div>

          {/* -------- */}
          {/* -------- */}
          {/* -------- */}
          {/* -------- */}
          {/* -------- */}
          {/* -------- */}
          {/* -------- */}

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
            aaa
          </div>
        </div>

        {/* --FOOTER------------------- */}
        <div className="gytc-footer-container">
          <Button
            text="Details"
            type={"noBorderButton"}
            style={{ color: "rgb(114, 239, 255)", textDecoration: "none" }}
            onClick={() => setShowDetails(!showDetails)}
          >
            <FaAngleDown />
          </Button>
          {/* <div className="gytc-footer-btn">
            Details
            <a href="#" onClick={() => setShowDetails(!showDetails)}>
              <svg width="32" height="32" viewBox="0 0 38 38">
                <g fill="aqua">
                  <path d={svgPath} />
                </g>
              </svg>
            </a>
          </div> */}
        </div>
        {/* -------------------------- */}
      </div>
    </section>
  );
}
