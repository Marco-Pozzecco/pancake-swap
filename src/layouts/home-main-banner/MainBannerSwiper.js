import React from 'react'
import "./_home-main-banner.scss"


export function MainBannerSwiper({a, b, c}) {

  return (
    <div className="swiper-slide"  >
    <div className="swiper swpr-a" onClick={a}></div>
    <div className="swiper swpr-b" onClick={b}></div>
    <div className="swiper swpr-c" onClick={c}></div>
</div>
  )
}







