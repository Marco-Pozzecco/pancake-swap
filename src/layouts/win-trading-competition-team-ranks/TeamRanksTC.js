import React from "react";
import "./_team-ranks-tc.scss";

export function TeamRanksTC() {
  return (
    <section className="tr-tc-main-container">
      <div className="tr-tc-main-svg-container"> SVG Team Ranks</div>
      {/* --------------------------------------------------- */}
      <div className="tr-tc-sub-container">
        <div className="tr-tc-rank-box">
          <div className="tr-tc-podium-rank">
            <div className="trtc-pr-images-wrapper">immagine rank</div>
            <div className="tr-tc-pr-data-wrapper">dati rank</div>
          </div>
          <div className="tr-tc-partecipants">DIV & IMMAGINE</div>
        </div>
        {/* --- --- --- --- --- --- --- */}
        <div className="tr-tc-top-traders-box">
          <div className="trtc-ttb-elelement-wrapper">AAA</div>
          <div className="trtc-ttb-img-wrapper">BBB</div>
        </div>
      </div>
    </section>
  );
}
