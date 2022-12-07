import React, { useState } from "react";
import { ConnectWalletBtn } from "../buttons/ConnectWalletBtn";
import ModalConnectWallet from "../modal-connect-wallet/ModalConnectWallet";

import "./modal_history.scss";

export function ModalHistorySwap({ open, onClose }) {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  if (!open) return null;

  return (
    <section>
      <div
        className="modalExtBox"
        id="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="modalHistory flex-switch">
          <h3 className="header">Recent Transactions</h3>
          <button data-close-btn className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="flex-switch">
          <ConnectWalletBtn
            type="fullButton button-aqg"
            action={() => {
              setOpenModalWallet(true);
            }}
          />
        </div>
      </div>
      {/* <div
        className={
          openModalWallet === true && (document.body.style.overflow = "hidden") ? "overlay overlay-active" : "overlay"
        }
        onClick={() => {
          setOpenModalWallet(false);
          document.body.style.overflow = "unset";
        }}></div> */}
      (
      <ModalConnectWallet
        open={openModalWallet}
        onClose={() => {
          setOpenModalWallet(false);
          document.body.style.overflow = "unset";
        }}
      />
      )
    </section>
  );
}
