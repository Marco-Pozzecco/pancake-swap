import React from "react";
import { CurrentPrizePot } from "../win-pottery-current-prize-pot/CurrentPrizePot";
import { FAQWP } from "../win-pottery-faq/FAQWP";
import { FinishedRoundWP } from "../win-pottery-finished-rounds/FinishedRoundWP";
import { HowToPlayWP } from "../win-pottery-how-to-play/HowToPlayWP";
import { SplitBreakdown } from "../win-pottery-split-breakdown/SplitBreakdown";
import { ToBeWon } from "../win-pottery-to-be-won/ToBeWon";

import "./_win-pottery.scss";

export function WinPottery() {
  return (
    <div className="wp-main-container">
      <h1>WinPottery.js</h1>
      <h1>FARE MODIFICHE QUI! RAMO GIUSTO!</h1>
      <ToBeWon />
      <CurrentPrizePot />
      <FinishedRoundWP />
      <HowToPlayWP />
      <SplitBreakdown />
      <FAQWP />
    </div>
  );
}
