import React from "react";
import {WinPrizes} from "../../layouts/home-win-prizes/WinPrizes";
import {FloatingBunny} from "../../layouts/home-floating-bunny/FloatingBunny";

export default function Home() {
    return (
        <div>
            <FloatingBunny />
            <WinPrizes />
        </div>
    );
}
