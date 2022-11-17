import React from "react";
import Subnav from "../../components/subnav/Subnav";

export function TradingCompetition() {
    return (
        <div>
            <Subnav
                elements={[
                    "Trading",
                    "Prediction (BETA)",
                    "Lottery",
                    "Pottery (BETA)",
                ]}
            />
            
            <h1 className="provaH1">trading Competition</h1>
        </div>
    );
}
