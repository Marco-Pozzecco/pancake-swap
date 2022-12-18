import React from "react";
import "./_data-text-graph.scss";

export function DataTextGraph(props) {
  return (
    <div className="dtg-main-container">
      <div className="dtg-sub-container">
        <div className="dtg-text-style">{props.dtg_introduction}</div>
        {/* --------------- */}
        <h2 className="dtg-titles-style">{props.dtg_sub_title_a}</h2>
        <div className="dtg-text-style dtg-list-box">
          <ul>
            <li>{props.dtg_list_a}</li>
          </ul>
        </div>
        {/* --------------- */}
        <h2 className="dtg-titles-style">{props.dtg_sub_title_b}</h2>
        <div className="dtg-text-style dtg-list-box">
          <ul>
            <li>{props.dtg_list_b}</li>
          </ul>
        </div>
        {/* --------------- */}
        <h2 className="dtg-titles-style">{props.dtg_sub_title_c}</h2>
        <div className="dtg-text-style dtg-list-box">
          <ul>
            <li>{props.dtg_list_c}</li>
          </ul>
        </div>
        {/* --------------- */}
      </div>
    </div>
  );
}
