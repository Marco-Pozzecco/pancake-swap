import React from "react";
import Subnav from "../../../components/subnav/Subnav";

export function Lottery() {
  return (
    <div>
      <Subnav
        elements={["Trading", "Prediction (BETA)", "Lottery", "Pottery (BETA)"]}
      />

      <h1 className="provaH1">Lottery</h1>
    </div>
  );
}
