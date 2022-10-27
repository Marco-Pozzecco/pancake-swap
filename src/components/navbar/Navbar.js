import React, {useState} from "react";
import "./navbar.scss"
import {Link} from 'react-router-dom'
import globeSvg from "../../resources/svgs/globe-icon.svg"
import settingSvg from "../../resources/svgs/setting-icon.svg"
import logo from "../../resources/svgs/logo_black.svg"
import HpModalSettings from "../modal/HpModalSettings";
import bunnyRound from '../../resources/svgs/bunny-icon-round.svg'



const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
   
    return(
       <div>
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
                {/* <Outlet></Outlet> */}
            </div>
            <section className="flex">
            <div>
            <img src={bunnyRound} alt="logo"></img>
            </div> 
            <div id="money"><p>$4.357</p></div>
            <img className="fa-svg-icon" src={globeSvg} alt="logo"></img>
            <img className="fa-svg-icon" src={settingSvg} alt="logo" onClick={() => setOpenModal(true)}></img>
           
            
            {/* <div  id="overlay"></div> */}
            


            <div><a href="#" className="link-aquagreen"><button className="btn-navbar button-aquagreen">Connect Wallet</button></a>
                </div>
            </section>
           
        </nav>
         <HpModalSettings open={openModal} onClose={() => setOpenModal(false)}/>
       </div>
    )
}

export default Navbar;