import React, { useState } from "react";
import "./swap.scss";
import Subnav from "../../components/subnav/Subnav";
import barChart from "../../resources/limit/barIcon.svg";
import historyIcon from "../../resources/limit/history.svg";
//import doubleArrow from "../../resources/limit/doubleArrow.svg";
import bunnyLogo from "../../resources/home/navbar/bunny-icon-round.svg";
import copied from "../../resources/limit/copied.svg";
import arrowLimit from "../../resources/limit/arrowLimit.svg";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import helpBunny from "../../resources/limit/help.png";
import reload from "../../resources/limit/reload.svg";
import settingSvg from "../../resources/home/navbar/setting-icon.svg";

import ModalConnectWallet from "../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";

export function Swap() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [toggleState, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
    console.log(index);
  };

  return (
    <div className="swap-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="jskBUs-box-page">

        <section className="main-swap-card">
          <div className="swap-card">
            <div className="bloc-tabs-card">
                  <div className={toggleState === 1 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(1)}>
                    Swap
                  </div>
                  <div className={toggleState === 2 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(2)}>
                    Stable Swap
                  </div>
            </div>
            <div className="ConverterCard ">
              <div className="headerCard">
                <div className="headerRow">
                  <img src={barChart} alt="history icon"></img>
                  <h3 className={toggleState === 1 ? "header active-header" : "header"}>SWAP</h3>
                  <h3 className={toggleState === 2 ? "header active-header" : "header"}>STABLE SWAP</h3>
                  <img src={settingSvg} alt="reload icon"></img>
                  <img src={historyIcon} alt="history icon"></img>
                  <img src={barChart} alt="reload icon"></img>
                </div>
                <p className="pg-tx">Trade tokens in an instant</p>
              </div>

              <div className="ext-bottomCard">
                <div className="bottomCard">
                  <div className="input1Converter">
                    <div className="fx-inline switchCryptoBtn">
                      <img src={bunnyLogo} alt="history icon"></img>CAKE
                      <img className={toggleState === 1 ? "fa-svg-icon active-fab" : "fa-svg-icon"} src={arrow} alt="arrow icon" />
                      <img className={toggleState === 2 ? "fa-svg-icon active-fab" : "fa-svg-icon"} src={copied} alt="copy icon" />
                    </div>
                    <input placeholder="0.0" className="convertInput"></input>
                  </div>
                  <div className="flex">
                    <button className="arrrowBtn">
                      <img src={arrowLimit} alt="history icon"></img>
                    </button>
                  </div>
                  <div className="input1Converter ">
                    <div className="fx-inline switchCryptoBtn">
                      <img src={bunnyLogo} alt="history icon"></img>BTCB
                      <img className={toggleState === 1 ? "fa-svg-icon active-fab" : "fa-svg-icon"} src={arrow} alt="arrow icon" />
                      <img className="fa-svg-icon" src={copied} alt="arrow icon" />
                    </div>
                    <input placeholder="0.0" className="convertInput"></input>
                  </div>

                  <div className="rowAfterEmptyDiv">
                    <p>Scann Risk</p>
                    
                  </div>
                  <div className="fx-inline">
                    <p>Slippage Tolerance</p>
                    
                  </div>
                </div>
                <ConnectWalletBtn type="fullButton button-aqg" action={() => setOpenModalWallet(true)} />
                
              </div>
            </div>
          </div>
        </section>
        <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
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
    </div>
  );
}
