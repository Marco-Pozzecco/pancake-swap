import "./_buttons.scss";
import React, {useState} from "react";

export function Button(props) {
    return (
        <button
            className={"generalButtonRules " + props.type}
            onClick={props.action}>
            {props.text && props.text}
            {props.svg && <img src={props.svg} />}
        </button>
    );
}
