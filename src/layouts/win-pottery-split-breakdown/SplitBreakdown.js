import React from "react";
import { GreyLine } from "../../components/lines/GreyLine";
import "./_split-breakdown.scss";

export function SplitBreakdown() {
  return (
    <section className="sb-main-container">
      <div className="sb-sub-container">
        <h2 className="sb-title">Split Breakdown</h2>
        <div className="sb-data-wrapper">
          <div className="sb-data-text-wrapper">TEXT</div>
          <div className="sb-data-graph-wrapper">GRAPH</div>
        </div>
        <div className="sb-text-wrapper">
          <p>
            Since the rewards from lock-staking are only distributed at the end
            of the duration, the prize pool to be distributed in each of the 10
            weeks upon deposit is borrowed from the CAKE treasury based on the
            estimated APY. The rewards at the end of the duration from the
            deposit will be used to repay the treasury and to distribute the 20%
            staking rewards. Because the APY may change over the duration based
            on other deposits and their lock-periods in the lock CAKE pool,
            there may be a small deviance from the above percentages specified
            (+/- 10%). But, ultimately all staking rewards net of the Pottery
            fees will be returned to depositors through prize pool or rewards --
            the expected value is the same.
          </p>
        </div>
        <GreyLine />
      </div>
    </section>
  );
}
