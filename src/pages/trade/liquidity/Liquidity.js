import React, { useState } from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./liquidity.scss";
import helpBunny from "../../../resources/limit/help.png";
import historyIcon from "../../../resources/limit/history.svg";
import addOutlined from "../../../resources/limit/addOutlined.svg";
import leftArrow from "../../../resources/limit/leftArrow.svg";
import setting from "../../../resources/home/navbar/setting-icon.svg";
import { ConnectWalletBtn } from "../../../components/buttons/ConnectWalletBtn";
import ModalConnectWallet from "../../../components/modal-connect-wallet/ModalConnectWallet";
import { AddLiquidityBtn } from "../../../components/buttons/AddLiquidity";

export function Liquidity() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [show, showFunc] = useState(1);

  const toggleTab = (index) => {
    showFunc(index);
    console.log(index);
  };

  return (
    <div className="liquidity-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="liquidity-box-page">
        <div>
          <div className="liquidityCard ">
            <div className="headerCard">
              <div className="headerRow">
                {show === 2 && <img src={leftArrow} alt="arrow icon"></img>}
                {show === 1 && <h3 className="header active-header">Your Liquidity</h3>}
                {show === 2 && <h3 className="header active-header">Add Liquidity</h3>}
                <div className="headerIcon">
                  <img src={setting} alt="history icon"></img>
                  <img src={historyIcon} alt="history icon"></img>
                </div>
              </div>
              <p className="pg-tx">Remove liquidity to receive tokens back</p>
            </div>

            <div className="ext-bottomCard">
              <div className="bottomCard">
                <div className="pg-tx">
                  <p>Connect to a wallet to view your liquidity.</p>
                </div>
                {show === 2 && (
                  <div className="rowAfterEmptyDiv">
                    <h4>CHOOSE A VALID PAIR</h4>
                  </div>
                )}

                {show === 2 && (
                  <div className="fx-inline">
                    <p>Price</p>
                    <p>Market</p>
                  </div>
                )}
              </div>
              <div className="buttonsLayout">
                {show === 1 && (
                  <AddLiquidityBtn type="fullButton button-addLiqu" action={() => toggleTab(1)} svg={addOutlined} />
                )}
                {show === 2 && (
                  <ConnectWalletBtn type="fullButton button-addLiqu" action={() => setOpenModalWallet(true)} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-page-swap">
          <p>Bridge assets to BNB Chain</p>

          <div className="extBox-bunnyHelp">
            <div className="emptyDiv-helpBunny"></div>
            <div className="helpBunny">
              <img src={helpBunny} alt="history icon"></img>
            </div>
          </div>
        </div>
        <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
      </div>
    </div>
  );
}
