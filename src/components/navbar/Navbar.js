import React, {useState} from "react";
import "./Navbar.scss"
import {Link, NavLink} from 'react-router-dom'
import settingSvg from "../../resources/home/navbar/setting-icon.svg"
import logo from "../../resources/home/navbar/logo_black.svg"
import {HpModalSettings} from "../modal/HpModalSettings";
import bunnyRound from '../../resources/home/navbar/bunny-icon-round.svg'
import logoBunny from '../../resources/home/navbar/bunny-logo.svg'
import exitIcon from '../../resources/home/cake/exit-icon.svg'
import bnbIcon from '../../resources/home/navbar/bnb.png'
import arrow from '../../resources/home/navbar/arrow-down.svg'
import {LanguageSelector} from "../language-selector/LanguageSelector";


export function Navbar() {

    const [openModal, setOpenModal] = useState(false)
   
    return(
       <div>
         <nav>
            <div className="flex">
                <Link  to="/" ><img src={logo} alt="main-logo" id="main-logo"></img></Link>
                <Link to="/"><img src={logoBunny} alt="logo bunny" className="logoBunny"></img></Link>
                <ul className="menu-ul menu-nav">
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                <li><NavLink activeStyle={{color: "red"}} to="/trade">Trade</NavLink>
                    <ul>
                        <li><a href="swap" >Swap</a></li>
                        <li><a href="limit" >Limit</a></li>
                        <li><a href="liquidity" >Liquidity</a></li>
                        <li><a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target='blank'>Perpetual</a><img src={exitIcon} alt="exit icon"/></li>
                        <li><a href="https://bridge.pancakeswap.finance/" target='blank'>Bridge</a><img src={exitIcon} alt="exit icon"/></li>
                    </ul>
                </li>
                <li><NavLink activeClassName="active-link" to="/earn">Earn</NavLink>
                    <ul>
                        <li><a href="farms.html">Farms</a></li>
                        <li><a href="pool.html">Pool</a></li>
                    </ul>
                </li>  
                   
                <li><NavLink activeClassName="active-link" to="/win">Win</NavLink>  
                    <ul>
                        <li><a href="Trading Competition" >Trading Competition</a></li>
                        <li><a href="Prediction">Prediction (Beta)</a></li>
                        <li><a href="Lottery">Lottery</a></li>
                        <li><a href="Pottery">Pottery (Beta)</a></li>
                    </ul>
                </li>  
                <li><NavLink to="/win">NTF</NavLink>
                    <ul>
                        <li><a href="Overview">Overview</a></li>
                        <li><a href="Collection">Collection</a></li>
                        <li><a href="Activity">Activity</a></li>
                    </ul>
                </li>   
                <li><NavLink to="/win">...</NavLink>
                    <ul>
                    <li><a href="Info">Info</a></li>
                        <li><a href="Info">IFO</a></li>
                        <li><a href="Info">Voting</a></li> 
                        <li className="line-dd"><a href="Info">Leaderboard</a></li>
                        <li><a href="https://medium.com/pancakeswap" target='blank'>Blog</a><img src={exitIcon} alt="exit icon" ></img></li>
                        <li><a href="https://docs.pancakeswap.finance" target='blank'>Docs</a><img src={exitIcon} alt="exit icon" ></img></li>
                    </ul>
                </li> 
                </ul>   
                
            </div>
            <section className="flex">
                <div>
                <img src={bunnyRound} alt="mini logo" id="hover" className="mini-logo"></img>
                </div> 
                <div id="money"><p>$4.357</p></div>
                <LanguageSelector/>
                <img className="fa-svg-icon" src={settingSvg} alt="setting icon" onClick={() => setOpenModal(true)}></img>
            
                {/* <div  id="overlay"></div> */}
                <div>
                    <span className="link-popup-navbar">
                    <button className="button-navbar-bnb"><img className="fa-svg-icon" 
                    src={bnbIcon} alt="setting icon"/>BNB Smart Chain<img className="fa-svg-icon" 
                    src={arrow} alt="arrow icon"/></button></span>
                </div>
                <div>
                    <span className="link-aquagreen"><button className="btn-navbar button-aquagreen">Connect Wallet</button></span>
                </div>
            </section>
           
        </nav>
         <HpModalSettings open={openModal} onClose={() => setOpenModal(false)}/>
       </div>
    )
}

