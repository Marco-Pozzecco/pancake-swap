import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import FloatingBunny from "../../layouts/home-floating-bunny/FloatingBunny";
import StartInSeconds from "../../layouts/home-start-in-seconds/StartInSeconds"

export default function Home() {
    return (
        <>
            <FloatingBunny/>
            <WinPrizes />
            <StartInSeconds/>
        </>
        
        
    ) 
}