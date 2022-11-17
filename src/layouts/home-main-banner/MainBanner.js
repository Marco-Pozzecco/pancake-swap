import React, { useEffect, useState } from 'react'
import { BannerA, BannerB, BannerC } from './InternalBanners'

import { MainBannerSwiper } from './MainBannerSwiper'
import "./_home-main-banner.scss"

export function MainBanner() {
    const [bannerIndex, setBannerIndex] = React.useState(0);

    React.useEffect(() => {
        let bannerIdx = 0;

        window.setInterval(() => {
            bannerIdx += 1;
            console.log(bannerIndex);
            if(bannerIdx < 3)setBannerIndex(bannerIdx);
            else {bannerIdx = 0; setBannerIndex(0)}
        }, 5000)
    },[])
    return (
        <section className="main-banner-container">          
            <div className="main-banner-sub-container">

                {bannerIndex === 0 && <BannerA />}
                {bannerIndex === 1 && <BannerB />}
                {bannerIndex === 2 && <BannerC />}


                <MainBannerSwiper setBanner={setBannerIndex} bannerIndex={bannerIndex}/>
            </div>
        </section>
        )
}

