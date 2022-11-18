import React, { useState } from "react";
import "./swap.scss";
import Subnav from "../../components/subnav/Subnav";
import barChart from "../../resources/limit/barIcon.svg";
import historyIcon from "../../resources/limit/history.svg";
import doubleArrow from "../../resources/limit/doubleArrow.svg";
import bunnyLogo from "../../resources/home/navbar/bunny-icon-round.svg";
import copied from "../../resources/limit/copied.svg";
import arrowLimit from "../../resources/limit/arrowLimit.svg";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import helpBunny from "../../resources/limit/help.png";

import ModalConnectWallet from "../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";

export function Swap() {
  const [openModalWallet, setOpenModalWallet] = useState(false);

  return (
    <div className="swap-box">
      <Subnav
        elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}
      />

      <div className="jskBUs">
        <section className="col-2">
          <div className="ConverterCard ">
            <div className="headerCard">
              <div className="headerRow">
                <img src={barChart} alt="history icon"></img>
                <h3 className="header">LIMIT</h3>
                <img src={historyIcon} alt="history icon"></img>
              </div>
              <p className="pg-tx">
                Place a limit order to trade at a set price
              </p>
            </div>

            <div className="ext-bottomCard">
              <div className="bottomCard">
                <div className="input1Converter">
                  <div className="fx-inline switchCryptoBtn">
                    <img src={bunnyLogo} alt="history icon"></img>CAKE
                    <img className="fa-svg-icon" src={arrow} alt="arrow icon" />
                    <img
                      className="fa-svg-icon"
                      src={copied}
                      alt="arrow icon"
                    />
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
                    <img className="fa-svg-icon" src={arrow} alt="arrow icon" />
                    <img
                      className="fa-svg-icon"
                      src={copied}
                      alt="arrow icon"
                    />
                  </div>
                  <input placeholder="0.0" className="convertInput"></input>
                </div>
                <div className="fx-inline">
                  <p>Price</p>
                  <p>Market</p>
                </div>
                <input className="emptyDiv"></input>
                <div className="rowAfterEmptyDiv">
                  <p>BTCB</p>
                  <p>per</p>
                  <p>CAKE</p>
                </div>
              </div>
              <ConnectWalletBtn
                type="fullButton button-aqg"
                action={() => setOpenModalWallet(true)}
              />
              <p className="var-text-color">
                Powered by <strong>Gelato</strong>
              </p>
            </div>
          </div>
        </section>
        <ModalConnectWallet
          open={openModalWallet}
          onClose={() => setOpenModalWallet(false)}
        />
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
