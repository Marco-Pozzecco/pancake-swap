import './buttons.scss' ;
import React, {useState} from "react";


export default function Button(props) {
    
    function handleClick() {
        useEvent()
    }

    return(
        <div>
            <button className={props.className} onClick={handleClick}>
                {props.text}{props.svg}
            </button>
        </div>
    )
}







