import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import { EarnPools } from "../../../layouts/earn-pool/EarnPools";
import "./_pool.scss";

export function Pools() {
  return (
    <div>
      <Subnav elements={["Farms", "Pools"]} />
      <h1 className="provaH1">Syrup Pool</h1>

      <div className="pool-general pool-list pool-grid">
        <EarnPools />
      </div>
    </div>
  );
}
