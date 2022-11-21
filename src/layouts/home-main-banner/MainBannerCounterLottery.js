import React, { useState } from "react";
import "./_home-main-banner.scss";

//INIZIO VECCHIO--------------------------------------------------------

export function MainBannerCounterLottery() {
  // let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

  // let x = setInterval(function () {
  //   let now = new Date().getTime();

  //   let distance = countDownDate - now;

  //   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   document.getElementById("counterLottery").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("counterLottery").innerHTML = "EXPIRED";
  //   }
  // }, 1000);

  // FINE VECCHIO-----------------------------------------------------------------------------

  return (
    <div className="mb-counter-lottery">
      <span></span>

      <h2 className="mbcl-item mbcli-number" id="">
        AAAAAAAAAA
      </h2>
    </div>
  );
}
