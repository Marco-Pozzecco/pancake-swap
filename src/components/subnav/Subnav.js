import React from "react";
import {NavLink} from "react-router-dom";
import "./subnav.scss";
import exitIcon from "../../resources/home/cake/exit-icon.svg";

export default function Subnav(props) {
    return (
        <div className="subnav">
            <ul className="menu-ul">
                {props.elements.map((element) => {
                    return (
                        <li>
                            <NavLink>
                                <a href={element.toLowerCase()}>{element}</a>
                                {(element === "Perpetual" ||
                                    element === "Bridge") && (
                                    <img src={exitIcon} alt="exit icon" />
                                )}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            {/* <ul className='menu-ul'>
        <li><NavLink><a href="swap" >Swap</a></NavLink></li>
        <li><NavLink><a href="limit">Limit</a></NavLink></li>
        <li><NavLink><a href="liquidity" >Liquidity</a></NavLink></li>
        <li><NavLink><a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target='blank'>Perpetual</a><img src={exitIcon} 
        alt="exit icon"/></NavLink></li>
        <li><NavLink><a href="https://bridge.pancakeswap.finance/" target='blank'>Bridge</a><img src={exitIcon} alt="exit icon"/></NavLink></li>
      </ul> */}
        </div>
    );
}
