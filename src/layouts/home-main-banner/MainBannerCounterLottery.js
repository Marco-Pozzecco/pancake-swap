import React, { useState } from "react";
import "./_home-main-banner.scss";
import { useCountdown } from "../../../src/hooks/useCountdown";

//INIZIO VECCHIO--------------------------------------------------------

export function MainBannerCounterLottery({ days, hours, minutes, seconds }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="mb-counter-lottery">
      <span></span>

      <h2 className="mbcl-item mbcli-number" id="">
        AAAAAAAAAA
      </h2>
    </div>
  );
}

// METTERE LE PROPS!!!!  https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks#heading-the-countdown-app
