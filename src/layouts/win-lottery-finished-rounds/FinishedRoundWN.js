import React from "react";
import "./_finished-rounds-wn.scss";
import { Card } from "../../../src/components/card/Card";
import { FinishedRoundCardLotteryAH } from "../../components/card/finished-round-card-lottery/win-lottery-finished-rounds-all-hystory/FinishedRoundCardLotteryAH";

export function FinishedRoundWN() {
  return (
    <section className="fr-section">
      <div className="finished-round-main-container">
        <div className="fr-sub-container">
          <div className="fr-content frc-a">
            <h2 className="frc-a-title">Finished Rounds</h2>
            <button className="frc-a-button">SWITCH - BUTTON</button>
          </div>
          <div className="fr-content frc-b">
            <FinishedRoundCardLotteryAH />
          </div>
        </div>
      </div>
    </section>
  );
}
