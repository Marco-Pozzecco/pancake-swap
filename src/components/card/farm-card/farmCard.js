import React from "react";
import { Button } from "../../buttons/Button";
import { ConnectWalletBtn } from "../../buttons/ConnectWalletBtn"
import "./FarmCard.scss";

// Props:
// - images => string[]
// - fi =>  string
// - apr => string

export function EarnCard(props) {
  
  const data = props.data;
  
  let upTo = <p className="upTo"><svg viewBox="0 0 15 15" color="success" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 fIulHr"><path d="M8.34588 13.6273C8.0575 13.8656 7.63823 13.7399 7.49172 13.3958L6.78828 11.7438C7.73587 11.3939 8.62311 10.9234 9.44396 10.3744C9.44396 10.3744 9.66966 11.6436 9.38982 12.3723C9.20938 12.8421 8.73469 13.3061 8.34588 13.6273ZM3.25141 8.2087L1.60451 7.50815C1.25825 7.36086 1.1335 6.93831 1.37577 6.6505C1.69974 6.26564 2.16489 5.79794 2.63298 5.61886C3.35861 5.34125 4.62149 5.55437 4.62149 5.55437C4.07225 6.3748 3.60147 7.26158 3.25141 8.2087ZM12.8903 2.10977C12.8903 2.10977 9.90266 0.830267 6.4865 4.2453C5.1647 5.56643 4.37403 7.02028 3.861 8.29315C3.69201 8.7456 3.80668 9.24027 4.13864 9.57809L5.42423 10.857C5.75619 11.1948 6.25111 11.3034 6.70378 11.1345C8.22388 10.5552 9.6041 9.66087 10.7537 8.51033C14.1699 5.09589 12.8903 2.10977 12.8903 2.10977ZM8.62311 6.3748C8.15233 5.90426 8.15233 5.13812 8.62311 4.66758C9.09389 4.19704 9.86042 4.19704 10.3312 4.66758C10.7959 5.13812 10.802 5.90426 10.3312 6.3748C9.86042 6.84534 9.09389 6.84534 8.62311 6.3748Z"></path><path d="M3.77609 10.3019C3.54971 10.0756 3.23604 9.92849 2.92949 10.0208C2.22706 10.2322 1.71542 10.8838 1.71542 11.6548L1.71542 13.361H3.42253C4.19392 13.361 4.84581 12.8496 5.05736 12.1476C5.14968 11.8412 5.00246 11.5277 4.77608 11.3014L3.77609 10.3019Z"></path></svg> Up to </p>
  let svglink = <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 ceTLum"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
  
  return (
    <>
      <div className={`earn-card ${parseInt(props.idx) < 3 && "earn-card-border-animated"}`}>
        {parseInt(props.idx) < 3 && <div className="border-animated"></div>}
        <div className="card-header">
          <div className="card-fi-img">
            <img className="token1" src={"https://pancakeswap.finance" + data.images[1]} alt="" />
            <img className="token2" src={"https://pancakeswap.finance" + data.images[0]} alt="" />
          </div>
          <div className="card-fi-stat">
            <div className="card-fi-title">
              {data.financialInstrument && <h1>{data.financialInstrument}</h1>}
            </div>
            <div className="card-fi-details">
              {data.labels.text.map((text, idx) => (
                <div className={`chip ${text.toLowerCase()}`}>
                  <div dangerouslySetInnerHTML={{ __html: data.labels.svg[idx] }} />
                  {text}
                </div>
              ))}
              <div className="chip multiplier">
                {data.multiplier}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-apr card-entry">
            <p className="apr-paragraph">APR:</p>
            {data.apr && <p className="apr-value"> {parseInt(props.idx) < 3 && upTo}{data.apr[1]} <span className={`apr-value ${parseInt(props.idx) < 3 && "apr-value2"}`}>{data.apr[0]}</span> <svg viewBox="0 0 24 24" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg></p>}
          </div>
          <div className="card-body-earn card-entry">
            <p className="earn-paragraph">Earn:</p>
            <p className="earn-value">CAKE + fees</p>
          </div>
          <div className="card-body-earned-cake card-entry">
            <div className="cake-earned-area">
              <p className="cake-earned-paragraph">CAKE EARNED:</p>
              <p className="cake-earned-value">0.00000</p>
            </div>
            <Button type="HarvestButton" text="Harvest" />
          </div>
          {props.idx < 3 && <div className="card-body-yield-booster card-entry">
            <p className="yield-booster-paragraph">YIELD BOOSTER</p>
            <p className="yield-booster-content">Up to 2x <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="upto2icon"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></p>
            <p className="yield-booster-action">Connect wallet to activate yield booster</p>
          </div>}

          <div className="card-fi-stack">
            <p className="card-fi-stack-paragraph">{data.financialInstrument} LP STAKED</p>
            <ConnectWalletBtn type={"farmsconnectwallet"} />
          </div>
        </div>
        <div className="card-details"> <p className="DetailsFarm">Details <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg></p>
          <div className="DetailsOpen">
            <div className="LiquidityFarms">
              <p className="TotalLiquidity">Total Liquidity:</p>
              <p>{data.liquidity}</p>
            </div>
            <a className="FarmsLink" href="">Get CAKE-BNB LP {svglink}</a>
            <a className="FarmsLink" href="">View Contract {svglink}</a>
            <a className="FarmsLink" href="">See Pair Info {svglink}</a>
          </div>
        </div>
      </div>
    </>
  );
}
