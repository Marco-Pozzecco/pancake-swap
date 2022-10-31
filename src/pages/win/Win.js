import React from "react";
import Subnav from "../../components/subnav/Subnav";

export function Win() {
    return (
        <div>
            <Subnav
                elements={[
                    "Trading Competition",
                    "Prediction (BETA)",
                    "Lottery",
                    "Pottery (BETA)",
                ]}
            />
            <h1>Win</h1>
        </div>
    );
}
