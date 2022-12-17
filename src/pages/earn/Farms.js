import React from "react";
import Subnav from "../../components/subnav/Subnav";
import "./_earn.scss";

export function Farms() {
  return (
    <div>
      <Subnav elements={["Farms", "Pools"]} />

      <h1 className="provaH1">Farms</h1>
    </div>
  );
}
