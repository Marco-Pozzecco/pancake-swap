import React from "react";
import "./_win-lottery.scss";
import { InPrizeTicket } from "../win-lottery-in-prize-ticket/InPrizeTicket";
import { GetYourTickets } from "../win-lottery-get-your-tickets/GetYourTickets";
import { ConnectYourWalletWN } from "../win-lottery-connect-wallet/ConnectYourWalletWN";
import { FinishedRoundWN } from "../win-lottery-finished-rounds/FinishedRoundWN";
import { HowToPlayWN } from "../win-lottery-how-to-play/HowToPlayWN";

export function WinLottery() {
  return (
    <div className="win-lottery-main-container">
      <InPrizeTicket
        ipt_title_a="The PancakeSwap Lottery"
        ipt_amount_prize="$58,762"
        ipt_title_b="in prizes!"
      />
      <GetYourTickets />
      <ConnectYourWalletWN />
      <FinishedRoundWN />
      <HowToPlayWN />
    </div>
  );
}
