import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import { FloatingBunny } from "../../layouts/home-floating-bunny/FloatingBunny";
import { Page } from "../../components/page/Page";

export default function Home() {
    return (
        <Page>
            <FloatingBunny />
            <WinPrizes />
        </Page>
    ) 
}