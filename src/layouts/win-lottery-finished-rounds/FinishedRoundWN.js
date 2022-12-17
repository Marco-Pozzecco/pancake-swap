import React from "react";
import "./_finished-rounds-wn.scss";
import { Card } from "../../../src/components/card/Card";
import { FinishedRoundCardLotteryAH } from "../../components/card/finished-round-card-lottery/win-lottery-finished-rounds-all-hystory/FinishedRoundCardLotteryAH";
import { FilterToggle } from "../../components/toggle/filter-toggle/FilterToggle";

export function FinishedRoundWN() {
  return (
    <section className="fr-section">
      <div className="finished-round-main-container">
        <div className="fr-sub-container">
          <div className="fr-content frc-a">
            <h2 className="frc-a-title">Finished Rounds</h2>
            <div className="frc-a-toggle-wrapper">
              <FilterToggle
                filter_toggle_general_Title_a={"All Hystory"}
                filter_toggle_general_Title_b={"Your Hystory"}
              />
            </div>
          </div>
          <div className="fr-content frc-b">
            <FinishedRoundCardLotteryAH />
          </div>
        </div>
      </div>
    </section>
  );
}
