import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../resources/home/navbar/logo_black.svg";
import logoWhite from "../../resources/home/navbar/logo_white.svg";
import { HpModalSettings } from "../modal/HpModalSettings";
import logoBunny from "../../resources/home/navbar/bunny-logo.svg";
import exitIcon from "../../resources/home/cake/exit-icon.svg";
import { LanguageSelector } from "../language-selector/LanguageSelector";
import DropdownCrypto from "../dropdown-crypto/DropdownCrypto";
import ModalConnectWallet from "../modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../buttons/ConnectWalletBtn";
import { ThemeContext } from "../../context/ThemeContext";
import { FaCog } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

export function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalWallet, setOpenModalWallet] = useState(false);
  //const [theme, setLogo] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <nav>
        <div className="extern-box">
          <div className="flex">
            <Link to="/">{theme === "theme-dark" ? <img alt="" src={logoWhite} /> : <img alt="" src={logo} />}</Link>

            <NavLink to="/">
              <img src={logoBunny} alt="logo bunny" className="logoBunny"></img>
            </NavLink>
            <ul className="menu-ul menu-nav menu-nav-ul">
              {/* <li><NavLink to="/">Home</NavLink></li> */}
              <li>
                <NavLink to="/swap">Trade</NavLink>
                <ul>
                  <li>
                    <NavLink to="/swap">Swap</NavLink>
                  </li>
                  <li>
                    <NavLink to="/limit">Limit</NavLink>
                  </li>
                  <li>
                    <NavLink to="/liquidity">Liquidity</NavLink>
                  </li>
                  <li>
                    <a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target="blank">
                      Perpetual
                    </a>
                    <img src={exitIcon} alt="exit icon" />
                  </li>
                  <li>
                    <a href="https://bridge.pancakeswap.finance/" target="blank">
                      Bridge
                    </a>
                    <img src={exitIcon} alt="exit icon" />
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/farms">Earn</NavLink>
                <ul>
                  <li>
                    <NavLink to="/farms">Farms</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pools">Pools</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/trading">Win</NavLink>
                <ul>
                  <li>
                    <NavLink to="/trading">Trading Competition</NavLink>
                  </li>
                  <li>
                    <NavLink to="/prediction">Prediction (Beta)</NavLink>
                  </li>
                  <li>
                    <NavLink to="/lottery">Lottery</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pottery">Pottery</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/overview">NFT</NavLink>
                <ul>
                  <li>
                    <NavLink to="/overview">Overview</NavLink>
                  </li>
                  <li>
                    <NavLink to="/collections">Collections</NavLink>
                  </li>
                  <li>
                    <NavLink to="/activity">Activity</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/info">...</NavLink>
                <ul>
                  <li>
                    <NavLink to="info">Info</NavLink>
                  </li>
                  <li>
                    <NavLink to="ifo">IFO</NavLink>
                  </li>
                  <li>
                    <NavLink to="voting">Voting</NavLink>
                  </li>
                  <li className="line-dd">
                    <NavLink to="leaderboard">Leaderboard</NavLink>
                  </li>
                  <li>
                    <a href="https://medium.com/pancakeswap" target="blank">
                      Blog
                    </a>
                    <img src={exitIcon} alt="exit icon"></img>
                  </li>
                  <li>
                    <a href="https://docs.pancakeswap.finance" target="blank">
                      Docs
                    </a>
                    <img src={exitIcon} alt="exit icon"></img>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <section className="flex">
            <div style={{ padding: "10px" }}>
              <svg
                viewBox="0 0 96 96"
                width="24px"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="pancakeicon">
                <circle cx="48" cy="48" r="48" fill="#37C8D4"></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
                  fill="#633001"></path>
                <path
                  d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
                  fill="#D1884F"></path>
                <path
                  d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
                  fill="#FEDC90"></path>
                <path
                  d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
                  fill="#633001"></path>
                <defs>
                  <lineargradient
                    id="paint0_linear_10493"
                    x1="48"
                    y1="0"
                    x2="48"
                    y2="96"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#53DEE9"></stop>
                    <stop offset="1" stopColor="#1FC7D4"></stop>
                  </lineargradient>
                </defs>
              </svg>
            </div>
            <div id="money">
              <p>$4.357</p>
            </div>
            <div className="language">
              {theme === "theme-dark" ? (
                <IoIosGlobe fill="#b8add2" style={{ height: "1.4em", width: "1.4em" }} />
              ) : (
                <IoIosGlobe fill="#7a6eaa" style={{ height: "1.4em", width: "1.4em" }} />
              )}

              <div className="dropdown_content">
                <div className="element">
                  <a href="/">English</a>
                </div>
                <div className="element">
                  <a href="/">Italian</a>
                </div>
                <div className="element">
                  <a href="/">Portoguese</a>
                </div>
                <div className="element">
                  <a href="/">German</a>
                </div>
                <div className="element">
                  <a href="/">French</a>
                </div>
                <div className="element">
                  <a href="/">Japanese</a>
                </div>
                <div className="element">
                  <a href="/">Espaniol</a>
                </div>
                <div className="element">
                  <a href="/">Filippin</a>
                </div>
                <div className="element">
                  <a href="/">Ελληνικά</a>
                </div>
                <div className="element">
                  <a href="/">বাংলা</a>
                </div>
              </div>
            </div>
            {theme === "theme-dark" ? (
              <FaCog fill="#b8add2" onClick={() => setOpenModal(true)} style={{ height: "1.2em", width: "1.2em" }} />
            ) : (
              <FaCog fill="#7a6eaa" onClick={() => setOpenModal(true)} style={{ height: "1.2em", width: "1.2em" }} />
            )}

            <DropdownCrypto />
            <div>
              <ConnectWalletBtn type="fullButton button-aquagreen" action={() => setOpenModalWallet(true)} />
            </div>
          </section>
        </div>
      </nav>
      <ModalConnectWallet open={openModalWallet} onClose={() => setOpenModalWallet(false)} />
      <HpModalSettings open={openModal} onClose={() => setOpenModal(false)} />

      <div
        className={openModal === true || openModalWallet === true ? "overlay overlay-active" : "overlay"}
        onClick={() => {
          setOpenModal(false);
          setOpenModalWallet(false);
        }}></div>
    </div>
  );
}
