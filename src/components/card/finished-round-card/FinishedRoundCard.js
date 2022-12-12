import React from "react";
import { FinishedRoundsDatas } from "../../datas/finished-round-datas/FinishedRoundsDatas";
import "./_finished-round-card.scss";

export function FinishedRoundCard() {
  return (
    <div className="frc-main-container">
      <div className="frc-sub-container">
        <div className="frc-header-box">
          <div className="frch-box-counter">Round 35</div>
          <div className="frch-box-date-wrapper">
            <div className="frch-box-date">Drawn Dec 9, 2022, 1:00 PM</div>
          </div>
        </div>
        <div className="frc-body-box">
          <div className="frcb-data-container">
            <div className="frcb-sub-datas-title-container">
              <div className="frcb-sub-datas-title">Winner</div>
            </div>
            <div className="frcb-sub-datas-container">
              <FinishedRoundsDatas />
              <FinishedRoundsDatas />
              <FinishedRoundsDatas />
              <FinishedRoundsDatas /> <FinishedRoundsDatas />
              <FinishedRoundsDatas />
            </div>
          </div>
          <div className="frcb-prize-container">
            <div className="frcb-pc-sub-title">Prize Pot</div>
            <div className="frcb-pc-sub-prize">~$1,648</div>
            <div className="frcb-pc-sub-cake-number">425 CAKE</div>
            <div className="frcb-pc-sub-subtitles-wrapper">
              <div className="frcb-pc-sub-subtitles">
                <div className="frcb-pcs-subtitle">
                  <div className="frcb-pcs-subtitle-a">
                    Total players this round:
                  </div>
                  <div className="frcb-pcs-subtitle-b">1,816</div>
                </div>
                {/* -- -- -- -- --  */}
                <div className="frcb-pcs-subtitle">
                  <div className="frcb-pcs-subtitle-a">
                    Pottery deposited on:
                  </div>
                  <div className="frcb-pcs-subtitle-b">
                    Nov 8, 2022, 1:00 AM
                  </div>
                </div>
              </div>
              {/* 　⇓　<a> da SOSTITUIRE POI CON IL PERSORSO <Link></Link> */}
              <div>View on BscScan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
