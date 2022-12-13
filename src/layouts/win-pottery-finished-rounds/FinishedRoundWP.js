import React from "react";
import { FinishedRoundCard } from "../../components/card/finished-round-card/FinishedRoundCard";
import "./_finished-rounds-wp.scss";

export function FinishedRoundWP() {
  return (
    <section className="fr-wp-main-container">
      {/* ---------------------------------- */}
      <div className="frc-svg-top-container">
        <svg>
          <defs>
            <clipPath id="topConvexCurve" clipPathUnits="objectBoundingBox">
              <path d="M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* ---------------------------------- */}
      <div className="fr-wp-sub-container">
        <div className="fr-wp-title-wrapper">
          <div className="fr-wp-title">Finished Rounds</div>
        </div>
        <div className="fr-wp-card">
          <FinishedRoundCard />
        </div>
      </div>
    </section>
  );
}
