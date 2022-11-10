import React from 'react'
import './_home-earn.scss';
import { useRef } from 'react';
import img1 from "../../resources/folder@2x.webp"
import img2 from "../../resources/stonks@2x.webp"
import img3 from "../../resources/pie@2x.webp"
import { LearnBtn } from '../../components/buttons/LearnBtn';
import { Button } from '../../components/buttons/Button';

export function HomeEarn(props) {
    const switchBoxes = useRef()

    function handleClick() {
    }

    return (
        <>
            <section className="ea-earn">

                <div className="ea-wrapper">
                    <div className="ea-contents-section">
                        <h2><span className="ea-text-span">Earn</span> passive income with crypto.</h2>
                        <h3>PancakeSwap makes it easy to make your crypto work for you.</h3>
                        <div className="ea-buttons-section">
                            <a href="" className="link-aquagreen">
                                <button className="explorebutton">Explore</button>
                            </a>
                            <a href="" className="link-onlyborder">
                                <LearnBtn />
                            </a>
                        </div>
                    </div>

                    <div className="ea-img-section">

                        <div className="ea-goldencoin">
                            <img src={img1}></img>
                        </div>

                        <div className="ea-bitcoin">
                            <img src={img2}></img>
                        </div>

                        <div className="ea-cakecoin">
                            <img src={img3}></img>
                        </div>

                    </div>

                </div>
                <div className="ea-topline">
                    <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
                </div>

                {/* <!-- ####################################################################### --> */}

                {/* <!-- div principale della sezione --> */}
                <div className="earn-bottom-banner-main-container">

                    <div className="ebb-main-title-container">

                        <div className="ebb-title-container-a">
                            <h2 className="ebb-title-a1">Top <span className="ebb-title-a2">Syrup pool</span></h2>

                            <button className="button-won-graph  bwg-earn-style" onClick={handleClick}>
                                <svg className="sc-8a800401-0 bmlywH" href='' viewBox="0 0 24 25" height="24px" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg"><path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path></svg>
                            </button>

                        </div>

                        <div className="ebb-title-container-b">
                            <h2 className="ebb-title-b1">Top<span className="ebb-title-b2">Farms</span></h2>

                            <button className="button-won-graph  bwg-earn-style" onClick={handleClick}>
                                <svg className="sc-8a800401-0 bmlywH" viewBox="0 0 24 25" height="24px" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg"><path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path></svg>
                            </button>

                        </div>

                    </div>

                    <div className="ebb-main-body-container" ref={switchBoxes} >

                        {/* <!-- -- -- -- -- -- --  --> */}
                        <div className="ebb-main-body-items-container ebb-body-a">

                            <div className="ebb-item ebbi-1">
                                <span className="ebbi-s1">Stake CAKE</span>
                                <span className="ebbi-s2">Up to 65.268%</span>
                                <span className="ebbi-s3">APY</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-2">
                                <span className="ebbi-s1">Stake CAKE - Earrn WOM</span>
                                <span className="ebbi-s2">53.069%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-3">
                                <span className="ebbi-s1">Stake CAKE - Earn PEEL</span>
                                <span className="ebbi-s2">41.662%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-4">
                                <span className="ebbi-s1">Stake CAKE - Earn SFUND</span>
                                <span className="ebbi-s2">40.739%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-5">
                                <span className="ebbi-s1">Stake CAKE - Earn HAY</span>
                                <span className="ebbi-s2">39.073%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>

                        </div>
                        {/* <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - --- - - - --  --> */}
                        <div className="ebb-main-body-items-container ebb-body-b">

                            <div className="ebb-item ebbi-1">
                                <span className="ebbi-s1">HAPPY-BNB</span>
                                <span className="ebbi-s2">620.078%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-2">
                                <span className="ebbi-s1">XCAD-BUSD LP</span>
                                <span className="ebbi-s2">339.838%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-3">
                                <span className="ebbi-s1">WOM-BUSD LP</span>
                                <span className="ebbi-s2">327.690%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-4">
                                <span className="ebbi-s1">SPIN-BNB LP</span>
                                <span className="ebbi-s2">273.459%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>
                            {/* <!-- -- -- -- -- -- -- -- -- -- -- -- --> */}
                            <div className="ebb-item ebbi-5">
                                <span className="ebbi-s1">SHELL-BUSD LP</span>
                                <span className="ebbi-s2">157.639%</span>
                                <span className="ebbi-s3">APR</span>
                            </div>

                        </div>
                        {/* <!-- -- -- -- -- -- - - --> */}

                    </div>



                    {/* <!-- --------------------------------------------------------------------- --> */}


                </div>





            </section>
        </>
    )
}