import React, { useState } from 'react'
import { BannerA, BannerB, BannerC } from './InternalBanners'
import { MainBannerSwiper } from './MainBannerSwiper'
import "./_home-main-banner.scss"

export function MainBanner() {


const [ slideA, setSlideA ] = useState()
const [ slideB, setSlideB ] = useState()
const [ slideC, setSlideC ] = useState()







  return (

    <section className="main-banner-container">          {/*COLORE PLACEHOLDER*/}
        <div className="main-banner-sub-container">

            <BannerA />
            <BannerB />
            <BannerC />

            <MainBannerSwiper />


        </div>
    </section>

    )
}

