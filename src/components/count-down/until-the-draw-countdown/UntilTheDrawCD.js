import React, { useEffect, useState } from "react";
import "./_until-the-draw-cd.scss";

export function UntilTheDrawCD({ deadline, ...props }) {
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
    <div className="utd-cd-main-container">
      <div className="utd-cd-box">
        <div class="utd-counter">
          <h2 class="utd-cd-item utd-cd-number">{leading0(days)}</h2>
          <h2 class="utd-cd-item utd-cd-time">d</h2>
          <h2 class="utd-cd-item utd-cd-number">{leading0(hours)}</h2>
          <h2 class="utd-cd-item utd-cd-time">h</h2>
          <h2 class="utd-cd-item utd-cd-number">{leading0(minutes)}</h2>
          <h2 class="utd-cd-item utd-cd-time">m</h2>
          <h2 class="utd-cd-item utd-cd-number">{leading0(seconds)}</h2>
          <h2 class="utd-cd-item utd-cd-time">s</h2>
        </div>
      </div>
      <div className="utd-cd-text">until the next draw</div>
    </div>
  );
}
