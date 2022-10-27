import React, {useState} from "react";
import "./Navbar.scss"
import {Link} from 'react-router-dom'
import settingSvg from "../../resources/svgs/setting-icon.svg"
import logo from "../../resources/svgs/logo_black.svg"
import HpModalSettings from "../modal/HpModalSettings";
import bunnyRound from '../../resources/svgs/bunny-icon-round.svg'
import exitIcon from '../../resources/home/cake/exit-icon.svg'
import LanguageSelector from "../language-selector/LanguageSelector";



const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
   
    return(
       <div>
         <nav>
            <div className="flex">
                <h1><Link to="/"><img src={logo} alt="main-logo" id="main-logo"></img></Link></h1>
                <ul className="menu-ul menu-nav">
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/trade">Trade</Link>
                    <ul>
                        <li><a href="swap" >Swap</a></li>
                        <li><a href="limit" >Limit</a></li>
                        <li><a href="liquidity" >Liquidity</a></li>
                        <li><a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target='blank'>Perpetual</a><img src={exitIcon} alt="exit icon"/></li>
                        <li><a href="https://bridge.pancakeswap.finance/" target='blank'>Bridge</a><img src={exitIcon} alt="exit icon"/></li>
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
                        <li><a href="https://medium.com/pancakeswap" target='blank'>Blog</a><img src={exitIcon} alt="exit icon" ></img></li>
                        <li><a href="https://docs.pancakeswap.finance" target='blank'>Docs</a><img src={exitIcon} alt="exit icon" ></img></li>
                    </ul>
                </li> 
                </ul>   
                {/* <Outlet></Outlet> */}
            </div>
            <section className="flex">
            <div>
            <img src={bunnyRound} alt="mini logo" id="hover"></img>
            </div> 
            <div id="money"><p>$4.357</p></div>
            <LanguageSelector/>
            <img className="fa-svg-icon" src={settingSvg} alt="setting icon" onClick={() => setOpenModal(true)}></img>
           
            
            {/* <div  id="overlay"></div> */}
            


            <div><a href="/" className="link-aquagreen"><button className="btn-navbar button-aquagreen">Connect Wallet</button></a>
                </div>
            </section>
           
        </nav>
         <HpModalSettings open={openModal} onClose={() => setOpenModal(false)}/>
       </div>
    )
}

export default Navbar;