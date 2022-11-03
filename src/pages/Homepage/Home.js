import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import { FloatingBunny } from "../../layouts/home-floating-bunny/FloatingBunny";
import { Page } from "../../components/page/Page";
import HomeEarn from "../../layouts/home-earn-section/home-earn";

export default function Home() {
    return (
        <Page>
            <FloatingBunny />
            <WinPrizes />
            <HomeEarn />
        </Page>
        
  
    ) 
}