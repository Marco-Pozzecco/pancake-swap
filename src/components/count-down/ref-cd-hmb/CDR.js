import "../../../layouts/home-main-banner/_home-main-banner.scss";

import moment from "moment";
import { useEffect, useState } from "react";

export function CDR() {
  const [secondi, setSecondi] = useState([]);
  const [minuti, setMinuti] = useState([]);
  const [ore, setOre] = useState([]);
  const [giorni, setGiorni] = useState([]);

  useEffect(() => {
    window.setInterval(() => {
      const date = moment("31/12/2022 00:00:00", "DD/MM/YYYY HH:mm:ss");
      const diff = date.diff(moment(), "seconds");
      const hours = Math.floor(diff / 60 / 60);
      const minutes = Math.floor((diff - hours * 60 * 60) / 60);
      const seconds = Math.floor(diff - hours * 60 * 60 - minutes * 60);
      const hours2 = Math.floor(hours / 24);
      const days = Math.floor(diff / 24 / 60 / 60);

      setSecondi(seconds);
      setMinuti(minutes);
      setOre(hours2);
      setGiorni(days);
    });
  });

  return (
    //   COUNTER Lottery
    <div class="mb-counter-lottery">
      <h2 class="mbcl-item mbcli-number">
        {giorni.toString().padStart(2, "0")}
      </h2>
      <h2 class="mbcl-item mbcli-time">d</h2>
      <h2 class="mbcl-item mbcli-number">{ore.toString().padStart(2, "0")}</h2>
      <h2 class="mbcl-item mbcli-time">h</h2>
      <h2 class="mbcl-item mbcli-number">
        {minuti.toString().padStart(2, "0")}
      </h2>
      <h2 class="mbcl-item mbcli-time">m</h2>
      <h2 class="mbcl-item mbcli-number">
        {secondi.toString().padStart(2, "0")}
      </h2>
      <h2 class="mbcl-item mbcli-time">s</h2>
    </div>
  );
}
