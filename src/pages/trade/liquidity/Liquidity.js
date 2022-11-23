import React, { useState, useContext } from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./liquidity.scss";
import helpBunny from "../../../resources/limit/help.png";
import leftArrow from "../../../resources/limit/leftArrow.svg";
import { ConnectWalletBtn } from "../../../components/buttons/ConnectWalletBtn";
import ModalConnectWallet from "../../../components/modal-connect-wallet/ModalConnectWallet";
import { AddLiquidityBtn } from "../../../components/buttons/AddLiquidity";
import linkNewPage from "../../../resources/limit/linkNewPage.svg";
import bubble from "../../../resources/limit/bubbleSwap.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaCog } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

export function Liquidity() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [show, showFunc] = useState(1);
  const { theme } = useContext(ThemeContext);

  const toggleTab = (index) => {
    showFunc(index);
    console.log(index);
  };

  return (
    <div className="liquidity-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="liq-ext-pg-child">
        <div className="liquidity-box-page">
          <div>
            <div className="liquidityCard ">
              <div className="rowCard">
                <div>
                  {show === 2 && (
                    <img src={leftArrow} alt="arrow icon" onClick={() => toggleTab(1)} className="leftArrow"></img>
                  )}
                </div>
                <div className="headerCard">
                  <div className="headerRow">
                    {show === 1 ? (
                      <h3 className="header">Your Liquidity</h3>
                    ) : (
                      <h3 className="header">Add Liquidity</h3>
                    )}

                    <div className="headerIcon">
                      {theme === "theme-dark" ? <FaCog fill="#b8add2" /> : <FaCog fill="#7a6eaa" />}
                      {theme === "theme-dark" ? <RiHistoryLine fill="#b8add2" /> : <RiHistoryLine fill="#7a6eaa" />}
                    </div>
                  </div>
                  <p className="pg-tx">Remove liquidity to receive tokens back</p>
                </div>
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
                    <AddLiquidityBtn type="fullButton button-addLiqu" action={() => toggleTab(2)}>
                      <RiAddFill fill={theme === "theme-dark" ? "#b8add2" : "#fff"} />
                    </AddLiquidityBtn>
                  )}
                  {show === 2 && (
                    <ConnectWalletBtn type="fullButton button-addLiqu" action={() => setOpenModalWallet(true)} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="empty-div-liquidity">
            {show === 2 && (
              <p className="text-div-liquidity">
                🥞 By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the
                pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
              </p>
            )}
          </div>
          <div className="bottom-page-swap">
            <p>Bridge assets to BNB Chain</p>
            <img src={linkNewPage} alt="history icon"></img>

            <div className="extBox-bunnyHelp">
              <div className="bubbleDiv">
                <div className="needHelpBubble">Need Help ?</div>
                <img className="bubbleIcon" src={bubble} alt="bubble icon"></img>
                <div className="helpBunny">
                  <img src={helpBunny} alt="history icon"></img>
                </div>
              </div>
            </div>
          </div>
          <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
        </div>
      </div>
      <div
        className={openModalWallet === true ? "overlay overlay-active" : "overlay"}
        onClick={() => {
          setOpenModalWallet(false);
        }}></div>
    </div>
  );
}
