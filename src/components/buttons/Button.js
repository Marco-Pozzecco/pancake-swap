import "./_buttons.scss";
import React, {useState} from "react";

export function Button(props) {
    return (
        <button
            className={"generalButtonRules " + props.type} // 
            onClick={props.action}
            style={props.style}>
            
            {props.text && props.text}
            {props.svg && typeof(props.svg) === "string" ? <img src={props.svg} /> : props.svg } 
            {props.children}
            
        </button>
    );
}
