import React from "react";
import "./_rules-tc.scss";

export function RulesTC() {
  return (
    <section className="r-tc-main-container">
      <div className="r-tc-main-svg-container">
        <div className="rtc-strip-svg-box">
          Style svg e posizionamento gia fatti, INSERIRE SVG
        </div>
        <div className="rtc-main-svg-box-wrapper">IMMAGINE</div>
      </div>
      {/* -------------------------------------- */}
      <div className="r-tc-sub-container">
        <div className="rtc-card-box-wrapper">CARD</div>
        PRIZES DA RICONTROLLARE O HO SBAGLIATO IO O è CAMBIATO IL SITO, da
        invertire le card e cambiare i nomi
        <div className="rtc-description-box-wrapper">
          <div className="rtc-description">INSERIRE TAG PER TITOLI E TESTO</div>
          <div className="rtc-img-box-wp">
            INSERIRE DIV CHE CONTERRA L'SVG E CENTRARLO
          </div>
        </div>
      </div>
    </section>
  );
}
