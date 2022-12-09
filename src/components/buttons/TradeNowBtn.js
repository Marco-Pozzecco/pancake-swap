import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function TradeNowBtn() {
  const navigate = useNavigate();

  function openTradeNow() {
    navigate("trade");
  }

  return (
    <Button type="onlyBorderButton" action={openTradeNow} text="Trade Now" />
  );
}
