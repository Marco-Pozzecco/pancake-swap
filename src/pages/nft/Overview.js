import React from "react";
import Subnav from "../../components/subnav/Subnav";
import "./nft.scss";

export function Overview() {
    return (
        <div>
            <Subnav elements={["Overview", "Collections", "Activity"]} />
            <h1 className="provaH1">Overview</h1>
        </div>
    );
}
