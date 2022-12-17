import React from "react";
import { Button } from "../../buttons/Button";
import FarmCard from "../../../_data/scraper/scraperResult.json";
import { ConnectWalletBtn } from "../../buttons/ConnectWalletBtn"
import "./FarmCard.scss";
// Props:
// - images => string[]
// - fi =>  string
// - apr => string
//
{/* {props.images &&
              props.images.forEach((imgSrc, index) => {
                return <img src={`${imgSrc}`} id={`fi-img-${index}`} />;
              })} */}


export function EarnCard(props) {
  const data = FarmCard;

  return (
    <>
      <div className="earn-card">
        <div className="card-header">
          <div className="card-fi-img">
            <img src="" alt="" />
          </div>
          <div className="card-fi-stat">
            <div className="card-fi-title">
              {data[0].financialInstrument && <h1>{data[0].financialInstrument}</h1>}
            </div>
            <div className="card-fi-details"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-apr card-entry">
            <p className="apr-paragraph">APR:</p>
            {data[0].apr && <p className="apr-value">{data[0].apr}</p>}
          </div>
          <div className="card-body-earn card-entry">
            <p className="earn-paragraph">Earn: {data[0].earned && data[0].earned}</p>
            <p className="earn-value">CAKE + fees</p>
          </div>
          <div className="card-body-earned-cake card-entry">
            <div className="cake-earned-area">
              <p className="cake-earned-paragraph">CAKE EARNED:</p>
              <p className="cake-earned-value">0.00000</p>
            </div>
            {/* harvest button */}
            <Button text="Harvest" />
          </div>
          {props.yieldBooster && (
            <div className="card-body-yield-booster card-entry">
              <p className="yield-booster-paragraph">YIELD BOOSTER</p>
              <p className="yield-booster-content">Up to 2x</p>
              <p className="yield-booster-action">Connect wallet to activate yield booster</p>
            </div>
          )}
          <div className="card-fi-stack">
            <p className="card-fi-stack-paragraph">{data[0].financialInstrument} LP STAKED</p>
            <ConnectWalletBtn />
          </div>
        </div>
        <div className="card-details"></div>
      </div>
    </>
  );
}
