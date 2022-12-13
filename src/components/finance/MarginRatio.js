import React from "react";
import { PerpetualItem } from "../container/PerpetualItem";
import bllilIcon from "../../resources/icons/bllil-icon.png";

export function MarginRatio() {

    return (
        <PerpetualItem >
            <div>
                <p id="marginRatio-title">Margin Ratio</p>
            </div>
            <div className="marginRatio-content">
                <div>
                    <div className="marginRatio-container">
                        <p className="marginIstn">Margin Ratio</p>
                        <div className="marginRatio-subcontainer">
                            <img src={bllilIcon} alt="" />
                            <p id="mrPercent">0.00%</p>
                        </div>
                    </div>
                    <div className="marginRatio-container">
                        <p className="marginIstn">Maintenance Margin</p>
                        <div className="marginRatio-subcontainer">
                            <p className="mrUSDT">0.00</p>
                            <p className="mrUSDT">USDT</p>
                        </div>
                    </div>
                    <div className="marginRatio-container">
                        <p className="marginIstn">Margin Balance</p>
                        <div className="marginRatio-subcontainer">
                            <p className="mrUSDT">0.00</p>
                            <p className="mrUSDT">USDT</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </PerpetualItem>
    )
}