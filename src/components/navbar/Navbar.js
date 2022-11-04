import React, {useState} from "react";
import "./Navbar.scss";
import {Link, NavLink} from "react-router-dom";
import settingSvg from "../../resources/home/navbar/setting-icon.svg";
import logo from "../../resources/home/navbar/logo_black.svg";
import logoWhite from "../../resources/home/navbar/logo_white.svg";
import {HpModalSettings} from "../modal/HpModalSettings";
import bunnyRound from "../../resources/home/navbar/bunny-icon-round.svg";
import logoBunny from "../../resources/home/navbar/bunny-logo.svg";
import exitIcon from "../../resources/home/cake/exit-icon.svg";
import {LanguageSelector} from "../language-selector/LanguageSelector";
import DropdownCrypto from "../dropdown-crypto/DropdownCrypto";
import ModalConnectWallet from "../modal-connect-wallet/ModalConnectWallet";
import Logo from '../logo/Logo.js'


export function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWallet, setOpenModalWallet] = useState(false);

    const themeClass = document.body.className
    

    return (
        <div>
            <nav>
               <div className="extern-box">
               <div className="flex">
                    <Link to="/">
                        
                        {/* {themeClass === 'theme-dark' &&  <Logo src={logoWhite}/>}
                        {themeClass === 'theme-light' &&  <Logo src={logo}/>} */}
                         <img src={logoWhite} alt="main-logo" id="main-logo" 
                         className={themeClass === 'theme-dark' ? 'logo-active' : 'logo'}></img>

                         <img src={logo} alt="main-logo" id="main-logo" 
                         className={themeClass === 'theme-light' ? 'logo-active' : 'logo'}></img>
                       
                    </Link>
                    <Link to="/">
                        <img
                            src={logoBunny}
                            alt="logo bunny"
                            className="logoBunny"></img>
                    </Link>
                    <ul className="menu-ul menu-nav menu-nav-ul">
                        {/* <li><NavLink to="/">Home</NavLink></li> */}
                        <li>
                            <NavLink to="/trade">Trade</NavLink>
                            <ul>
                                <li>
                                    <Link to="/swap">Swap</Link>
                                </li>
                                <li>
                                    <NavLink to="/limit">Limit</NavLink>  
                                </li>
                                <li>
                                    <Link to="/liquidity">Liquidity</Link>   
                                </li>
                                <li>
                                    <a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light"
                                        target="blank">
                                        Perpetual
                                    </a>
                                    <img src={exitIcon} alt="exit icon" />
                                </li>
                                <li>
                                    <a
                                        href="https://bridge.pancakeswap.finance/"
                                        target="blank">
                                        Bridge
                                    </a>
                                    <img src={exitIcon} alt="exit icon" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/earn">Earn</NavLink>
                            <ul>
                                <li>
                                    <a href="farms.html">Farms</a>
                                </li>
                                <li>
                                    <a href="pool.html">Pool</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to="/win">Win</NavLink>
                            <ul>
                                <li>
                                    <a href="Trading Competition">
                                        Trading Competition
                                    </a>
                                </li>
                                <li>
                                    <a href="Prediction">Prediction (Beta)</a>
                                </li>
                                <li>
                                    <a href="Lottery">Lottery</a>
                                </li>
                                <li>
                                    <a href="Pottery">Pottery (Beta)</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/nft">NFT</NavLink>
                            <ul>
                                <li>
                                    <a href="Overview">Overview</a>
                                </li>
                                <li>
                                    <a href="Collection">Collection</a>
                                </li>
                                <li>
                                    <a href="Activity">Activity</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/win">...</NavLink>
                            <ul>
                                <li>
                                    <a href="Info">Info</a>
                                </li>
                                <li>
                                    <a href="Info">IFO</a>
                                </li>
                                <li>
                                    <a href="Info">Voting</a>
                                </li>
                                <li className="line-dd">
                                    <a href="Info">Leaderboard</a>
                                </li>
                                <li>
                                    <a
                                        href="https://medium.com/pancakeswap"
                                        target="blank">
                                        Blog
                                    </a>
                                    <img src={exitIcon} alt="exit icon"></img>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.pancakeswap.finance"
                                        target="blank">
                                        Docs
                                    </a>
                                    <img src={exitIcon} alt="exit icon"></img>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <section className="flex">
                    <div>
                        <img
                            src={bunnyRound}
                            alt="mini logo"
                            id="hover"
                            className="mini-logo"></img>
                    </div>
                    <div id="money">
                        <p>$4.357</p>
                    </div>
                    <div className="flex2 lista">
                        <LanguageSelector />
                    </div>
                    <img
                        className="fa-svg-icon"
                        src={settingSvg}
                        alt="setting icon"
                        onClick={() => setOpenModal(true)}></img>
                    <DropdownCrypto />
                    <div>
                        <span className="link-aquagreen">
                            <button className="btn-navbar button-aquagreen"
                            onClick={() => setOpenModalWallet(true)}>
                                Connect Wallet
                            </button>
                        </span>
                    </div>
                </section>
               </div>
            </nav>
            <ModalConnectWallet open={openModalWallet}
            onClose={()=> setOpenModalWallet(false)}/>
            <HpModalSettings open={openModal}
                onClose={() => setOpenModal(false)}/>
                
            <div className={openModal === true || openModalWallet === true ? 'overlay overlay-active' : 'overlay'}
             onClick={() => setOpenModal(false)}>
             </div>
        </div>
    );
}
