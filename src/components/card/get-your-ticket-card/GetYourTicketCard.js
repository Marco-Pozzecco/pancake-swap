import React, { useState } from "react";
import "./_get-your-ticket-card.scss";
import { Button } from "../../buttons/Button";
import "../../buttons/_buttons.scss";
import { FaAngleDown } from "react-icons/fa";
import MatchesDatas from "../../datas/matches-datas/MatchesDatas";

export function GetYourTicketCard() {
  const [showDetails, setShowDetails] = useState(false);
  // ------------------------------------------------------
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

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
                  <span>23,567 CAKE</span>
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
          </div>
          {/* --   --   --   --   --   --    */}
          <div
            className={`hidden-section-body-row ${showDetails && "active"}`}
            style={{ display: showDetails ? "block" : "none" }}
          ></div>
        </div>

        {/* --FOOTER------------------- */}
        <div className="gytc-footer-container">
          <div
            className={`gytc-footer-sub-container gytc-fsc-datas-container ${
              showDetails && "active"
            }`}
            style={{ display: showDetails ? "block" : "none" }}
          >
            <div className="gytc-fsc-datas-description-box">
              Match the winning number in the same order to share prizes.
              Current prizes up for grabs:
            </div>
            <div className="gytc-datas-container">
              <MatchesDatas
                matches_data_title={"Match first 1"}
                // matches_data_amount_up={"~$7,197"}
                matches_data_cakes_number={"2,194 CAKE"}
                matches_data_amount_down={"~$7,197"}
                // matches_data_cake_each={"1.60 CAKE each"}
                // matches_winning_tickets={"449 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Match first 3"}
                // matches_data_amount_up={"~$8,337"}
                matches_data_cakes_number={"894 CAKE"}
                matches_data_amount_down={"~$7,197"}
                // matches_data_cake_each={"6.85 CAKE each"}
                // matches_winning_tickets={"965 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Match first 1"}
                // matches_data_amount_up={"~$17,197"}
                matches_data_cakes_number={"6194 CAKE"}
                matches_data_amount_down={"~$7,197"}
                // matches_data_cake_each={"3.20 CAKE each"}
                // matches_winning_tickets={"429 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Match first 1"}
                // matches_data_amount_up={"~$3,137"}
                matches_data_cakes_number={"2,194 CAKE"}
                matches_data_amount_down={"~$7,197"}
                // matches_data_cake_each={"456.78 CAKE each"}
                // matches_winning_tickets={"1 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Match first 2"}
                // matches_data_amount_up={"~$1,974"}
                matches_data_cakes_number={"2,194 CAKE"}
                matches_data_amount_down={"~$7,197"}
                matches_data_cake_each={"81.87 CAKE each"}
                matches_winning_tickets={"35 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Match first 3"}
                // matches_data_amount_up={"~$4,169"}
                matches_data_cakes_number={"919 CAKE"}
                matches_data_amount_down={"~$7,197"}
                matches_data_cake_each={"13.93 CAKE each"}
                matches_winning_tickets={"2 Winning Tickets"}
              />
              <MatchesDatas
                matches_data_title={"Burn"}
                // matches_data_amount_up={"~$7,197"}
                matches_data_cakes_number={"2,194 CAKE"}
                matches_data_amount_down={"~$7,197"}
                // matches_data_cake_each={"4406 CAKE each"}
                // matches_winning_tickets={"4 Winning Tickets"}
              />
            </div>
          </div>

          <div
            className="gytc-footer-sub-container gytc-fsc-button"
            onClick={handleClick}
          >
            <Button
              text="Details"
              type={"noBorderButton"}
              style={{
                color: "rgb(114, 239, 255)",
                textDecoration: "none",
              }}
            >
              <FaAngleDown />
            </Button>
          </div>
        </div>
        {/* -------------------------- */}
      </div>
    </section>
  );
}
