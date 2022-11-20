import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./liquidity.scss";
import helpBunny from "../../../resources/limit/help.png";

export function Liquidity() {
  return (
    <div className="liquidity-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="liquidity-box-page"></div>
      <div className="bottom-page-swap">
        <p>Bridge assets to BNB Chain</p>

        <div className="extBox-bunnyHelp">
          <div className="emptyDiv-helpBunny"></div>
          <div className="helpBunny">
            <img src={helpBunny} alt="history icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
