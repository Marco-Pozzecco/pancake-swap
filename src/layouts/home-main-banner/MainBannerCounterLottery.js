import React, { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import "./_home-main-banner.scss";

export function MainBannerCounterLottery({ days, hours, minutes, seconds }) {
  return (
    //   COUNTER Lottery
    <div class="mb-counter-lottery">
      {useCountdown.days ? (
        <h2 class="mbcl-item mbcli-number">{useCountdown[days]}</h2>
      ) : (
        ""
      )}
      {useCountdown.days ? <h2 class="mbcl-item mbcli-time">d</h2> : ""}
      {/* -------------       */}
      {useCountdown.hours ? (
        <h2 class="mbcl-item mbcli-number">{useCountdown[hours]}</h2>
      ) : (
        ""
      )}
      {useCountdown.hours ? <h2 class="mbcl-item mbcli-time">h</h2> : ""}
      {/* -------------       */}
      {useCountdown.minutes ? (
        <h2 class="mbcl-item mbcli-number">{useCountdown[minutes]}</h2>
      ) : (
        ""
      )}
      {useCountdown.minutes ? <h2 class="mbcl-item mbcli-time">m</h2> : ""}
      {/* -------------       */}
      {useCountdown.seconds ? (
        <h2 class="mbcl-item mbcli-number">{useCountdown[seconds]}</h2>
      ) : (
        ""
      )}
      {/* {useCountdown.seconds ? <h2 class="mbcl-item mbcli-time">s</h2> : ""}
      {useCountdown.days &
      useCountdown.hours &
      useCountdown.minutes &
      useCountdown.seconds ? (
        useCountdown.days &
        useCountdown.hours &
        useCountdown.minutes &
        useCountdown.seconds
      ) : (
        <h2 class="mbcl-item mbcli-number">End of the Event!</h2>
      )} */}
    </div>
  );
}

// METTERE LE PROPS!!!!  https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks#heading-the-countdown-app
