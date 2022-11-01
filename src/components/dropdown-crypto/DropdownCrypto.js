import React, {useState} from 'react'
import { DropdownMenu } from '../dropdown-menu/DropdownMenu'
import bnbIcon from "../../resources/home/navbar/bnb.png";
import aptos from "../../resources/home/navbar/aptos.png";
import Ethereum from "../../resources/home/navbar/ethereum.png";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import './dropdown-crypto.scss'

export default function DropdownCrypto() {
    const [selected, setSelected] = useState('')
    const [openDropdown, setDropdown] = useState(false)
    //const [isActive, setIsActive] = useState(false)
    const options = ['BNB Smart Chain' , 'Ethereum', 'Aptos']
    //if(!open) return null

    
  return (
    <div className="dropdown-crypto"
     onMouseEnter={() =>  {setDropdown(!openDropdown)}}
    // onMouseLeave={(e) => {setDropdown(false)}}
    >
      <span className="link-popup-navbar">
        <button className="button-navbar-bnb"
          
           > 
          <img className='fa-svg-icon' src=
          {selected === 'BNB Smart Chain' ? {bnbIcon} : selected === 'Ethereum' ? {Ethereum} : {aptos}}
           alt="setting icon"></img>
          {(selected === '') ? 'BNB Smart Chain' : selected}
          <img className="fa-svg-icon" 
          src={arrow} alt="arrow icon"/>
        </button>
      </span>
      
       {openDropdown && (
      <div className='drop-content'>
          <ul className="menu-nav" >
            <p className='dropd-header'>Select a Network</p>
            <hr className='linea-dropdown'></hr>
            {options.map((option)=> {
              return <li onClick={()=> {setSelected(option); setDropdown(false)}}>
                    <img src={Ethereum} alt=''/>
                      {option}
                      </li>})}
          </ul>
        </div>)} 

        {/* onmouseout={(e) => {setDropdown(false)}} */}
        {/* {openDropdown && (
      <div className='drop-content'>
          <ul className="menu-nav" >
            {options.map((option)=> {
              return <li onClick={(e)=> {setSelected(option, e); setDropdown(false)}}>
                      {option}
                      </li>})}
          </ul>
        </div>)} */}
        
    </div>
    
  )
}


