import React from "react";
import "./_how-to-play-card.scss";

export function HowToPlayCard(props) {
  return (
    <div className="htp-card">
      <div className="htp-sub-card">
        <div className="htpsc-step">{props.htpsc_step}</div>
        <h2 className="htpsc-title">{props.htpsc_title}</h2>
        <div className="htpsc-text">{props.htpsc_text}</div>
      </div>
    </div>
  );
}
