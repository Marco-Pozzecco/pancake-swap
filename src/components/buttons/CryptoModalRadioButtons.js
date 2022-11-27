import React, { useState } from "react";
import "./cryptoModalradioButtons.scss";
import bnblogo from "../../resources/swap/BNB-logo.png";

export function CryptoModalRadioButtons(props) {
  const [i, setIndex] = useState(1);

  const toggleTab = (i) => {
    setIndex(i);
    console.log(i);
  };

  return (
    <div className="flex-switch">
      {props.radioGroup.map((button, index) => {
        return (
          <div className={i === index ? "cryptoBtn cryptoBtn-active" : "cryptoBtn"}>
            <img src={bnblogo} alt="" className="cryptologo" />
            <div key={index} onClick={() => toggleTab(index)}>
              {button}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
