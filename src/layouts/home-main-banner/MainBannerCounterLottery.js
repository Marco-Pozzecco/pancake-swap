import React from 'react'
import "./_home-main-banner.scss"

//creare un unico <h2> in cui renderizzare il countdown?

export  function MainBannerCounterLottery() {
  return (
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
    )
}
