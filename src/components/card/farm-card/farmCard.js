import React from "react";
import fs from "fs";
import { Button, ConnectWalletBtn } from "../../buttons/Button";

// Props:
// - images => string[]
// - fi =>  string
// - apr => string
//
export function earnCard(props) {
  const json = fs.readFile("src/_data/scraper/scraperResult.json");
  const data = JSON.parse(json);

  return (
    <>
      <div className="earn-card">
        <div className="card-header">
          <div className="card-fi-img">
            {props.images &&
              props.images.forEach((imgSrc, index) => {
                return <img src={`${imgSrc}`} id={`fi-img-${index}`} />;
              })}
          </div>
          <div className="card-fi-stat">
            <div className="card-fi-title">
              {props.fi && <h1>{props.fi}</h1>}
            </div>
            <div className="card-fi-details"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-apr card-entry">
            <p className="apr-paragraph">APR:</p>
            {props.apr && <p className="apr-value">{props.apr}</p>}
          </div>
          <div className="card-body-earn card-entry">
            <p className="earn-paragraph">Earn:</p>
            <p className="earn-value">CAKE + fees</p>
          </div>
          <div className="card-body-earned-cake card-entry">
            <div className="">
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
            <p className="card-fi-stack-paragraph">{props.fi} LP STAKED</p>
            <ConnectWalletBtn />
          </div>
        </div>
        <div className="card-details"></div>
      </div>
    </>
  );
}
