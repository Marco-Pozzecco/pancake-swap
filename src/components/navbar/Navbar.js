import React from "react";
import "./navbar.scss"
import {Outlet, Link} from 'react-router-dom'
import globeSvg from "../../resources/svgs/globe-icon.svg"
import settingSvg from "../../resources/svgs/setting-icon.svg"
import logo from "../../resources/svgs/logo_black.svg"
import HpModalSettings from "../modal/HpModalSettings";
import bunnyRound from '../../resources/svgs/bunny-icon-round.svg'


const Navbar = () => {
   function openModal(){
    return <HpModalSettings/>

    }
    return(
        <nav>
            <div className="flex">
                <h1><Link to="/"><img src={logo} alt="logo"></img></Link></h1>
                
                <ul className="menu-ul menu-nav">
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/trade">Trade</Link>
                    <ul>
                        <li><a href="swap" >Swap</a></li>
                        <li><a href="limit" >Limit</a></li>
                        <li><a href="liquidity" >Liquidity</a></li>
                        <li><a href="perpetual" >Perpetual</a></li>
                    </ul>
                </li>
                <li><Link to="/earn">Earn</Link>
                    <ul>
                        <li><a href="farms.html">Farms</a></li>
                        <li><a href="pool.html">Pool</a></li>
                    </ul>
                </li>  
                   
                <li><Link to="/win">Win</Link>  
                    <ul>
                        <li><a href="Trading Competition" >Trading Competition</a></li>
                        <li><a href="Prediction">Prediction (Beta)</a></li>
                        <li><a href="Lottery">Lottery</a></li>
                        <li><a href="Pottery">Pottery (Beta)</a></li>
                    </ul>
                </li>  
                <li><Link to="/win">NTF</Link>
                    <ul>
                        <li><a href="Overview">Overview</a></li>
                        <li><a href="Collection">Collection</a></li>
                        <li><a href="Activity">Activity</a></li>
                    </ul>
                </li>   
                <li><Link to="/win">...</Link>
                    <ul>
                    <li><a href="Info">Info</a></li>
                        <li><a href="Info">IFO</a></li>
                        <li><a href="Info">Voting</a></li> 
                        <li className="line-dd"><a href="Info">Leaderboard</a></li>
                        <li><a href="Info">Blog</a><i className="fa-regular fa-arrow-right-from-bracket"></i></li>
                        <li><a href="Info">Docs</a><i className="fa-regular fa-arrow-right-from-bracket"></i></li>
                    </ul>
                </li> 
                </ul>   
                <Outlet></Outlet>
            </div>
            <section className="flex">
            <div>
            <img src={bunnyRound} alt="logo"></img>
              
            </div> 
            <div id="money"><p>$4.357</p></div>
            <img className="fa-svg-icon" src={globeSvg} alt="logo"></img>
            <img className="fa-svg-icon" src={settingSvg} alt="logo" onClick={openModal}></img>
            {/* <div className="icon"><i style="font-size: 1.2rem;" className="fa-regular fa-globe"></i></div>
            <div><button data-modal-target="#modal" className="btn-gear"><i style="font-size: 1.2rem;" className="fa-regular fa-gear"></i></button></div> */}
            {/* <!-- modal popup--> */}
            {/* <div className="modal" id="modal">
                <div className="modal1 flex-switch"><h3 className="header">Settings</h3>
                <button data-close-btn className="close-btn">&times;</button></div>
                <h4>GLOBAL</h4>
                <div className="flex-switch"><p>Dark Mode</p>
                    <input type="checkbox" className="checkbox" id="chk" />
                    <label className="label" for="chk">
                        <i className="fa-regular fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <div className="ball"></div>
                    </label></div>
                <div className="flex-switch"><p>Subgraph Health Indicator</p>
                    <sub><svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 eslIYO"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></sub>
                    <input type="checkbox" className="checkbox1" id="chk1" />
                    <label className="label1" for="chk1">
                        <div className="ball1"></div>
                    </label></div>
                <div className="flex-inline"><p>Default Transaction Speed (GWEI)</p>
                    <sub><svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 eslIYO"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></sub>
                </div>
                <section id="flex-row-inline">
                    <div className="bgtry">
                        <a href="" className="link-popup-navbar">
                            <button className="btn-modal btn-green-navbar">Standard</button>
                            <button className="btn-popup-navbar-unselected">Fast</button>
                            <button className="btn-popup-navbar-unselected">Instant</button>
                            </a>
                    </div>
                </section>
            </div> */}
            <div  id="overlay"></div>
            {/*  modal popup */}
            {/* <div>
                <button className="btn-navbar button-aquagreen">Connect Wallet</button>
            </a></div> */}
            <div><a href="#" className="link-aquagreen"><button className="btn-navbar button-aquagreen">Connect Wallet</button></a>
                </div>
            </section>
       
        </nav>
    )
}

export default Navbar;