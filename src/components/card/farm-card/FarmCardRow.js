import React from "react";
import { Boosted } from "../../buttons/Boosted";
import { Button } from "../../buttons/Button";
import { ConnectWalletBtn } from "../../buttons/ConnectWalletBtn";
import { Core } from "../../buttons/Core";
import "./FarmCard.scss";

// Props:
// - images => string[]
// - fi =>  string
// - apr => string

export function FarmCardRow(props) {
  const data = props.data;

  let upTo = (
    <p className="upTo">
      <svg
        viewBox="0 0 15 15"
        color="success"
        fill="#31d0aa"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.34588 13.6273C8.0575 13.8656 7.63823 13.7399 7.49172 13.3958L6.78828 11.7438C7.73587 11.3939 8.62311 10.9234 9.44396 10.3744C9.44396 10.3744 9.66966 11.6436 9.38982 12.3723C9.20938 12.8421 8.73469 13.3061 8.34588 13.6273ZM3.25141 8.2087L1.60451 7.50815C1.25825 7.36086 1.1335 6.93831 1.37577 6.6505C1.69974 6.26564 2.16489 5.79794 2.63298 5.61886C3.35861 5.34125 4.62149 5.55437 4.62149 5.55437C4.07225 6.3748 3.60147 7.26158 3.25141 8.2087ZM12.8903 2.10977C12.8903 2.10977 9.90266 0.830267 6.4865 4.2453C5.1647 5.56643 4.37403 7.02028 3.861 8.29315C3.69201 8.7456 3.80668 9.24027 4.13864 9.57809L5.42423 10.857C5.75619 11.1948 6.25111 11.3034 6.70378 11.1345C8.22388 10.5552 9.6041 9.66087 10.7537 8.51033C14.1699 5.09589 12.8903 2.10977 12.8903 2.10977ZM8.62311 6.3748C8.15233 5.90426 8.15233 5.13812 8.62311 4.66758C9.09389 4.19704 9.86042 4.19704 10.3312 4.66758C10.7959 5.13812 10.802 5.90426 10.3312 6.3748C9.86042 6.84534 9.09389 6.84534 8.62311 6.3748Z"></path>
        <path d="M3.77609 10.3019C3.54971 10.0756 3.23604 9.92849 2.92949 10.0208C2.22706 10.2322 1.71542 10.8838 1.71542 11.6548L1.71542 13.361H3.42253C4.19392 13.361 4.84581 12.8496 5.05736 12.1476C5.14968 11.8412 5.00246 11.5277 4.77608 11.3014L3.77609 10.3019Z"></path>
      </svg>{" "}
      Up to{" "}
    </p>
  );
  let svglink = (
    <svg
      viewBox="0 0 24 24"
      color="primary"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
    </svg>
  );

  return (
    <>
      <div
        className={`earn-row`}
      >
        
        
        <div className="card-col-1">
          <div className="card-fi-img">
            <img
              className="token1"
              src={"https://pancakeswap.finance" + data.images[1]}
              alt=""
            />
            <img
              className="token2"
              src={"https://pancakeswap.finance" + data.images[0]}
              alt=""
            />
          </div>
          <div className="card-fi-title">
              {data.financialInstrument && <h1>{data.financialInstrument}</h1>}
          </div>
        </div>
        
        <div className="card-col-2">
          <div className="card-fi-details">
            {data.labels.text.map((text) => {
              if (text === "Core") {
                return <Core />
              } else if (text === "Boosted") {
                return <Boosted />
              }
            })}
          </div>
        </div>
        
        <div className="card-col-3">
          <div className="cake-earned-area card-entry">
            <p className="cake-earned-paragraph title">Earned</p>
            <p className="cake-earned-value">0</p>
          </div>
        </div>

        <div className="card-col-4">
          <div className="c-apr card-entry">
            <p className="apr-paragraph title">APR</p>
            {data.apr && (
              <p className="apr-value">
                <span
                  className={`apr-value ${
                    parseInt(props.idx) < 3 && "apr-value2"
                  }`}
                >
                  {data.apr[0]}
                </span>{" "}
                <svg
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#b8add2"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                  <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                  <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                  <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                  <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                  <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                </svg>
                {" "}
                {parseInt(props.idx) < 3 && upTo}
                {data.apr[1]}{" "}
              </p>
            )}
          </div>
        </div>

        <div className="card-col-5">
          <div className="liquidity">
            <p className="liquidity-title title">Liquidity</p>
            <p className="liquidity-value">{data.liquidity}</p>
          </div>
        </div>

        <div className="card-col-6">
          <div className="chip multiplier">
            <div className="multiplier-title title">Multiplier</div>
            <div className="multiplier-value">{data.multiplier}</div>
          </div>
        </div>

        <div className="card-col-7">
          <svg
                viewBox="0 0 24 24"
                fill="whitesmoke"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
              </svg>
        </div>
        
      </div>

        <div className="DetailsClosed">
          <div className="LiquidityFarms">
            <p className="TotalLiquidity">Total Liquidity:</p>
            <p>{data.liquidity}</p>
          </div>
          <a className="FarmsLink" href="">
            Get CAKE-BNB LP {svglink}
          </a>
          <a className="FarmsLink" href="">
            View Contract {svglink}
          </a>
          <a className="FarmsLink" href="">
            See Pair Info {svglink}
          </a>
        </div>
      
    </>
  );
}
