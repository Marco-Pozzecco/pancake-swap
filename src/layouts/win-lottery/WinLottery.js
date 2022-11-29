import React from "react";
import "./_win-lottery.scss";
import { InPrizeTicket } from "../win-lottery-in-prize-ticket/InPrizeTicket";
import { GetYourTickets } from "../win-lottery-get-your-tickets/GetYourTickets";
import { ConnectYourWalletWN } from "../win-lottery-connect-wallet/ConnectYourWalletWN";

export function WinLottery() {
  return (
    <div className="win-lottery-main-container">
      <InPrizeTicket />
      <GetYourTickets />
      <ConnectYourWalletWN />
    </div>
  );
}
