import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import { EarnPools } from "../../../layouts/earn-pool/EarnPools";

export function Pools() {
  return (
    <div>
      <Subnav elements={["Farms", "Pools"]} />
      {/* <h1 className="provaH1">Pool</h1> */}

      <EarnPools />
    </div>
  );
}
