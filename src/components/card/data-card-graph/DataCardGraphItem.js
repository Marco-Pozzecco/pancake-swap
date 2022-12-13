import React from "react";
import "./_data-card-graph-item.scss";

export function DataCardGraphItem(props) {
  return (
    <div className="dcgib-item">
      <div className="dcgib-sub-item-a">
        {/* --CIRCLE-- */}
        <div className="dcgib-spot dcgib-s-1"></div>
        <div className="dcgib-text">{props.dcg_data_name_1}</div>
        {/* --- */}
      </div>
      <div className="dcgib-sub-item-b">{props.dcg_data_percentage_1}</div>
    </div>
  );
}
