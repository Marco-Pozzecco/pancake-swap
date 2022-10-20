import React from "react";
import "./navbar.scss"
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div className="flex">
                <h1><Link to="/">Pancake Swap</Link></h1>
                
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
                        <li class="line-dd"><a href="Info">Leaderboard</a></li>
                        <li><a href="Info">Blog</a><i class="fa-regular fa-arrow-right-from-bracket"></i></li>
                        <li><a href="Info">Docs</a><i class="fa-regular fa-arrow-right-from-bracket"></i></li>
                    </ul>
                </li> 
                </ul>   
                <Outlet></Outlet>
            </div>
            <section class="flex">
            <div>
                <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 igZcUN"><circle cx="48" cy="48" r="48" fill="url(#paint0_linear_10493)">
                </circle><path fill-rule="evenodd" clip-rule="evenodd" d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z" fill="#633001"></path>
                <path d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z" fill="#D1884F"></path>
                <path d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z" fill="#FEDC90"></path>
                <path d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z" fill="#633001"></path><defs><linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop stop-color="#53DEE9"></stop><stop offset="1" stop-color="#1FC7D4"></stop></linearGradient></defs>
            </svg>
            </div> 
            <div id="money"><p>$4.357</p></div>
            {/* <div class="icon"><i style="font-size: 1.2rem;" class="fa-regular fa-globe"></i></div>
            <div><button data-modal-target="#modal" class="btn-gear"><i style="font-size: 1.2rem;" class="fa-regular fa-gear"></i></button></div> */}
            {/* <!-- modal popup--> */}
            {/* <div class="modal" id="modal">
                <div class="modal1 flex-switch"><h3 class="header">Settings</h3>
                <button data-close-btn class="close-btn">&times;</button></div>
                <h4>GLOBAL</h4>
                <div class="flex-switch"><p>Dark Mode</p>
                    <input type="checkbox" class="checkbox" id="chk" />
                    <label class="label" for="chk">
                        <i class="fa-regular fa-moon"></i>
                        <i class="fas fa-sun"></i>
                        <div class="ball"></div>
                    </label></div>
                <div class="flex-switch"><p>Subgraph Health Indicator</p>
                    <sub><svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 eslIYO"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></sub>
                    <input type="checkbox" class="checkbox1" id="chk1" />
                    <label class="label1" for="chk1">
                        <div class="ball1"></div>
                    </label></div>
                <div class="flex-inline"><p>Default Transaction Speed (GWEI)</p>
                    <sub><svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 eslIYO"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg></sub>
                </div>
                <section id="flex-row-inline">
                    <div class="bgtry">
                        <a href="" className="link-popup-navbar">
                            <button class="btn-modal btn-green-navbar">Standard</button>
                            <button class="btn-popup-navbar-unselected">Fast</button>
                            <button class="btn-popup-navbar-unselected">Instant</button>
                            </a>
                    </div>
                </section>
            </div> */}
            <div  id="overlay"></div>
            {/*  modal popup */}
            {/* <div>
                <button class="btn-navbar button-aquagreen">Connect Wallet</button>
            </a></div> */}
            <div><button class="btn-navbar button-aquagreen">Connect Wallet</button></div>
            </section>
       
        </nav>
    )
}

export default Navbar;