import React, { useState } from "react";
import "./cryptoModalradioButtons.scss";
import bnblogo from "../../resources/swap/BNBLogo.svg";
import btclogo from "../../resources/swap/BTC.png";
import busdlogo from "../../resources/swap/BUSD-logo.png";
import bunnyLogo from "../../resources/home/navbar/bunny-icon-round.svg";

export function CryptoModalRadioButtons(props) {
  const [i, setIndex] = useState(1);
  const radioGroup = [
    { name: "BNB", img: bnblogo },
    { name: "CAKE", img: bunnyLogo },
    { name: "BUSD", img: busdlogo },
    { name: "BTCB", img: btclogo },
  ];

  const toggleTab = (i) => {
    setIndex(i);
    //console.log(i);
  };

  return (
    <div className="flex-switch">
      {radioGroup.map((button, index) => {
        return (
          <div
            className={i === index ? "cryptoBtn cryptoBtn-active" : "cryptoBtn"}
          >
            <img src={button.img} alt="" className="cryptologo" />
            <div
              key={index}
              onClick={() => {
                toggleTab(index);
                props.selectedCrypto(button);
              }}
            >
              {button.name}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
