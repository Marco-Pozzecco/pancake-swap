import React from 'react'
import Subnav from '../../components/subnav/Subnav';
import "./_trade-swap.scss"; 
import { NavLink } from 'react-router-dom';
import exitIcon from '../../resources/home/cake/exit-icon.svg'


export function Trade(){
  return (
    <div>
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}/> 
      <h1 className='provaH1'>Trade</h1>
      {/* elements={["Swap", "Limit"]} */}
      {/* <ul className='menu-ul'>
        <li><NavLink><a href="swap" >Swap</a></NavLink></li>
        <li><NavLink><a href="limit">Limit</a></NavLink></li>
        <li><NavLink><a href="liquidity" >Liquidity</a></NavLink></li>
        <li><NavLink><a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target='blank'>Perpetual</a><img src={exitIcon} 
        alt="exit icon"/></NavLink></li>
        <li><NavLink><a href="https://bridge.pancakeswap.finance/" target='blank'>Bridge</a><img src={exitIcon} alt="exit icon"/></NavLink></li>
      </ul> */}
      
      
      </div>
  )
}

