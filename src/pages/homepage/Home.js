import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import { UsedBy } from "../../components/used-by-millions/UsedBy";
import { FloatingBunny } from "../../layouts/home-floating-bunny/FloatingBunny";
import { CakeToken } from "../../layouts/home-cake-token/CakeToken";
import { HomeEarn } from "../../layouts/home-earn-section/home-earn";
import { TradeAnything } from "../../layouts/home-trade-anything/TradeAnything"
import { StartInSeconds } from "../../layouts/home-start-in-seconds/StartInSeconds";

// import { Page } from "../../components/page/Page";


export default function Home() {
    return (
        <>
            <FloatingBunny />
            {/* <UsedBy /> */}
            <TradeAnything />
            <HomeEarn />
            <WinPrizes />
            <CakeToken />
            <StartInSeconds />
        </>
    );
}
