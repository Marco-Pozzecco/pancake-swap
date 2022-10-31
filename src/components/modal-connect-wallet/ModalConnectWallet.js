import React from "react";
import ".modalConnectWallet.scss";

export default function ModalConnectWallet({open, onClose}) {
    return (
        <div>
            <div class="modalHeader flex-switch">
                <h3 class="header">Connect Wallet</h3>
                <button data-close-wallet class="close-popup">
                    &times;
                </button>
            </div>
            <p>
                Start by connecting with one of the wallets below. Be sure to
                store your private keys or seed phrase securely. Never share
                them with anyone.
            </p>

            <section id="flex-row-inline">
                <div class="bgtry">
                    <span class="link-popup-navbar">
                        <button class="btn-modal btn-green-navbar">
                            Standard
                        </button>
                    </span>
                </div>
            </section>
        </div>
    );
}
