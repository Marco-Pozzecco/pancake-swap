import React, { useState } from "react";
import "./cryptoModalradioButtons.scss";
import bnblogo from "../../resources/swap/BUSD-logo.png";
import btclogo from "../../resources/swap/BTC.png";

export function CryptoModalRadioButtons(props) {
  const [i, setIndex] = useState(1);
  const radioGroup = [
    { name: "BNB", img: bnblogo },
    { name: "CAKE", img: bnblogo },
    { name: "BUSD", img: bnblogo },
    { name: "BTCB", img: btclogo },
  ];

  const toggleTab = (i) => {
    setIndex(i);
    console.log(i);
  };

  return (
    <div className="flex-switch">
      {props.radioGroup.map((button, index) => {
        return (
          <div className={i === index ? "cryptoBtn cryptoBtn-active" : "cryptoBtn"}>
            <img src={radioGroup.img} alt="" className="cryptologo" />
            <div key={index} onClick={() => toggleTab(index)}>
              {(button = radioGroup.name)}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
