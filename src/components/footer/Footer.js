import React from "react";
import "./footer.scss";
import fpancakelogo from "../../resources/PancakeSwap.webp";
import discord from "../../resources/Discord.webp"
import github from "../../resources/GitHub.webp"
import Instagram from "../../resources/Instagram.webp"
import Medium from "../../resources/Medium.webp"
import Reddit from "../../resources/Reddit.webp"
import Telegram from "../../resources/Telegram.webp"
import Twitter from "../../resources/Twitter.webp"
import { ToggleTheme } from "../toggle/ToggleTheme";

export function Footer() {
    return (
        <>
            <footer>
                <div className="Container-Footer">
                    <div className="Container-Footer-Firstbar">
                        <div className="Container-Footer-Firstbar-PancakeSwapLogo">
                            <img src={fpancakelogo} alt="" />
                        </div>
                        <div className="Container-Footer-Firstbar-Topbuttons">
                            <div id="firstbar-right" className="Container-Footer-Latestbar-Right">
                                <div className="mobilefooter">
                                    <div style={{ padding: "10px" }}>
                                        <svg
                                            viewBox="0 0 96 96"
                                            width="24px"
                                            color="text"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="pancakeicon"
                                        >
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="48"
                                                fill="#37C8D4"
                                            ></circle>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
                                                fill="#633001"
                                            ></path>
                                            <path
                                                d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
                                                fill="#D1884F"
                                            ></path>
                                            <path
                                                d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
                                                fill="#FEDC90"
                                            ></path>
                                            <path
                                                d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
                                                fill="#633001"
                                            ></path>
                                            <defs>
                                                <lineargradient
                                                    id="paint0_linear_10493"
                                                    x1="48"
                                                    y1="0"
                                                    x2="48"
                                                    y2="96"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#53DEE9"></stop>
                                                    <stop offset="1" stopColor="#1FC7D4"></stop>
                                                </lineargradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div id="firstbar-money" className="money">$3.383</div>
                                </div>
                                <button className="mainbuttons-Footer">
                                    Buy CAKE
                                    <svg
                                        viewBox="0 0 24 24"
                                        color="#FFFFFF"
                                        width="20px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="arrow"
                                    >
                                        <path
                                            d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div id="firstbar-left" className="Container-Footer-Latestbar-Left">
                                <div>
                                    <input type="checkbox" className="checkbx3" id="chk3" />
                                    <label className="label3" for="chk3">
                                        <i className="fa-regular fa-moon"></i>
                                        <i className="fas fa-sun"></i>
                                        <div className="ball3 circle-toggle"></div>
                                    </label>
                                </div>
                                <div className="language">
                                    <svg
                                        viewBox="0 0 24 24"
                                        color="#B8ADD2;"
                                        width="24px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sc-eaf7e66-0 jqHIiY"
                                    >
                                        <path
                                            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                                        ></path>
                                    </svg>
                                    <p>EN</p>
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
                            </div>
                        </div>
                    </div>
                    <div className="Container-Footer-Sub">
                        <div className="Container-Footer-Sub-Info">
                            <ul className="Container-Footer-Sub-Info-Ul">
                                <li className="Container-Footer-Sub-Info-Ul-Titles">ABOUT</li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-Contact">Contact</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Brand</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Blog</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Community</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Litepaper</a>
                                </li>
                                <hr className="Container-Footer-Sub-Info-Ul-hr1" />
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Online Store</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Container-Footer-Sub-Info">
                            <ul className="Container-Footer-Sub-Info-Ul">
                                <li className="Container-Footer-Sub-Info-Ul-Titles">HELP</li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Customer Support</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Trobuleshooting</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Container-Footer-Sub-Info">
                            <ul className="Container-Footer-Sub-Info-Ul">
                                <li className="Container-Footer-Sub-Info-Ul-Titles">DEVELOPERS</li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Github</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Documentation</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Bug Bounty</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Audits</a>
                                </li>
                                <li className="Container-Footer-Sub-Info-Ul-Li">
                                    <a href="/" className="Container-Footer-Sub-Info-Ul-Li-a">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Container-Footer-Sub-PancakeSwapLogo">
                            <img src={fpancakelogo} alt="" />
                        </div>
                    </div>
                    <div className="Container-Footer-Icons">
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Twitter" src={Twitter} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Telegram" src={Telegram} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Reddit" src={Reddit} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Instagram" src={Instagram} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-GitHub" src={github} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Discord" src={discord} alt="" />
                        <img className="Container-Footer-Icons-All" id="Container-Footer-Icons-Medium" src={Medium} alt="" />
                    </div>
                    <div className="Container-Footer-Latestbar">
                        <div className="Container-Footer-Latestbar-Left">
                            <div>
                                <ToggleTheme />
                            </div>
                            <div className="language">
                                <svg
                                    viewBox="0 0 24 24"
                                    color="#B8ADD2;"
                                    width="24px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-eaf7e66-0 jqHIiY"
                                >
                                    <path
                                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                                    ></path>
                                </svg>
                                <p>EN</p>
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
                        </div>
                        <div className="Container-Footer-Latestbar-Right">
                            <div style={{ padding: "10px" }}>
                                <svg
                                    viewBox="0 0 96 96"
                                    width="24px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pancakeicon"
                                >
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="48"
                                        fill="#37C8D4"
                                    ></circle>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
                                        fill="#633001"
                                    ></path>
                                    <path
                                        d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
                                        fill="#D1884F"
                                    ></path>
                                    <path
                                        d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
                                        fill="#FEDC90"
                                    ></path>
                                    <path
                                        d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
                                        fill="#633001"
                                    ></path>
                                    <defs>
                                        <lineargradient
                                            id="paint0_linear_10499"
                                            x1="48"
                                            y1="0"
                                            x2="48"
                                            y2="96"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#53DEE9"></stop>
                                            <stop offset="1" stopColor="#1FC7D4"></stop>
                                        </lineargradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="money">$3.383</div>
                            <button className="mainbuttons-Footer">
                                Buy CAKE
                                <svg
                                    viewBox="0 0 24 24"
                                    color="#FFFFFF"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="arrow"
                                >
                                    <path
                                        d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
