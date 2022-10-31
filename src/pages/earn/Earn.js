import React from "react";
import Subnav from "../../components/subnav/Subnav";
import "./_earn.scss";

export function Earn() {
    return (
        <div>
            <Subnav elements={["Farms", "Pools"]} />
            <h1 className="provaH2">Earn</h1>
        </div>
    );
}
