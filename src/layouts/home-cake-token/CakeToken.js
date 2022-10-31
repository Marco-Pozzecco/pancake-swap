import React from "react";

export function CakeToken() {

    return (
        <section class="cake-token">
            <div class="cake-wrapper">
                <div class="cake-content">
                    <div class="cake-info">
                        <h1><Span class="accent-color-text">CAKE</Span> makes our world go round.</h1>
                        <p>CAKE token is at the heart of the PancakeSwap ecosystem.
                            Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!
                        </p>
                        <div class="cake-info-buttons">
                            <a href="#links to swap page" class="link-aquagreen">
                                <button class="button-aquagreen buttons-home">Buy CAKE</button>
                            </a>
                            <a href="#links to documentation" class="learn-link">Learn</a>
                        </div>
                    </div>
                    <div class="cake-coins">
                        <img id="pancake-bottom-right" srcset="../../../resources/home/cake/bottom-right.webp 512w, ../../../resources/home/cake/bottom-right@2x.webp 1024w," alt="Small 3d pancake" />
                            <img id="pancake-top-left" srcset="../../../resources/home/cake/top-left.webp 512w, ../../../resources/home/cake/top-left@2x.webp 1024w," alt="Small 3d pancake" />
                                <img id="pancake-top-right" srcset="../../../resources/home/cake/top-right.webp 512w, ../../../resources/home/cake/top-right@2x.webp 1024w," alt="Small 3d pancake" />
                                    <img id="cake-coin" srcset="../../../resources/home/cake/coin.webp 512w, ../../../resources/home/cake/coin@2x.webp 1024w," alt="Pancake coin" />
                                    </div>
                                </div>

                                <div class="cake-stats">
                                    <div class="cake-circulating-supply">
                                        <p class="text-subtle">Circulating Supply</p>
                                        <p class="text-cake-stats" id="circulating-supply">139,897,449</p>
                                    </div>
                                    <div class="cake-supply">
                                        <p class="text-subtle">Total Supply</p>
                                        <p class="text-cake-stats" id="total-supply">328,219,229</p>
                                    </div>
                                    <div class="cake-max-supply">
                                        <p class="text-subtle">Max Supply</p>
                                        <p class="text-cake-stats" id="max-supply">750,000,000</p>
                                    </div>
                                    <div class="cake-cap">
                                        <p class="text-subtle">Market cap</p>
                                        <p class="text-cake-stats" id="market-cap">$610 million</p>
                                    </div>
                                    <div class="cake-burned">
                                        <p class="text-subtle">Burned to date</p>
                                        <p class="text-cake-stats" id="cake-burned">585,593,391</p>
                                    </div>
                                    <div class="cake-emissions">
                                        <p class="text-subtle">Current emissionis</p>
                                        <p class="text-cake-stats" id="cake-stats">11.16/block</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        ) 
}