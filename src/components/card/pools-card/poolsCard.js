import { elementAcceptingRef } from "@mui/utils";
import React, { useState, useEffect } from "react";
import { Button } from "../../buttons/Button";
import { ConnectWalletBtn } from "../../buttons/ConnectWalletBtn"
import "./PoolsCard.scss";
// Props:
// - images => string[]
// - fi =>  string
// - apr => string
//
{/* {props.images &&
              props.images.forEach((imgSrc, index) => {
                return <img src={`${imgSrc}`} id={`fi-img-${index}`} />;
              })} */}


export function PoolCard(props) {
  const data = props.data;
  let svglink = <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 ceTLum"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
  let arrowdown = <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
  let arrowup = <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK"><path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path></svg>
  const DetailsContainer = document.querySelector("DetailsOpen");
  let DetailsStatus = "DetailsOpen"
  let [ShowDetails, setShowDetails] = useState(true)
  console.log(ShowDetails)

  async function showHideDet() {
    setShowDetails(false)
    DetailsStatus = "DetailsOpen"
    if (ShowDetails) {
      setShowDetails(true)
      DetailsStatus = "DetailsClosed"
    }

  }


  return (
    <>
      <div className={`earn-cardpo ${parseInt(props.idx) < 1 && "earn-cardpo-border-animated"}`}>
        {parseInt(props.idx) < 1 && <div className="border-animated"></div>}
        <div className="cardpo-header">
          <div className="cardpo-fi-img">
            <img className="token3" src={"https://pancakeswap.finance" + data.images[1]} alt="" />
            <img className="token4" src={"https://pancakeswap.finance" + data.images[0]} alt="" />
          </div>
          <div className="cardpo-fi-stat">
            <div className="cardpo-fi-title">
              {data.financialInstrument && <h1 className="pools-sizes">{data.financialInstrument[0]}</h1>}
              {data.financialInstrument && <p className="pools-sizes2">{data.financialInstrument[1]}</p>}
            </div>
          </div>
        </div>
        <div className="cardpo-body">

          <div className="cardpo-fi-stack">
            <ConnectWalletBtn type={"Poolsconnectwallet"} />
          </div>
        </div>
        <div className="cardpo-details"> <p className="DetailsPool"><span className="DetailsPool">Details</span></p>
          <div className={DetailsStatus}>
            {data.apr && <div className="LiquidityPools">
              <p className="TotalStaked">APR:</p>
              <p>{data.apr}</p>
            </div>}
            {data.totalstaked && <div className="LiquidityPools">
              <p className="TotalStaked">Total staked:</p>
              <p>{data.totalstaked}</p>
            </div>}
            {data.totallocked && <div className="LiquidityPools">
              <p className="TotalStaked">Total locked:</p>
              <p>{data.totallocked}</p>
            </div>}
            {data.lockduration && <div className="LiquidityPools">
              <p className="TotalStaked">Average lock duration:</p>
              <p>{data.lockduration}</p>
            </div>}
            {data.fee && <div className="LiquidityPools">
              <p className="TotalStaked">Performance Fee:</p>
              <p>{data.fee}</p>
            </div>}
            {data.maxstaked && <div className="LiquidityPools">
              <p className="TotalStaked">Max stake per user:</p>
              <p>{data.maxstaked}</p>
            </div>}
            {data.maxstakelimit && <div className="LiquidityPools">
              <p className="TotalStaked">Max stake limit ends in:</p>
              <p className="bluetextlink">{data.maxstakelimit}</p>
            </div>}
            {data.endin && <div className="LiquidityPools">
              <p className="TotalStaked">Ends in:</p>
              <p className="bluetextlink">{data.endsin}</p>
            </div>}
            <a className="PoolsLink" href="">See Token Info {svglink}</a>
            {data.tutorial && <a className="PoolsLink" href="">Tutorial {svglink}</a>}
            {data.website && <a className="PoolsLink" href="">View Project Site {svglink}</a>}
            <a className="PoolsLink" href="">View Contract {svglink}</a>
          </div>
        </div>
      </div>
    </>
  );
}
