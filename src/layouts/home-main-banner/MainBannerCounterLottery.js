import React, { useEffect, useState } from "react";
import "./_home-main-banner.scss";

export function MainBannerCounterLottery({ deadline }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor(time / (1000 * 60 * 60)) % 24);
      setMinutes(Math.floor(time / 1000 / 60) % 60);
      setSeconds(Math.floor(time / 1000) % 60);
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    //   COUNTER Lottery
    <div class="mb-counter-lottery">
      <h2 class="mbcl-item mbcli-number">{leading0(days)}</h2>
      <h2 class="mbcl-item mbcli-time">d</h2>
      <h2 class="mbcl-item mbcli-number">{leading0(hours)}</h2>
      <h2 class="mbcl-item mbcli-time">h</h2>
      <h2 class="mbcl-item mbcli-number">{leading0(minutes)}</h2>
      <h2 class="mbcl-item mbcli-time">m</h2>
      <h2 class="mbcl-item mbcli-number">{leading0(seconds)}</h2>
      <h2 class="mbcl-item mbcli-time">s</h2>
    </div>
  );
}

// METTERE LE PROPS!!!!  https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks#heading-the-countdown-app
//--------------------------------------------
//CODE SANS BOX  questo è meglio, sono riuscito
//https://codesandbox.io/s/countdown-timer-forked-hooks-version-forked-1hiiru?file=/src/Clock.js
