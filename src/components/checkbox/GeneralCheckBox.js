import React from "react";
import "./general_Checkbox.scss";

export function GeneralCheckBox(props) {
  return (
    <div>
      <div>
        <input type="checkbox" className={props.className} id={props.id} />
        <label className="label" for={props.for}>
          <div className="ball circle-toggle"></div>
        </label>
      </div>
    </div>
  );
}
