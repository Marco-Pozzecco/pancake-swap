import React from "react";
import "./_floating-bunny.scss";
import bunny from "./bunny.webp";
import stella1 from "./stella1.webp";
import stella2 from "./stella2.webp";
import stella3 from "./stella3.webp";

export default function FloatingBunny() {
    return (
        <section className="fb-floating-bunny">
            <div class="fb-wrapper">
                <div class="fb-contents-section">
                    <h2>The moon is made of pancakes.</h2>
                    <h3>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h3>
                    <div class="fb-buttons-section">
                        <a href="" class="link-aquagreen">
                            <button class="button-aquagreen buttons-home">Connect Wallet</button>
                        </a>

                        <a href="" class="link-onlyborder">
                            <button class="button-onlyborder buttons-trade-swap-grafico">Trade Now</button>
                        </a>
                    </div>
                </div>

                <div class="fb-img-section">
                    <div class="fb-thefloatingbunny">
                            <img src={bunny}/>
                    </div>
                    <div class="fb-thefloatingstars">
                        <div class="fb-star1">
                            <img src={stella1}/>
                        </div>
                        <div class="fb-star2">
                            <img src={stella2}/>
                        </div>
                        <div class="fb-star3">
                            <img src={stella3}/>
                        </div>
                    </div>
                </div>

            </div>

            <div class="fb-bottomgradient">
                <svg viewBox="0 0 1660 339" width="100%" color="text" xmlns="http://www.w3.org/2000/svg"
                    class="sc-8a800401-0 Mvnec">
                    <path
                        d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
                        fill="url(#paint0_linear_dark)"></path>
                    <defs>
                        <linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#08060B" stop-opacity="0.2"></stop>
                            <stop offset="0.545554" stop-color="#08060B" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="#08060B"></stop>
                        </linearGradient>
                        <linearGradient id="paint0_linear_light" x1="830" y1="83.5" x2="830" y2="338.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.2"></stop>
                            <stop offset="0.545554" stop-color="white" stop-opacity="0.5"></stop>
                            <stop offset="1" stop-color="white"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}