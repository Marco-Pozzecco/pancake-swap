import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import FloatingBunny from "../../layouts/home-floating-bunny/FloatingBunny";
import StartInSeconds from "../../layouts/home-start-in-seconds/StartInSeconds"
import TradeAnything from "../../layouts/home-trade-anything/TradeAnything"

export default function Home() {
    return (
        <>
            <FloatingBunny/>
            <TradeAnything/>
            <WinPrizes />
            <StartInSeconds/>
        </>
        
        
    ) 
}