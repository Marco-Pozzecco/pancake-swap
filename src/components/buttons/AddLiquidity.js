import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function AddLiquidityBtn(props) {
  const myStyle = {
    color: "black",
  };

  return <Button svg={props.svg} type={props.type} action={props.action} text="Add Liquidity" style={myStyle} />;
}
