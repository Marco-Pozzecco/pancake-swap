import React from "react";
import "./_winning-criteria-text.scss";
import { VscCircleFilled } from "react-icons/vsc";

export function WinningCriteriaText() {
  return (
    <div className="wct-main-container">
      <h2 className="wct-title">Winning Criteria</h2>
      <h2 className="wct-sub-title">
        The digits on your ticket must match in the correct order to win.
      </h2>
      {/* --------- */}
      <div className="wct-text-box wct-text wct-tb-a">
        Here’s an example lottery draw, with two tickets, A and B.
      </div>
      {/* --------- */}
      <div className="wct-text-box wct-text wct-tb-b wct-text-ul">
        <ul>
          <li>
            <span>
              <VscCircleFilled />
            </span>
            Ticket A: The first 3 digits and the last 2 digits match, but the
            4th digit is wrong, so this ticket only wins a “Match first 3”
            prize.
          </li>
          <li>
            <span>
              <VscCircleFilled />
            </span>
            Ticket B: Even though the last 5 digits match, the first digit is
            wrong, so this ticket doesn’t win a prize.
          </li>
        </ul>
      </div>
      {/* ---------- */}
      <div className="wct-text-box  wct-text wct-tb-c">
        Prize brackets don’t 'stack': if you match the first 3 digits in order,
        you’ll only win prizes from the 'Match 3' bracket, and not from 'Match
        1' and 'Match 2'.
      </div>
    </div>
  );
}
