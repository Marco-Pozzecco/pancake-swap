import React from "react";
import { useHref, useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
import {Button} from "./Button";

export function LearnBtn() {
    function handleClick() {
        window.location.assign("https://docs.pancakeswap.finance/");
    }

    return <Button type="noBorderButton" text="Learn" action={handleClick} />;
}
