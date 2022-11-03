import React, {useState} from "react";
import {DropdownMenu} from "../dropdown-menu/DropdownMenu";
import bnbIcon from "../../resources/home/navbar/bnb.png";
import aptos from "../../resources/home/navbar/aptos.png";
import Ethereum from "../../resources/home/navbar/ethereum.png";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import "./dropdown-crypto.scss";

export default function DropdownCrypto() {
    const options = [
        {
            name: "BNB Smart Chain",
            img: (
                <img className="fa-svg-icon" src={bnbIcon} alt="bnb icon"></img>
            ),
        },
        {
            name: "Ethereum",
            img: (
                <img
                    className="fa-svg-icon"
                    src={Ethereum}
                    alt="ethereum icon"></img>
            ),
        },
        {
            name: "Aptos",
            img: (
                <img className="fa-svg-icon" src={aptos} alt="aptos icon"></img>
            ),
        },
    ];

    const [selected, setSelected] = useState({...options[1]});
    const [openDropdown, setDropdown] = useState(false);

    return (
        <div
            className="dropdown-crypto"
            onMouseEnter={() => {
                setDropdown(!openDropdown);
            }}
            onMouseLeave={() => {
                setDropdown(false);
            }}>
            <span className="link-popup-navbar">
                <button className="button-navbar-bnb">
                    {selected.img}
                    {selected.name}
                    <img className="fa-svg-icon" src={arrow} alt="arrow icon" />
                </button>
            </span>

            {openDropdown && (
                <div className="drop-content">
                    <ul className="menu-nav">
                        <p className="dropd-header">Select a Network</p>
                        <hr className="linea-dropdown"></hr>
                        {options.map((option) => {
                            return (
                                <li
                                    onClick={() => {
                                        setSelected(option);
                                        setDropdown(false);
                                    }}>
                                    {option.img} {option.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
