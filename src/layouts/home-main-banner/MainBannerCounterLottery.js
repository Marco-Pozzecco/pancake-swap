import React, { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import "./_home-main-banner.scss";

export function MainBannerCounterLottery({ days, hours, minutes, seconds }) {
  return (
    //   COUNTER Lottery
    <div class="mb-counter-lottery">
      {<h2 class="mbcl-item mbcli-number" value={days}></h2>}
      <h2 class="mbcl-item mbcli-time">d</h2>
      <h2 class="mbcl-item mbcli-number" value={hours}></h2>
      <h2 class="mbcl-item mbcli-time">h</h2>
      <h2 class="mbcl-item mbcli-number" value={minutes}></h2>
      <h2 class="mbcl-item mbcli-time">m</h2>
      <h2 class="mbcl-item mbcli-number" value={seconds}></h2>
      <h2 class="mbcl-item mbcli-time">s</h2>
    </div>
  );
}

// METTERE LE PROPS!!!!  https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks#heading-the-countdown-app
