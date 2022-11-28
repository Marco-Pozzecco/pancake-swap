import React from "react";
import { GetYourTickets } from "./GetYourTickets";
import { InPrizeTicket } from "./InPrizeTicket";
import "./_win-lottery.scss";

export function WinLottery() {
  return (
    <div className="win-lottery-main-container">
      <InPrizeTicket />
      <GetYourTickets />
    </div>
  );
}
