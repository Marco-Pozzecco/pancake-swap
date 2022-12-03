import React, { useState, useContext } from "react";
import { CryptoModalRadioButtons } from "../buttons/CryptoModalRadioButtons";
import "./modalCryptoSwap.scss";
import bnbIcon from "../../resources/home/navbar/bnb.png";
import aptos from "../../resources/home/navbar/aptos.png";
import Ethereum from "../../resources/home/navbar/ethereum.png";
import { SelectedOptionContext } from "../../context/SelectetOptionContext";

export function ModalCryptoSwap({ open, onClose }) {
  const options = [
    {
      name: "BNB",
      img: <img className="fa-svg-icon" src={bnbIcon} alt="bnb icon"></img>,
      description: "Binance Chain Native Token",
    },
    {
      name: "Ethereum",
      img: <img className="fa-svg-icon" src={Ethereum} alt="ethereum icon"></img>,
      description: "lalala",
    },
    { name: "Aptos", img: <img className="fa-svg-icon" src={aptos} alt="aptos icon"></img>, description: "lalala" },
    {
      name: "BNB",
      img: <img className="fa-svg-icon" src={bnbIcon} alt="bnb icon"></img>,
      description: "Binance Chain Native Token",
    },
    {
      name: "Ethereum",
      img: <img className="fa-svg-icon" src={Ethereum} alt="ethereum icon"></img>,
      description: "lalala",
    },
    { name: "Aptos", img: <img className="fa-svg-icon" src={aptos} alt="aptos icon"></img>, description: "lalala" },
    {
      name: "BNB",
      img: <img className="fa-svg-icon" src={bnbIcon} alt="bnb icon"></img>,
      description: "Binance Chain Native Token",
    },
    {
      name: "Ethereum",
      img: <img className="fa-svg-icon" src={Ethereum} alt="ethereum icon"></img>,
      description: "lalala",
    },
    { name: "Aptos", img: <img className="fa-svg-icon" src={aptos} alt="aptos icon"></img>, description: "lalala" },
  ];

  //const [selected, setSelected] = useState({ ...options[0] });
  const [selected, setSelected] = useState({});
  //const {setSelected} = useContext(SelectedOptionContext);
  if (!open) return null;

  return (
    <div
      className="modalCryptoSwap"
      id="modal"
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <div className="modalHeader flex-switch">
        <h3 className="header">Select a Token</h3>
        <button data-close-btn className="close-btn-modal" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="bordeBottom"></div>
      <div className="bottomModal">
        <div className="input1Converter">
          <input className="convertInput" placeholder="Search name or paste address"></input>
        </div>

        <div className="flex-switch">
          <p className="parag">Common tokens</p>
        </div>
        <div className="flex-switch">
          <CryptoModalRadioButtons />
        </div>
        <div className="cryptoList">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="cryptoElement"
                onClick={() => {
                  setSelected(option.name);
                  onClose(ModalCryptoSwap(false));
                }}>
                <div className="cryptoLogo">{option.img}</div>
                <div className="cryptoContent">
                  <div className="cryptoName">{option.name}</div>
                  <div className="cryptoDesc">{option.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
