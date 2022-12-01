import React from "react";
import { PerpetualItem } from "../container/PerpetualItem";
// Icons
import { BiCaretDown, BiSliderAlt } from "react-icons/bi";

export function FinancialIntrumentSelector() {

    return (
        <PerpetualItem >
            <div className="fis-bar">
                <div className="fis-menu">
                    {/* Seletctor */}
                    <div className="instrument-selector">
                        <h1>Coin name</h1>
                        <BiCaretDown />
                    </div>
                    {/* Separator right-border 1px solid .. */} 

                    {/* Current price
                        Green if > close price yesterday else red
                    */}
                    <div className="current-price">
                        <h1>Current price</h1>
                    </div>
                    {/* Mark */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* Index */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* Funding/Countdown */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* 24h change absolute relative */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* 24h high */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* 24h Low */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* 24h Volume(coin) */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                    {/* 24h Volume(vs_currency) */}
                    <div className="mark stat">
                        <p className="perpetual-text-subtle">Mark</p>
                        <p>value</p>
                    </div>
                </div>
                <div className="fis-settings">
                    {/* settings icon */}
                    <BiSliderAlt />
                </div>
            </div>
        </PerpetualItem>
    )
}