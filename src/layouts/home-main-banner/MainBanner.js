import React, { useEffect, useState } from 'react'
import { BannerA, BannerB, BannerC } from './InternalBanners'

import { MainBannerSwiper } from './MainBannerSwiper'
import "./_home-main-banner.scss"

export function MainBanner() {

  return (

    <section className="main-banner-container">          
        <div className="main-banner-sub-container">

 {/* {slides === 'a' && <BannerA /> }
 {slides === 'b' && <BannerB /> }
 {slides === 'c' && <BannerC /> } */}


    {/* <BannerA /> */}
    {/* <BannerB /> */}
    <BannerC />
 

{/* <MainBannerSwiper a={visibilityA} b={visibilityB} c={visibilityC}/> */}
    <MainBannerSwiper />


</div>
    </section>
            <BannerA />
            <BannerB />
            <BannerC />
            <MainBannerSwiper />
        </div>
            </section>

    )
}

