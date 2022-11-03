import React from "react";
import Subnav from "../../components/subnav/Subnav";
import "./nft.scss";

export function Nft() {
    return (
        <div>
            <Subnav elements={["Overview", "Collection", "Activity"]} />
            <h1>NFT</h1>
        </div>
    );
}
