import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./_tradingCompetition.scss";
import { Dalarnia } from "../../../layouts/win-tradingcomp-dalarnia/dalarnia";
import VioletSection from "../../../layouts/win-tradingcomp-violetSecion/VioletSection";
import { TeamRanksTC } from "../../../layouts/win-trading-competition-team-ranks/TeamRanksTC";
import { RulesTC } from "../../../layouts/win-trading-competition-rules/RulesTC";
import { PrizesTC } from "../../../layouts/win-trading-competition-prizes/PrizesTC";
import { FinishedTC } from "../../../layouts/win-trading-competition-finished/FinishedTC";

export function TradingCompetition() {
  return (
    <div class="tradingCompetitionWrapper">
      <Subnav elements={["Latest", "Finished"]} />
      <Dalarnia />
      <VioletSection />
      <TeamRanksTC />
      <RulesTC />
      <PrizesTC />
      <FinishedTC />
    </div>
  );
}
