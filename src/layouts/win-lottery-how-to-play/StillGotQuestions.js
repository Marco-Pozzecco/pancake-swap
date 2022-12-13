import React from "react";
import { Link } from "react-router-dom";
import "./_still-got-questions.scss";

export function StillGotQuestions() {
  return (
    <div className="sgq-main-container">
      <div className="sgq-sub-container">
        <div className="sgqs-image">
          <img src="https://pancakeswap.finance/images/lottery/tombola.png" />
        </div>

        <div className="sgqs-titles">
          <h2 className="sgqs-title">Still got questions?</h2>
          <div className="sgqs-description">
            Check our in-depth guide on
            <a> how to play the PancakeSwap lottery!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
