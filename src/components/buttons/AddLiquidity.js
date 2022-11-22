import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function AddLiquidityBtn(props) {
  return <Button svg={props.svg} type={props.type} action={props.action} text="Add Liquidity" />;
}
