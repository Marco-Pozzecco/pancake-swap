import React from "react";
import {NavLink} from "react-router-dom";
import "./subnav.scss";
import exitIcon from "../../resources/home/cake/exit-icon.svg";

export default function Subnav(props) {
  return (
    <div className='subnav'>
      <ul className='menu-ul'>
        {props.elements.map((element,index)=> {
            return <li key={index}><NavLink><a href={element.toLowerCase()}>{element}</a>
            {(element === 'Perpetual' || element === 'Bridge') && <img src={exitIcon} alt="exit icon"/>}
            </NavLink></li>
        })}
      </ul>


    </div>
  );
}
