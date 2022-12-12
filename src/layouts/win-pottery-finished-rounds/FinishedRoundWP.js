import React from "react";
import { FinishedRoundCard } from "../../components/card/finished-round-card/FinishedRoundCard";
import "./_finished-rounds-wp.scss";

export function FinishedRoundWP() {
  return (
    <section className="fr-wp-main-container">
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
