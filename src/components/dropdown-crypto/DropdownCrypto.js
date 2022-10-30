import React, {useState} from 'react'
import { DropdownMenu } from '../dropdown-menu/DropdownMenu'
import bnbIcon from "../../resources/home/navbar/bnb.png";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import './dropdown-crypto.scss'

export default function DropdownCrypto({ selected, setSelected}) {
  
    const [openDropdown, setDropdown] = useState(false)
    //const [isActive, setIsActive] = useState(false)
    const options = ['BNB Smart Chain' , 'Ethereum', 'Aptos']
    //if(!open) return null

  return (
    <div>
      <span className="link-popup-navbar">
      <button className="button-navbar-bnb"
        onMouseOver={() => {setDropdown(true)}}
        > 
        <img className="fa-svg-icon" src={bnbIcon} alt="setting icon"></img>
        BNB Smart Chain
        <img className="fa-svg-icon" src={arrow} alt="arrow icon"/>
      </button>
    </span>
    
      <div className="menu-ul menu-nav dropdown">
        <DropdownMenu open={openDropdown} elements={options}/>
        
      </div>
    </div>

    // onMouseOut={() => {setDropdown(false)}}
  )
}


