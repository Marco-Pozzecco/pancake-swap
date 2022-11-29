import React from "react";
import "./_get-your-tickets.scss";

export function GetYourTickets() {
  return (
    <div className="gyt-main-container">
      <div className="gyt-sub-main-container">
        <div className="gyt-header">
          <h2>Get your tickets now!</h2>

          <div>
            <span>PCD</span>
            <span>until the draw</span>
          </div>
        </div>

        {/* CREARE QUESTA CARD COME COMPONENTE ESTERNO E IMPORTARLO */}
        <div className="gyt-body">
          <div className="gyt-body-sc">
            <div className="gytb-header">
              <h3>Next Draw</h3>
              <p>#732 | Draw: Nov 29, 2022, 1:00 PM</p>
            </div>

            <div className="gytb-body">
              <div className="gytb-body-grid">
                <div className="gytb-b-grid-section gytb-bgs-item-a1">
                  TITOLI
                </div>
                <div className="gytb-b-grid-section gytb-bgs-item-a2">
                  {" "}
                  TIIIIITOOOOLLIIIIII
                </div>

                <div className="gytb-b-grid-section gytb-bgs-item-b1">
                  TITOLI
                </div>
                <div className="gytb-b-grid-section gytb-bgs-item-b2">
                  TIIIIITOOOOLLIIIIII
                </div>
              </div>
            </div>

            <div className="gytb-footer">
              <button>PACEHOLDER DETAILS</button>
            </div>

            {/* ------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
