import React, { useEffect, useState } from "react";
import "./_until-the-draw-cd.scss";
import moment from "moment";

export function UntilTheDrawCD(props) {
  const [secondi, setSecondi] = useState([]);
  const [minuti, setMinuti] = useState([]);
  const [ore, setOre] = useState([]);
  const [giorni, setGiorni] = useState([]);

  useEffect(() => {
    window.setInterval(() => {
      const date = moment("31/12/2022 14:42:00", "DD/MM/YYYY HH:mm:ss");
      const diff = date.diff(moment(), "seconds");

      const days = Math.floor(diff / 24 / 60 / 60);

      const hours = Math.floor((diff / (60 * 60)) % 24);

      const minutes = Math.floor((diff / 60) % 60);

      const seconds = Math.floor(diff % 60);
      // -------------------------------------------------------------------------------------------

      setSecondi(seconds);
      setMinuti(minutes);
      setGiorni(days);
      setOre(hours);
    });
  });

  return (
    <div className="utd-cd-main-container">
      <div className="utd-cd-box">
        <div className="utd-counter">
          <h2 className="utd-cd-item utd-cd-number">
            {giorni.toString().padStart(2, "0")}
          </h2>
          <h2 className={"utd-cd-item utd-cd-time" + props.utd_cd_color_items}>
            d
          </h2>
          <h2
            className={"utd-cd-item utd-cd-number" + props.utd_cd_color_items}
          >
            {ore.toString().padStart(2, "0")}
          </h2>
          <h2 className={"utd-cd-item utd-cd-time" + props.utd_cd_color_items}>
            h
          </h2>
          <h2
            className={"utd-cd-item utd-cd-number" + props.utd_cd_color_items}
          >
            {minuti.toString().padStart(2, "0")}
          </h2>
          <h2 className={"utd-cd-item utd-cd-time" + props.utd_cd_color_items}>
            m
          </h2>
          <h2
            className={"utd-cd-item utd-cd-number" + props.utd_cd_color_items}
          >
            {secondi.toString().padStart(2, "0")}
          </h2>
          <h2 className={"utd-cd-item utd-cd-time" + props.utd_cd_color_items}>
            s
          </h2>
        </div>
      </div>
      <div className="utd-cd-text">until the next draw</div>
    </div>
  );
}
