import React from "react";
import "./how-to-play-wn.scss";

export function HowToPlayWN() {
  return (
    <section className="htp-section">
      <div className="htp-main-container">
        <div className="htp-sub-container">
          {/* ----------------- */}
          <div className="htp-content htpc-1">
            <h2>How to Play</h2>
            <p>
              If the digits on your tickets match the winning numbers in the
              correct order, you win a portion of the prize pool.
            </p>
            <p>Simple!</p>
          </div>
          {/* ----------------- */}
          <div className="htp-content htpc-2">
            <button>PLACEHOLDER CARD 1</button>
            <button>PLACEHOLDER CARD 2</button>
            <button>PLACEHOLDER CARD 3</button>
          </div>
          {/* ----------------- */}
          <div className="htp-content htpc-3">
            <div className="htpc-3-text">TESTO</div>
            <div className="htpc-3-card">CARD</div>
          </div>

          {/* ----------------- */}
          <div className="htp-content htpc-4">
            <div className="htpc-4-text">TESTO</div>
            <div className="htpc-4-card">CARD</div>
          </div>
          {/* ----------------- */}
          <div className="htp-content htpc-5">
            <div className="htpc-5-svg-box">CARD</div>
            <div className="htpc-5-text">TESTO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
