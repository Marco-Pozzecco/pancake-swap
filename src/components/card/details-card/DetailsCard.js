import React from "react";
import "./_details-card.scss";
import { Button } from "../../buttons/Button";
import { FaAngleDown } from "react-icons/fa";

export function DetailsCard(props) {
  // METTERE QUI LA LOGICA DEL BOTTONE(PER APRIRE E PER CAMBIARE TESTO, VEDI HPV FILM)

  return (
    <div className="dc-main-container">
      <div className="dc-sub-container">
        {/* ---HEADER--- */}
        <div className="dc-header-container">
          <h2>{props.faq_main_title}</h2>
        </div>

        {/* ---BODY--- */}
        <div className="dc-bosy-container">
          <div className="dcb-sub-container">
            {/* ---SUBTITLES--- */}
            <div className="dcb-sc-argument">
              <div className="dcb-sub-titles">{props.dc_sub_title_1}</div>
              <div className="dcb-btn-t-box">
                <Button
                  text="Details"
                  type={"noBorderButton"}
                  style={{
                    color: "rgb(114, 239, 255)",
                    textDecoration: "none",
                    gap: 8,
                  }}
                >
                  <FaAngleDown style={{ marginLeft: 8, marginTop: 8 }} />
                </Button>
              </div>
            </div>
            {/* ---TEXT--- */}
            <div className="dcb-sc-text">
              <div className="dcb-sub-text">{props.dc_sub_text_1}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="dcb-sub-container">
            {/* ---SUBTITLES--- */}
            <div className="dcb-sc-argument">
              <div className="dcb-sub-titles">{props.dc_sub_title_2}</div>
              <div className="dcb-btn-t-box">
                <Button
                  text="Details"
                  type={"noBorderButton"}
                  style={{
                    color: "rgb(114, 239, 255)",
                    textDecoration: "none",
                    gap: 8,
                  }}
                >
                  <FaAngleDown style={{ marginLeft: 8, marginTop: 8 }} />
                </Button>
              </div>
            </div>
            {/* ---TEXT--- */}
            <div className="dcb-sc-text">
              <div className="dcb-sub-text">{props.dc_sub_text_2}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="dcb-sub-container">
            {/* ---SUBTITLES--- */}
            <div className="dcb-sc-argument">
              <div className="dcb-sub-titles">{props.dc_sub_title_3}</div>
              <div className="dcb-btn-t-box">
                <Button
                  text="Details"
                  type={"noBorderButton"}
                  style={{
                    color: "rgb(114, 239, 255)",
                    textDecoration: "none",
                    gap: 8,
                  }}
                >
                  <FaAngleDown style={{ marginLeft: 8, marginTop: 8 }} />
                </Button>
              </div>
            </div>
            {/* ---TEXT--- */}
            <div className="dcb-sc-text">
              <div className="dcb-sub-text">{props.dc_sub_text_3}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}
