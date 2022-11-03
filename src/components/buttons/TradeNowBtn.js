import React from "react";
import {Button} from "./Button";

export function TradeNowBtn() {
    function openTradeNow() {}

    return <Button type="fullButton" action={openTradeNow} text="Trade Now" />;
}
