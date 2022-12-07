import React from "react";
import { RadioButtons } from "../buttons/RadioButtons";
import { GeneralCheckBox } from "../checkbox/GeneralCheckBox";
import { ToggleTheme } from "../toggle/ToggleTheme";
import "./modalSettingSwap.scss";

export function ModalSettingSwap({ open, onClose }) {
  if (!open) return null;

  return (
    <section>
      <div
        className="modalSwap"
        id="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="modalSwap1 flex-switch">
          <h3 className="header">Settings</h3>
          <button data-close-btn className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <h4>SWAPS & LIQUIDITY</h4>
        <div className="flex-switch">
          <p className="parag">Default Transaction Speed (GWEI)</p>
        </div>
        <div className="flex-switch">
          <RadioButtons radioGroup={["RPC Default", "Standard(5)", "Fast(6)", "Istant(7)"]} />
        </div>
        <div className="flex-switch">
          <p className="parag">Slippage Tolerance</p>
        </div>
        <div className="flex-switch">
          <RadioButtons radioGroup={["0.1%", "0.5%", "1%"]} />
        </div>

        <div className="flex-switch">
          <p className="parag">Zap (Beta)</p>
          <GeneralCheckBox className="check4" id="check4" for="check4" />
        </div>
        <div className="flex-switch">
          <p className="parag">Expert Mode</p>
          <GeneralCheckBox className="check5" id="check5" for="check5" />
        </div>
        <div className="flex-switch">
          <p className="parag">Disable Multihops</p>
          <GeneralCheckBox className="check6" id="check6" for="check6" />
        </div>
        <div className="flex-switch">
          <p className="parag">Flippy sounds</p>
          <GeneralCheckBox className="check7" id="check7" for="check7" />
        </div>
      </div>
    </section>
  );
}
