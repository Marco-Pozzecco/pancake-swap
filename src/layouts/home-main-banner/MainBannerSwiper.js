import React from 'react'
import "./_home-main-banner.scss"


export function MainBannerSwiper(props) {

  return (
    <div className="swiper-slide">
      <div className={`swiper swpr-a`} style={{opacity: `${props.bannerIndex === 0 ? 1 : 0.3}`}} onClick={() => props.setBanner(0)}></div>
      <div className="swiper swpr-b" style={{opacity: `${props.bannerIndex === 1 ? 1 : 0.3}`}} onClick={() => props.setBanner(1)}></div>
      <div className="swiper swpr-c" style={{opacity: `${props.bannerIndex === 2 ? 1 : 0.3}`}} onClick={() => props.setBanner(2)}></div>
    </div>
  )
}







