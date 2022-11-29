import React from "react";
import Subnav from "../../../components/subnav/Subnav";
import { Dalarnia } from "../../../layouts/win-tradingcomp-dalarnia/dalarnia";

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
        </div>
    );
}
