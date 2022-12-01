import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import "./_tradingCompetition.scss"
import { Dalarnia } from "../../../layouts/win-tradingcomp-dalarnia/dalarnia";
import VioletSection from "../../../layouts/win-tradingcomp-violetSecion/VioletSection";

export function TradingCompetition() {
    return (
        <div class="tradingCompetitionWrapper">
            <Subnav
                elements={[
                    "Latest",
                    "Finished",
                ]}
            />
            <Dalarnia/>
            <VioletSection/>
        </div>
    );
}
