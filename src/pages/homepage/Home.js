import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import Subnav from "../../components/subnav/Subnav";
import { FloatingBunny } from "../../layouts/home-floating-bunny/FloatingBunny";
import { CakeToken } from "../../layouts/home-cake-token/CakeToken";
import { HomeEarn } from "../../layouts/home-earn-section/home-earn";
import { TradeAnything } from "../../layouts/home-trade-anything/TradeAnything"
import { StartInSeconds } from "../../layouts/home-start-in-seconds/StartInSeconds";
// import { Page } from "../../components/page/Page";
// import Subnav from "../../components/subnav/Subnav";

export default function Home() {
    return (
        <>
            <Subnav
                elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}
            />
            <FloatingBunny />
            <TradeAnything />
            <HomeEarn />
            <WinPrizes />
            <CakeToken />
            <StartInSeconds />
        </>
    );
}
