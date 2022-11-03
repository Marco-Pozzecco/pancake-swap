import React from 'react'
import Subnav from '../../components/subnav/Subnav';
import "./_trade-swap.scss"; 
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Limit from '../limit/Limit';
import Liquidity from '../liquidity/Liquidity'



export function Trade(){
  return (
    <div>
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}/> 
      <h1 className='provaH1'>Trade</h1>

      {/* <Router>
        <Routes>
           <Route path='/' element={<Trade/>}>
            <Route path='/limit' element={<Limit/>}/>
            <Route path='/liquidity' element={<Liquidity/>}/>
          </Route>
          {/* <Route path='/perpetual' element={<Perpetual/>}></Route>
          <Route path='/bridge' element={<Bridge/>}></Route> 
        </Routes>
      </Router>

      <NavLink to="/limit">Limit</NavLink>
      <NavLink to="/liquidity">Liquidity</NavLink> */}



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

