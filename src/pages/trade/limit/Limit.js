import React, { useState, useContext } from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./limit.scss";
import ModalConnectWallet from "../../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../../components/buttons/ConnectWalletBtn";
import arrow from "../../../resources/home/navbar/arrow-down.svg";
//import doubleArrow from "../../../resources/limit/doubleArrow.svg";
import bunnyLogo from "../../../resources/home/navbar/bunny-icon-round.svg";
import bunnyCard from "../../../resources/limit/imgBunnyBottmCard.svg";
//import bunnyCardLighTheme from "../../../resources/limit/bunnyBtmCardLightTheme.svg";
import leftArrow from "../../../resources/limit/leftArrow.svg";
import rightArrow from "../../../resources/limit/rightArrow.svg";
import helpBunny from "../../../resources/limit/help.png";
import { RiHistoryLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { HiSwitchVertical } from "react-icons/hi";
import { ThemeContext } from "../../../context/ThemeContext";
import { BiDownArrowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
import poweredByGelato from "../../../resources/limit/powered_by_gelato_bk.svg";
import poweredByGelatoWhite from "../../../resources/limit/powered_by_gelato_white.svg";

export function Limit() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [toggleState, setTab] = useState(1);
  const { theme } = useContext(ThemeContext);
  const [isVisible, setVisibile] = useState(false);
  const [visible, setView] = useState(false);
  const [switchText, setSwitch] = useState(false);

  const toggleTab = (index) => {
    setTab(index);
    console.log(index);
  };

  return (
    <div className="body-limit">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="limit-external-box">
        <section className="col-1">
          {visible === false && <div className="fakeGraph"></div>}

          <div className="col1-btm-page">
            <div className="col1-bottom-card">
              <div className="bloc-tabs-bottom-card">
                <div className={toggleState === 1 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(1)}>
                  Open Orders
                </div>
                <div className={toggleState === 2 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(2)}>
                  Order History
                </div>
              </div>
              <div className="container-bottom-card">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="th-table">
                        <div>From</div>
                      </th>
                      <th className="th-table">
                        <div>To</div>
                      </th>
                      <th className="th-table">
                        <div>Limit Price</div>
                      </th>
                      <th className="th-table">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                </table>

                <div className="content-bottom-card">
                  <img className="" src={bunnyCard} alt="wallet" />
                  <p className={toggleState === 1 ? " switchTxt active-switchImg" : "switchTxt"}>No Open orders</p>
                  <p className={toggleState === 2 ? " switchTxt active-switchImg" : "switchTxt"}>No Order History</p>
                </div>
                <div className="card-bottom-row">
                  <img className="switchImg" src={leftArrow} alt="wallet" />
                  <p>Page 1 of 1</p>
                  <img className="switchImg" src={rightArrow} alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="col-2">
          <div className="ConverterCard ">
            <div className="headerCard">
              <div className="headerRow">
                {visible === false && (
                  <FaChartBar
                    fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                    style={{ height: "1.4em", width: "1.4em" }}
                    onClick={() => setView(true)}
                  />
                )}
                {visible === true && (
                  <BiHide
                    fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                    style={{ height: "1.4em", width: "1.4em" }}
                    onClick={() => setView(false)}
                  />
                )}
                <h3 className="header">LIMIT</h3>
                <RiHistoryLine
                  fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                  style={{ height: "1.4em", width: "1.4em" }}
                />
              </div>
              <p className="pg-tx">Place a limit order to trade at a set price</p>
            </div>

            <div className="ext-bottomCard">
              <div className="bottomCard">
                <div className="input1Converter">
                  <div className="fx-inline switchCryptoBtn">
                    <img src={bunnyLogo} alt="history icon"></img>
                    {switchText === false ? <p>CAKE</p> : <p>BTCB</p>}
                    <img className="fa-svg-icon" src={arrow} alt="arrow icon" />
                  </div>
                  <input placeholder="0.0" className="convertInput"></input>
                </div>
                <div className="flex">
                  <button className="arrrowBtn">
                    {isVisible === false && (
                      <BiDownArrowAlt
                        fill="#1fc7d4"
                        style={{ height: "1.3em", width: "1.3em" }}
                        onMouseEnter={() => setVisibile(true)}
                      />
                    )}
                    {isVisible === true && (
                      <HiSwitchVertical
                        fill="#1fc7d4"
                        style={{ height: "1.3em", width: "1.3em" }}
                        onMouseLeave={() => setVisibile(false)}
                        onClick={() => {
                          switchText === false ? setSwitch(true) : setSwitch(false);
                        }}
                      />
                    )}
                  </button>
                </div>
                <div className="input1Converter ">
                  <div className="fx-inline switchCryptoBtn">
                    <img src={bunnyLogo} alt="history icon"></img>
                    {switchText === false ? <p>BTCB</p> : <p>CAKE</p>}
                    <img className="fa-svg-icon" src={arrow} alt="arrow icon" />
                    <MdContentCopy
                      fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                      style={{ height: "1em", width: "1em" }}
                    />
                  </div>
                  <input placeholder="0.0" className="convertInput"></input>
                </div>
                <div className="fx-inline">
                  <p className="textAccent">Price</p>
                  <p className="smallBtnText">Market</p>
                </div>
                <input className="emptyDiv"></input>
                <div className="rowAfterEmptyDiv">
                  <p>BTCB</p>
                  <p>per</p>
                  <p>CAKE</p>
                </div>
              </div>
              <ConnectWalletBtn type="fullButton button-aqg" action={() => setOpenModalWallet(true)} />
              {theme === "theme-dark" ? (
                <img src={poweredByGelatoWhite} alt="gelato icon" className="gelotoLogo"></img>
              ) : (
                <img src={poweredByGelato} alt="gelato icon" className="gelotoLogo"></img>
              )}
            </div>
          </div>
          <div className="extBox-bunnyHelp">
            <div className="emptyDiv-helpBunny"></div>
            <div className="helpBunny">
              <img src={helpBunny} alt="bunnyHelp icon"></img>
            </div>
          </div>
        </section>
        <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
      </div>
      <div
        className={openModalWallet === true ? "overlay overlay-active" : "overlay"}
        onClick={() => {
          setOpenModalWallet(false);
        }}></div>
    </div>
  );
}
