import React from "react";
import { UntilTheDrawCD } from "../../components/count-down/until-the-draw-countdown/UntilTheDrawCD";
import { MovingTicket } from "../../components/moving-components/moving-ticket/MovingTicket";
import "./_to-be-won.scss";

export function ToBeWon() {
  //COUNTDOWN DEADLINE DATE
  const deadlineDate = "December 27 2022";

  return (
    <section className="tbw-main-container">
      <div className="tbw-sub-container">
        <div className="tbw-image-container">
          <img src="https://pancakeswap.finance/images/pottery/banner-bunny.png" />
        </div>
        <div className="tbw-titles-container">
          <div className="tbw-title-a">
            <div className="tbw-title-a1">The PancakeSwap</div>
            <div className="tbw-title-a2">Pottery</div>
          </div>
          <div className="tbw-title-amount">$17,766</div>
          <div className="tbw-title-b">To be won !</div>
          {/* --------------------------------------------- */}
          <div className="tbw-ticket">
            <MovingTicket
              moving_ticket_title={"Stake to WIN!"}
              moving_ticket_svg_ticket_color={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 296 121"
                >
                  <g filter="url(#filter0_dd_ticket_purchase_card)">
                    <path
                      fill="#A881FC"
                      d="M4 16C4 7.163 11.163 0 20 0h46v113H20c-8.837 0-16-7.163-16-16V16z"
                    ></path>
                    <path
                      fill="#A881FC"
                      fillRule="evenodd"
                      d="M69.493 2.946C68.951 1.38 67.657 0 66 0v10h24V0c-1.657 0-2.951 1.38-3.493 2.946a9.004 9.004 0 01-17.014 0z"
                      clipRule="evenodd"
                    ></path>
                    <path fill="#A881FC" d="M66 10H76V103H66z"></path>
                    <path
                      stroke="#A881FC"
                      strokeDasharray="4 4"
                      strokeWidth="4"
                      d="M78 103V10"
                    ></path>
                    <path fill="#A881FC" d="M80 10H90V103H80z"></path>
                    <path
                      fill="#A881FC"
                      fillRule="evenodd"
                      d="M69.493 110.054C68.951 111.62 67.657 113 66 113v-10h24v10c-1.657 0-2.951-1.38-3.493-2.946a9.004 9.004 0 00-17.014 0z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#A881FC"
                      d="M90 0h186c8.837 0 16 7.163 16 16v81c0 8.837-7.163 16-16 16H90V0z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_ticket_purchase_card"
                      width="296"
                      height="121"
                      x="0"
                      y="0"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dx="2" dy="2"></feOffset>
                      <feColorMatrix values="0 0 0 0 0.637669 0 0 0 0 0.458333 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_ticket_purchase_card"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="4"></feOffset>
                      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="effect1_dropShadow_ticket_purchase_card"
                        result="effect2_dropShadow_ticket_purchase_card"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_ticket_purchase_card"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              }
            />
          </div>
          {/* --------------------------------------------- */}
          <div className="tbw-features">
            <div className="tbw-feature">
              <span className="tbwf-a">Deposit CAKE for </span>
              <span className="tbwf-b">10 Weeks</span>
            </div>
            <div className="tbw-feature">
              <span className="tbwf-a">to earn </span>
              <span className="tbwf-b">13.59% </span>
              <span className="tbwf-a">APY</span>
            </div>
            <div className="tbw-feature">
              <span className="tbwf-a">And a chance to </span>
              <span className="tbwf-b">win prize pot!</span>
            </div>
          </div>

          <div className="tbw-countdown-box-wrap">
            <UntilTheDrawCD deadline={deadlineDate} />
          </div>
        </div>
      </div>
      <div className="tbw-bottom-background-img-container"></div>
      {/* -------------------------------------------------------------- */}

      <div className="ipt-bottom-moving-img-container">
        {/* nth-child(1)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/left1.png" />
        {/* nth-child(2)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/left2.png" />
        {/* nth-child(3)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/left3.png" />
        {/* nth-child(4)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/left4.png" />
        {/* nth-child(5)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/right1.png" />
        {/* nth-child(6)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/right2.png" />
        {/* nth-child(7)--  --  --  --  --  --  --  --  -- */}
        <img src="https://pancakeswap.finance/images/pottery/banner-ticket/right3.png" />
        {/* --  --  --  --  --  --  --  --  -- */}
      </div>
    </section>
  );
}
