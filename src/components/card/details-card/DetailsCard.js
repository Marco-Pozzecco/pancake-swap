import React, { useState } from "react";
import "./_details-card.scss";
import { Button } from "../../buttons/Button";
import { FaAngleDown } from "react-icons/fa";

export function DetailsCard(props) {
  // METTERE QUI LA LOGICA DEL BOTTONE(PER APRIRE E PER CAMBIARE TESTO, VEDI HPV FILM)
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  // ------------------------------------------------------
  const handleClick1 = () => {
    setShowDetails1(!showDetails1);
  };

  const handleClick2 = () => {
    setShowDetails2(!showDetails2);
  };

  const handleClick3 = () => {
    setShowDetails3(!showDetails3);
  };
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
              <div className="dcb-btn-t-box" onClick={handleClick1}>
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
            <div
              className={`dcb-sc-text ${showDetails1 && "active"}`}
              style={{ display: showDetails1 ? "block" : "none" }}
            >
              <div className="dcb-sub-text">{props.dc_sub_text_1}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="dcb-sub-container">
            {/* ---SUBTITLES--- */}
            <div className="dcb-sc-argument">
              <div className="dcb-sub-titles">{props.dc_sub_title_2}</div>
              <div className="dcb-btn-t-box" onClick={handleClick2}>
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
            {/* X---TEXT---X */}
            <div
              className={`dcb-sc-text ${showDetails2 && "active"}`}
              style={{ display: showDetails2 ? "block" : "none" }}
            >
              <div className="dcb-sub-text">{props.dc_sub_text_2}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="dcb-sub-container">
            {/* ---SUBTITLES--- */}
            <div className="dcb-sc-argument">
              <div className="dcb-sub-titles">{props.dc_sub_title_3}</div>
              <div className="dcb-btn-t-box" onClick={handleClick3}>
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
            <div
              className={`dcb-sc-text ${showDetails3 && "active"}`}
              style={{ display: showDetails3 ? "block" : "none" }}
            >
              <div className="dcb-sub-text">{props.dc_sub_text_3}</div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}
