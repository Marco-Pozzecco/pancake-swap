import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "./Button";

export function ConnectWalletBtn (props) {
        
    function openConnectWalletModal() {

    }
    
    return (
        <Button
            type={props.type}
            action={openConnectWalletModal}
            text="Connect Wallet"
        />
    );
}






