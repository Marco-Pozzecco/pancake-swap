import React from "react";
import "./_filter-toggle.scss";

export function FilterToggle(props) {
  return (
    <div className="filter-toggle-main-container">
      <button className="ft-buttons ft-button-a">
        {props.filter_toggle_general_Title_a}
      </button>
      <button className="ft-buttons ft-button-b">
        {props.filter_toggle_general_Title_a}
      </button>
    </div>
  );
}
