import React, { useState, useContext, useEffect } from "react";

//Coponents
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./swap.scss";
import Subnav from "../../components/subnav/Subnav";
import { ModalSettingSwap } from "../../components/modalSettinSwap/ModalSettingSwap";
import { ModalCryptoSwap } from "../../components/modalCryptoSwap/ModalCryptoSwap";
import { SelectedOptionContext } from "../../context/SelectetOptionContext";
import { Graph } from "../../components/graph/Graph";
import { fetchModule } from "../../script/fetchModule";
import ModalConnectWallet from "../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";
import { ThemeContext } from "../../context/ThemeContext";

//icon
import { FaCog } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosResize } from "react-icons/io";
import { HiSwitchVertical } from "react-icons/hi";
import { MdCloseFullscreen } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import bunnyLogo from "../../resources/home/navbar/bunny-icon-round.svg";
import attentionIcon from "../../resources/limit/attentionIcon.svg";
import helpBunny from "../../resources/limit/help.png";
import linkNewPage from "../../resources/limit/linkNewPage.svg";
import bubble from "../../resources/limit/bubbleSwap.svg";
import bubbleLight from "../../resources/limit/bubbleSwapLightTheme.svg";
import btclogo from "../../resources/swap/BTC.png";
import busdlogo from "../../resources/swap/BUSD-logo.png";

export function Swap() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [toggleState, setTab] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isVisible, setVisibile] = useState(false);
  const [visible, setView] = useState(false);
  const [openCryptoModal, setOpenModalCrypto] = useState(false);
  const [switchText, setSwitch] = useState(false);
  const [option, setSelected] = useState("BTC");
  const [infoMessage, setMessageInfo] = useState(false);
  // Financial Graph
  const [timeframe, setTimeframe] = useState("D");
  const [financialInstrument, setFinancialInstrument] = useState(["bitcoin", "usd"]);
  const [labels, setLabels] = useState([]);
  const [fiPrice, setFiPrice] = useState([]);

  // API
  const fetcher = new fetchModule();

  // "D" in ms: 86_400_000
  // "W" in ms: 604_800_000
  // "M"
  // "Y" in ms: 31_536_000_000

  // useEffect(() => {
  //   let startDate;

  //   if (timeframe === "D") {
  //     startDate = Math.round(Date() - 86_400_000);
  //   } else if (timeframe === "W") {
  //     startDate = Math.round(Date() - 604_800_000);
  //   } else if (timeframe === "M") {
  //     startDate = Math.round(Date() - 86_400_000);
  //   } else {
  //     startDate = Math.round(Date() - 31_536_000_000);
  //   }

  //   const data = fetcher.fetchHystoricalData(startDate, financialInstrument[0], financialInstrument[1]);
  //   setLabels(data.prices.map((row) => row[0]));
  //   setFiPrice(data.prices.map((row) => row[1]));
  // }); //[timeframe, financialInstrument]

  const contextValue = {
    option,
    setSelected,
  };

  const toggleTab = (index) => {
    setTab(index);
    console.log(index);
  };

  const Msg = () => (
    <div>
      <h4>Scanning Risk.</h4>
      <p>Please wait until we scan the risk for CAKE token</p>
    </div>
  );

  const infoAlert = () =>
    toast.info(Msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="swap-ext-page">
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]} />

      <div className="swap-int-page">
        <div className="jskBUs-box-page">
          <section className="col-1">
            {visible === false && (
              <div className="Graph">
                <div className="jBdktT-topRow">
                  <div className="cryptoTitle">
                    <div className="logoDivGraph">
                      {switchText === false ? (
                        <img src={bunnyLogo} alt="cryto icon" className="iconSize"></img>
                      ) : (
                        <img src={btclogo} alt="crypto icon" className="iconSize"></img>
                      )}
                      {switchText === false ? (
                        <img src={btclogo} alt="crypto icon" className="iconSize"></img>
                      ) : (
                        <img src={bunnyLogo} alt="cryto icon" className="iconSize"></img>
                      )}
                    </div>
                    {switchText === false ? <p>CAKE</p> : <p>BTCB</p>}
                    <p>/</p>
                    {switchText === false ? <p>BTCB</p> : <p>CAKE</p>}
                    <HiOutlineSwitchHorizontal
                      className="switchArrowGraph"
                      style={{ height: "1.4em", width: "1.4em" }}
                      fill="#0098a1"
                      onClick={() => {
                        switchText === false ? setSwitch(true) : setSwitch(false);
                      }}
                    />
                  </div>
                  <div className="iconBox">
                    <IoIosResize fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"} />
                  </div>
                </div>
                <div className="cJNWTI-bottomRow">
                  <div className="jMqaHv-Left-row ">
                    <div className="priceRow">
                      <p className="price">3.94</p>
                      {switchText === false ? (
                        <p className="cryptoTextGraph">CAKE</p>
                      ) : (
                        <p className="cryptoTextGraph">BTCB</p>
                      )}
                      <p className="cryptoTextGraph">/</p>
                      {switchText === false ? (
                        <p className="cryptoTextGraph">BTCB</p>
                      ) : (
                        <p className="cryptoTextGraph">CAKE</p>
                      )}
                      <p className="priceVariation">+0.014 (0.36%)</p>
                    </div>
                    <p className="dateNow">Dec 02, 2022, 03:39PM</p>
                  </div>

                  <div className="timeframeBtn"></div>
                </div>
                <Graph
                  id="swap-graph"
                  config={{
                    type: "line",
                    data: {
                      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], //labels, // string[]
                      datasets: [
                        {
                          label: "My First Dataset", // omettere
                          data: [20, 10, 12, 19, 3, 5], //fiPrice, //number[]
                          fill: "start", // string o boolean
                          borderColor: "rgb(75, 192, 192)", // string
                          tension: 0.1, // ???
                        },
                      ],
                    },
                  }}
                />
              </div>
            )}
          </section>

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
                    <div className="iconHeaderCard">
                      <FaCog
                        fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                        style={{ height: "1.4em", width: "1.4em" }}
                        onClick={() => setOpenModal(true)}
                      />
                      <RiHistoryLine
                        fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                        style={{ height: "1.4em", width: "1.4em" }}
                        // onClick={setOpenTry()}
                      />
                      <AiOutlineReload
                        fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                        style={{ height: "1.4em", width: "1.4em" }}
                      />
                    </div>
                  </div>
                  <p className="pg-tx">Trade tokens in an instant</p>
                </div>

                <div className="ext-bottomCard">
                  <div className="bottomCard">
                    <div className="input1Converter">
                      <div
                        className="fx-inline switchCryptoBtn"
                        onClick={() => {
                          setOpenModalCrypto(true);
                        }}>
                        {switchText === false ? (
                          <img src={bunnyLogo} alt="cryto icon" className="iconSize"></img>
                        ) : (
                          <img src={btclogo} alt="crypto icon" className="iconSize"></img>
                        )}
                        {switchText === false ? <p>CAKE</p> : <p>BTCB</p>}
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
                            onClick={() => {
                              switchText === false ? setSwitch(true) : setSwitch(false);
                            }}
                          />
                        )}
                      </button>
                    </div>
                    <div className="input1Converter ">
                      <div className="fx-inline switchCryptoBtn" onClick={() => setOpenModalCrypto(true)}>
                        {switchText === false ? (
                          <img src={btclogo} alt="crypto icon" className="iconSize"></img>
                        ) : (
                          <img src={bunnyLogo} alt="cryto icon" className="iconSize"></img>
                        )}

                        {switchText === false ? <p>BTCB</p> : <p>CAKE</p>}
                        <SelectedOptionContext.Provider value={contextValue} />
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
                      <p className="smallGreenBtnText" onClick={infoAlert}>
                        Scann Risk
                      </p>
                      <div>
                        <AiOutlineInfoCircle
                          fill={theme === "theme-dark" ? "#b8add2" : "#7a6eaa"}
                          style={{ height: "1.2em", width: "1.2em" }}
                          className="infoRisk"
                          onMouseEnter={() => setMessageInfo(true)}
                          onMouseLeave={() => setMessageInfo(false)}
                        />
                        {infoMessage === true && (
                          <div className="infoRiskMEssage">
                            The scan result is provided by 3rd parties and may not cover every token. Therefore the
                            result is for reference only, do NOT take it as investment or financial advice. Always DYOR!
                            Powered by Hashdit.
                          </div>
                        )}
                      </div>
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
              {theme === "theme-dark" ? (
                <img className="bubbleIcon" src={bubble} alt="bubble icon"></img>
              ) : (
                <img className="bubbleIcon" src={bubbleLight} alt="bubble icon"></img>
              )}
              <div className="helpBunny">
                <img src={helpBunny} alt="history icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
      <ModalSettingSwap
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          document.body.style.overflow = "unset";
        }}
      />
      <ModalConnectWallet
        open={openModalWallet}
        onClose={() => {
          setOpenModalWallet(false);
          document.body.style.overflow = "unset";
        }}
      />
      <ModalCryptoSwap
        open={openCryptoModal}
        onClose={() => {
          setOpenModalCrypto(false);
          document.body.style.overflow = "unset";
        }}
      />

      <div
        className={
          (openModal === true || openModalWallet === true || openCryptoModal === true) &&
          (document.body.style.overflow = "hidden")
            ? "overlay overlay-active"
            : "overlay"
        }
        onClick={() => {
          setOpenModal(false);
          setOpenModalWallet(false);
          setOpenModalCrypto(false);
          document.body.style.overflow = "unset";
        }}></div>
    </div>
  );
}
