import React from "react";
import Subnav from "../../components/subnav/Subnav";
import "./nft.scss";
import lineTopPage from "../../resources/overview/lineTopPage.svg";

export function Overview() {
  return (
    <div className="ext-overview-page">
      <Subnav elements={["Overview", "Collections", "Activity"]} />
      <div className="int-box-page">
        <div className="ext-header">
          <div className="headerOverview">
            <div>
              <h2 className="headerTitle">NFT Marketplace</h2>
              <h4 className="subtitle">Buy and Sell NFTs on BNB Smart Chain</h4>
            </div>
            <input placeholder="search" />
          </div>
        </div>

        <div className="bodyPage">
          <div className="containerCurve">
            <div className="topConcaveCurve">
              <img src={lineTopPage} alt="line"></img>
            </div>
          </div>

          <div className="bodyContainer"></div>
        </div>
      </div>
    </div>
  );
}
