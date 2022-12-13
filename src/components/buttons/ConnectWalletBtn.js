import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function ConnectWalletBtn(props) {
  return (
    <Button type={props.type} action={props.action} text="Connect Wallet" />
  );
}
