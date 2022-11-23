import React, { useState } from "react";
import "./_home-main-banner.scss";

export function MainBannerCounterLottery() {
  return (
    <div className="mb-counter-lottery">
      <span></span>

      <h2 className="mbcl-item mbcli-number" id="counterLottery"></h2>
    </div>
  );
}
