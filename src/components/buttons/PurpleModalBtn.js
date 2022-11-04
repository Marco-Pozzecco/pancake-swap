import React  from "react";

import {Button} from "./Button";

export function PurpleModalBtn (props) {

    
    
    return (
        <Button
            type={props.type}
            action={props.action}
            text="Learn How to Connect"
        />
    );
}