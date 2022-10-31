import "./_buttons.scss";
import React, {useState} from "react";

export default function Button(props) {
    function handleClick() {
        useEvent();
    }

    return (
        <div>
            <button className={props.style} onClick={handleClick}>
                {props.text && props.text}
                {props.svg && props.svg}
            </button>
        </div>
    );
}
