import React from "react";
import {WinPrizes} from "../../layouts/home-win-prizes/WinPrizes";
import Subnav from "../../components/subnav/Subnav";
import {FloatingBunny} from "../../layouts/home-floating-bunny/FloatingBunny";
import {CakeToken} from "../../layouts/home-cake-token/CakeToken";
import { MainBanner } from "../../layouts/home-main-banner/MainBanner";

// import { Page } from "../../components/page/Page";
// import Subnav from "../../components/subnav/Subnav";

export default function Home() {
    return (
        <>
            <Subnav
                elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}
            />
            <FloatingBunny />
            <CakeToken />
            <WinPrizes />
        </>
    );
}
