import React, { useState, useContext } from "react";
import "./swap.scss";
import Subnav from "../../components/subnav/Subnav";
//import doubleArrow from "../../resources/limit/doubleArrow.svg";
import bunnyLogo from "../../resources/home/navbar/bunny-icon-round.svg";
import attentionIcon from "../../resources/limit/attentionIcon.svg";
import helpBunny from "../../resources/limit/help.png";
import linkNewPage from "../../resources/limit/linkNewPage.svg";
import bubble from "../../resources/limit/bubbleSwap.svg";
//import reload from "../../resources/limit/reload.svg";
import ModalConnectWallet from "../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";
import { ThemeContext } from "../../context/ThemeContext";
import { FaCog } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { HiSwitchVertical } from "react-icons/hi";
import { BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { ModalSettingSwap } from "../../components/modalSettinSwap/ModalSettingSwap";
import ModalCryptoSwap from "../../components/modalCryptoSwap/ModalCryptoSwap";

export function Swap() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [toggleState, setTab] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isVisible, setVisibile] = useState(false);
  const [visible, setView] = useState(false);
  const [openCryptoModal, setOpenModalCrypto] = useState(false);

  const toggleTab = (index) => {
    setTab(index);
    console.log(index);
  };

  return (
    <div className="swap-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="swap-int-page">
        <div className="jskBUs-box-page">
          <section className="col-1">{visible === false && <div className="fakeGraph"></div>}</section>
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
                    <h3 className={toggleState === 1 ? "header active-header" : "header"}>Swap</h3>
                    <h3 className={toggleState === 2 ? "header active-header" : "header"}>Stable Swap</h3>
                    <FaCog
                      fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                      style={{ height: "1.4em", width: "1.4em" }}
                      onClick={() => setOpenModal(true)}
                    />
                    <RiHistoryLine
                      fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                      style={{ height: "1.4em", width: "1.4em" }}
                      onClick={() => setOpenModal(true)}
                    />
                    <AiOutlineReload
                      fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                      style={{ height: "1.4em", width: "1.4em" }}
                    />
                  </div>
                  <p className="pg-tx">Trade tokens in an instant</p>
                </div>

                <div className="ext-bottomCard">
                  <div className="bottomCard">
                    <div className="input1Converter">
                      <div className="fx-inline switchCryptoBtn">
                        <img src={bunnyLogo} alt="history icon"></img>
                        <p>CAKE</p>
                        {toggleState === 1 && (
                          <IoIosArrowDown
                            fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                            style={{ height: "1.3em", width: "1.3em" }}
                          />
                        )}
                        {toggleState === 2 && (
                          <MdContentCopy
                            fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                            style={{ height: "1em", width: "1em" }}
                          />
                        )}
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
                          />
                        )}
                      </button>
                    </div>
                    <div className="input1Converter ">
                      <div className="fx-inline switchCryptoBtn" onClick={() => setOpenModalCrypto(true)}>
                        <img src={bunnyLogo} alt="history icon"></img>
                        <p>BTCB</p>
                        {toggleState === 1 && (
                          <IoIosArrowDown
                            fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                            style={{ height: "1.3em", width: "1.3em" }}
                          />
                        )}
                        <MdContentCopy
                          fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                          style={{ height: "1em", width: "1em" }}
                        />
                      </div>
                      <input placeholder="0.0" className="convertInput"></input>
                    </div>

                    <div className="rowAfterEmptyDiv">
                      <p className="smallGreenBtnText">Scann Risk</p>
                      <AiOutlineInfoCircle
                        fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                        style={{ height: "1.2em", width: "1.2em" }}
                      />
                    </div>
                    <div className="fx-inline secondRow">
                      <p className="textAccent">Slippage Tolerance</p>
                      <p className="greenText">1%</p>
                    </div>
                    {toggleState === 2 && (
                      <div className="message-card">
                        <img scr={attentionIcon} alt=""></img>
                        <p>Trade stablecoins in StableSwap with lower slippage and trading fees!</p>
                      </div>
                    )}
                  </div>
                  <ConnectWalletBtn type="fullButton button-aqg" action={() => setOpenModalWallet(true)} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bottom-page-swap">
          <p className="">Bridge assets to BNB Chain</p>
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
      </div>
      <ModalSettingSwap open={openModal} onClose={() => setOpenModal(false)} />
      <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
      <ModalCryptoSwap open={openCryptoModal} onClose={() => setOpenModalCrypto(false)} />

      <div
        className={
          openModal === true || openModalWallet === true || openCryptoModal === true
            ? "overlay overlay-active"
            : "overlay"
        }
        onClick={() => {
          setOpenModal(false);
          setOpenModalWallet(false);
          setOpenModalCrypto(false);
        }}></div>
    </div>
  );
}
