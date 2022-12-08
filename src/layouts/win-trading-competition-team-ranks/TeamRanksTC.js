import React from "react";
import "./_team-ranks-tc.scss";

export function TeamRanksTC() {
  return (
    <section className="tr-tc-main-container">
      <div className="tr-tc-main-svg-container">
        <div className="trtc-strip-svg-box">
          Style svg e posizionamento gia fatti, INSERIRE SVG
        </div>
        <div className="trtc-main-svg-box-wrapper">IMMAGINE</div>
      </div>
      {/* --------------------------------------------------- */}
      <div className="tr-tc-sub-container">
        <div className="tr-tc-rank-box">
          <div className="tr-tc-podium-rank">
            <div className="trtc-pr-images-wrapper">immagine rank</div>
            <div className="tr-tc-pr-data-wrapper">
              dati rank - creare componente con props dei dati e inserirlo x 3
            </div>
          </div>
          <div className="tr-tc-partecipants">
            <div className="trtc-ttb-elelement-wrapper">
              Qui inserire in componente card da creare
            </div>
            <div className="trtc-ttb-img-wrapper">
              QUI L IMMAGINE SPOSTATA IN BASSO(?)
            </div>
          </div>
        </div>
        {/* --- --- --- --- --- --- --- */}
        <div className="tr-tc-top-traders-box"></div>
      </div>
    </section>
  );
}
