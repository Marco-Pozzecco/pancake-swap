import React from "react";
import "./_prize-pot-card.scss";

export function PrizePotCard() {
  return (
    <section className="ppc-main-container-wrapper">
      <section className="ppc-main-container">
        <section className="ppc-sub-container">
          {/* --- HEADER --- */}
          <section className="ppc-top-header-container">
            <button>Deposit</button>
            <button>Claim</button>
          </section>

          {/* --- BODY --- */}
          <section className="ppc-body-container">
            <div className="ppcb-sub-container ppcb-sc-a">numbers</div>
            <div className="ppcb-sub-container ppcb-sc-a">footer</div>
          </section>
        </section>
      </section>
    </section>
  );
}
