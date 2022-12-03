import React, { useState } from "react";
import "./timeFrameRadioBtn.scss";

export function TimeFrameRadioBtn(props) {
  const [i, setIndex] = useState(0);

  const toggleTab = (i) => {
    setIndex(i);
    console.log(i);
  };

  return (
    <div className="flex-switch timeFrameBox">
      {props.radioGroup.map((button, index) => {
        return (
          <div className={i === index ? "timeFRBtn timeFRBtn-active" : "timeFRBtn"}>
            <div key={index} onClick={() => toggleTab(index)}>
              {/* index={index} */}
              {button}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
