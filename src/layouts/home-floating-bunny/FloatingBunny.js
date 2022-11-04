import React, { useEffect } from "react";
import "./_floating-bunny.scss";
import bunny from "../../resources/home/bunny/bunny.webp";
import stella1 from "../../resources/home/bunny/stella1.webp";
import stella2 from "../../resources/home/bunny/stella2.webp";
import stella3 from "../../resources/home/bunny/stella3.webp";
import { Button } from "../../components/buttons/Button";
import { TradeNowBtn } from "../../components/buttons/TradeNowBtn";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";

export function FloatingBunny() {
    let [theme, setTheme] = React.useState(null);

    useEffect(() => {
        const pippo = document.querySelector("body").classList[0];
        setTheme(pippo);
    }, [theme]);

    return (
        <section className="fb-floating-bunny">
            <div className="fb-wrapper">
                <div className="fb-contents-section">
                    <h2>The moon is made of pancakes.</h2>
                    <h3>
                        Trade, earn, and win crypto on the most popular
                        decentralized platform in the galaxy.
                    </h3>
                    <div className="fb-buttons-section">

                        <ConnectWalletBtn type="fullButton fb-button" />
                        <TradeNowBtn />

                    </div>
                </div>

                <div className="fb-img-section">
                    <div className="fb-thefloatingbunny">
                        <img src={bunny} />
                    </div>
                    <div className="fb-thefloatingstars">
                        <div className="fb-star1">
                            <img src={stella1} />
                        </div>
                        <div className="fb-star2">
                            <img src={stella2} />
                        </div>
                        <div className="fb-star3">
                            <img src={stella3} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="fb-bottomgradient">
                <svg
                    viewBox="0 0 1660 339"
                    width="100%"
                    color="text"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-8a800401-0 Mvnec">
                    <path
                        d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
                        fill={
                            theme === "theme-dark"
                                ? "#paint0_linear_dark"
                                : "#paint0_linear_light"
                        }></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear_dark"
                            x1="830"
                            y1="83.5"
                            x2="830"
                            y2="338.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#08060B" stopOpacity="0.2"></stop>
                            <stop
                                offset="0.545554"
                                stopColor="#08060B"
                                stopOpacity="0.5"></stop>
                            <stop offset="1" stopColor="#08060B"></stop>
                        </linearGradient>
                        <linearGradient
                            id="paint0_linear_light"
                            x1="830"
                            y1="83.5"
                            x2="830"
                            y2="338.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.2"></stop>
                            <stop
                                offset="0.545554"
                                stopColor="white"
                                stopOpacity="0.5"></stop>
                            <stop offset="1" stopColor="white"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
