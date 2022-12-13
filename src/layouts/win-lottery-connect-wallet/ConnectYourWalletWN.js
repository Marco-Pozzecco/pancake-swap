import React from "react";
import { Button } from "../../components/buttons/Button";
import "./_connect-your-wallet-wn.scss";

export function ConnectYourWalletWN() {
  return (
    <div className="cywwn-main-container">
      <div className="cywwn-sub-container">
        <div className="cywwn-content-container">
          <div className="cywwn-content cywwnc-a">
            <img src="	https://pancakeswap.finance/images/lottery/ticket-l.png" />
          </div>
          {/* ----------------------------- */}
          <div className="cywwn-content cywwnc-b">
            <h2 className="cywwnc-b-title1">Connect your wallet</h2>
            <h2 className="cywwnc-b-title2"> to check if you've won!</h2>
            <Button
              text="Connect Wallet"
              type={"fullButton"}
              style={{
                color: "var(--background-primary)",
                padding: "15px 30px",
              }}
            />
          </div>
          {/* ----------------------------- */}
          <div className="cywwn-content cywwnc-c">
            <img src="	https://pancakeswap.finance/images/lottery/ticket-r.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
