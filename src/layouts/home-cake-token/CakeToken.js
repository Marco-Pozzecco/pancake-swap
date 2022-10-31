import React from "react";
// images imports
import bottomRight from "../../resources/home/cake/bottom-right.webp";
import bottomRight2x from "../../resources/home/cake/bottom-right@2x.webp";
import coin from "../../resources/home/cake/coin.webp";
import coin2x from "../../resources/home/cake/coin@2x.webp";
import topLeft from "../../resources/home/cake/top-left.webp";
import topLeft2x from "../../resources/home/cake/top-left@2x.webp";
import topRight from "../../resources/home/cake/top-right.webp";
import topRight2x from "../../resources/home/cake/top-right@2x.webp";
// Import scss
import "./cake-token.scss";

export function CakeToken() {
    return (
        <section class="cake-token">
            <div class="cake-wrapper">
                <div class="cake-content">
                    <div class="cake-info">
                        <h1>
                            <span class="accent-color-text">CAKE</span> makes
                            our world go round.
                        </h1>
                        <p>
                            CAKE token is at the heart of the PancakeSwap
                            ecosystem. Buy it, win it, farm it, spend it, stake
                            it... heck, you can even vote with it!
                        </p>
                        <div class="cake-info-buttons">
                            <a
                                href="#links to swap page"
                                class="link-aquagreen">
                                <button class="button-aquagreen buttons-home">
                                    Buy CAKE
                                </button>
                            </a>
                            <a
                                href="#links to documentation"
                                class="learn-link">
                                Learn
                            </a>
                        </div>
                    </div>
                    <div class="cake-coins">
                        <img
                            id="pancake-bottom-right"
                            srcSet={`${bottomRight} 512w, ${bottomRight2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="pancake-top-left"
                            srcSet={`${topLeft} 512w, ${topLeft2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="pancake-top-right"
                            srcSet={`${topRight} 512w, ${topRight2x} 1024w`}
                            alt="Small 3d pancake"
                        />
                        <img
                            id="cake-coin"
                            srcSet={`${coin} 512w, ${coin2x} 1024w`}
                            alt="Pancake coin"
                        />
                    </div>
                </div>

                <div class="cake-stats">
                    <div class="cake-circulating-supply">
                        <p class="text-subtle">Circulating Supply</p>
                        <p class="text-cake-stats" id="circulating-supply">
                            139,897,449
                        </p>
                    </div>
                    <div class="cake-supply">
                        <p class="text-subtle">Total Supply</p>
                        <p class="text-cake-stats" id="total-supply">
                            328,219,229
                        </p>
                    </div>
                    <div class="cake-max-supply">
                        <p class="text-subtle">Max Supply</p>
                        <p class="text-cake-stats" id="max-supply">
                            750,000,000
                        </p>
                    </div>
                    <div class="cake-cap">
                        <p class="text-subtle">Market cap</p>
                        <p class="text-cake-stats" id="market-cap">
                            $610 million
                        </p>
                    </div>
                    <div class="cake-burned">
                        <p class="text-subtle">Burned to date</p>
                        <p class="text-cake-stats" id="cake-burned">
                            585,593,391
                        </p>
                    </div>
                    <div class="cake-emissions">
                        <p class="text-subtle">Current emissionis</p>
                        <p class="text-cake-stats" id="cake-stats">
                            11.16/block
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
