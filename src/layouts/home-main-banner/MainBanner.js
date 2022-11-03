import React from 'react'
import "./_home-main-banner.scss"

export function MainBanner() {
  return (

    <section classNameName="main-banner-container">          {/*COLORE PLACEHOLDER*/}
        <div classNameName="main-banner-sub-container" style={{backgroundColor:'red'}}>

            {/* <!-- -- SWIPER -- -- --> */}
            <div classNameName="swiper-slide">
                <div classNameName="swiper swpr-a"></div>
                <div classNameName="swiper swpr-b"></div>
                <div classNameName="swiper swpr-c"></div>
            </div>





            {/* <!-- PRIMO BANNER --> */}
            <div classNameName="mbssc banner-a" id="banner1">
                {/* <!-- -----BANNER A------------------------------ --> */}
                <div classNameName="main-banner-content-container banner-a1">
                    {/* <!--- -- -- -- -- Titles Content-- -- -- -- -- ---- -- -- -- --> */}
                    <h2 classNameName="main-banner-title-a mbt-a1">
                        Perpetual Futures
                    </h2>
                    <h2 classNameName="main-banner-title-a mbt-a2">
                        Up to 100x Leverage
                    </h2>
                    {/* <!-- -- -- -- -- --Button- -- -- -- -- -- -- -- -- -- -- -- --  --> */}
                    <a href="#" classNameName="link-aquagreen">
                        <button
                            classNameName="button-aquagreen buttons-home main-banner-button-a">
                            Trade Now
                            <svg
                                classNameName="mbb-svg-a"
                                viewBox="0 0 24 24"
                                color="invertedContrast"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                            </svg>
                        </button>
                    </a>
                </div>

                {/* <!-- -- IMAGE Container A -- -- -- --> */}
                <div className="bunny-container-a banner-a1">
                    <picture>
                        <source
                            media="(max-width: 968px)"
                            srcset="
                                https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&w=640&q=75
                            " />
                        <img
                            src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperpetual.fd0aa080.png&w=828&q=75"
                            alt="Panckake Swap Bunny" />
                    </picture>
                </div>
            </div>




            {/* <!-- SECONDO BANNER --> */}
            <div className="mbssc banner-b" id="banner2">
                {/* <!-- -----BANNER B------------------------------ --> */}
                <div className="main-banner-content-container banner-b2">
                    {/* <!--- -- -- -- -- Titles Content-- -- -- -- -- ---- -- -- -- --> */}
                    <h2 classNameName="main-banner-title-b mbt-b1">
                        Win <span>$102.181</span> in Lottery
                    </h2>
                    {/* <!--- -- -- -- -- Titles Content - COUNTER Lottery-- -- -- -- -- ---- -- -- -- --> */}
                    <div className="mb-counter-lottery">
                        <h2 className="mbcl-item mbcli-number">1</h2>
                        <h2 className="mbcl-item mbcli-time">d</h2>
                        <h2 className="mbcl-item mbcli-number">3</h2>
                        <h2 className="mbcl-item mbcli-time">h</h2>
                        <h2 className="mbcl-item mbcli-number">5</h2>
                        <h2 className="mbcl-item mbcli-time">m</h2>
                        <h2 className="mbcl-item mbcli-number">36</h2>
                        <h2 className="mbcl-item mbcli-time">s</h2>
                    </div>

                    {/* <!-- -- -- -- -- --Button- -- -- -- -- -- -- -- -- -- -- -- --  --> */}
                    <a href="#" className="link-aquagreen">
                        <button
                            className="button-aquagreen buttons-home main-banner-button-b">
                            Play Now
                            <svg
                                className="mbb-svg-a"
                                viewBox="0 0 24 24"
                                color="invertedContrast"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                            </svg>
                        </button>
                    </a>
                </div>

                {/* <!-- -- IMAGE Container B-- -- -- -- -- -- -- -- --> */}
                <div className="bunny-container-b banner-b2">
                    <picture>
                        <source
                            media="(max-width: 968px) and (min-width: 576px)"
                            srcset="
                                https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlotteryMobile.7ad41ede.png&w=384&q=75
                            " />
                        <img
                            src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flottery.77a09738.png&w=3840&q=75"
                            alt="Panckake Swap Bunny B" />
                    </picture>
                </div>
            </div>


            

            {/* <!-- TERZO BANNER --> */}
            <div className="mbssc banner-c" id="banner3">
                {/* <!-- -----BANNER C----------------------------- --> */}
                <div className="main-banner-content-container banner-c1">
                    {/* <!-- -- -- Titles Content-- -- -- -- -- ---- --> */}
                    <h2 className="main-banner-title-c mbt-c1">Soon</h2>
                    <h2 className="main-banner-title-c mbt-c2">HOOP IFO</h2>

                    {/* <!-- -- -- Buttons- -- -- -- -- -- -- -- --  --> */}
                    <a href="#" className="link-aquagreen">
                        <button
                            className="button-aquagreen buttons-home main-banner-button-c">
                            Go to IFO
                            <svg
                                className="mbb-svg-c"
                                viewBox="0 0 24 24"
                                color="invertedContrast"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                            </svg>
                        </button>
                    </a>
                </div>

                {/* <!-- -- IMAGE Container C-- -- -- -- --> */}
                <div className="bunny-container-c">
                    <div className="bc-internalwrapper-c">
                        <div className="bunny-container-c1 banner-c1">
                            <picture>
                                <source
                                    media="(max-width: 576px)"
                                    srcset="
                                        https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIFOMobile.a93e96d8.png&w=384&q=75
                                    " />
                                <img
                                    src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIFO.7b008469.png&w=640&q=75"
                                    alt="Panckake Swap Bunny" />
                            </picture>
                        </div>

                        <div className="bunny-container-c2 banner-c1">
                            <picture>
                                <img
                                    src="https://pancakeswap.finance/images/tokens/0xF19cfb40B3774dF6Eed83169Ad5aB0Aaf6865F25.png"
                                    alt="Panckake Swap Bunny" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>





        </div>
</section>

    )
}

