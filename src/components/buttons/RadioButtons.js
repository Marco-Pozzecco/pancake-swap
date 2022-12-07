import React, { useState } from "react";
import "./radioButtons.scss";

export function RadioButtons(props) {
  const [i, setIndex] = useState(1);

  const toggleTab = (i) => {
    setIndex(i);
    console.log(i);
  };

  return (
    <div>
      <div className="flex-switch">
        {props.radioGroup.map((button, index) => {
          return (
            <div
              key={index}
              onClick={() => toggleTab(index)}
              className={i === index ? "radioBtn radioBtn-active" : "radioBtn"}>
              {button}{" "}
            </div>
          );
        })}
      </div>
      {i === 0 && props.radioGroup[0] === "0.1%" ? <p className="messageError">Your transaction may fail</p> : <p></p>}
    </div>
  );
}
