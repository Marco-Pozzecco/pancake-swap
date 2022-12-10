import React from "react";
import "./_details-card.scss";

export function DetailsCard(props) {
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
                <button>BUTTON</button>
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
                <button>BUTTON</button>
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
                <button>BUTTON</button>
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
