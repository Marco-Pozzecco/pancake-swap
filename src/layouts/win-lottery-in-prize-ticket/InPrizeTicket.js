import React from "react";
import { MovingTicket } from "../../components/moving-components/moving-ticket/MovingTicket";
import "./_in-prize-ticket.scss";

export function InPrizeTicket(props) {
  return (
    <section className="ipt-section">
      <div className="in-prize-main-container">
        <div className="ip-sc-titles">
          <h2 className="ipt-title-a">{props.ipt_title_a}</h2>
          <div className="ipt-number">
            <span>{props.ipt_amount_prize}</span>
          </div>
          <h2 className="ipt-title-b">{props.ipt_title_b}</h2>
        </div>

        <div className="ipt-ticket-container-wrapper">
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
                    fill="#FFB237"
                    d="M4 16C4 7.163 11.163 0 20 0h46v113H20c-8.837 0-16-7.163-16-16V16z"
                  ></path>
                  <path
                    fill="#FFB237"
                    fillRule="evenodd"
                    d="M69.493 2.946C68.951 1.38 67.657 0 66 0v10h24V0c-1.657 0-2.951 1.38-3.493 2.946a9.004 9.004 0 01-17.014 0z"
                    clipRule="evenodd"
                  ></path>
                  <path fill="#FFB237" d="M66 10H76V103H66z"></path>
                  <path
                    stroke="#FFB237"
                    strokeDasharray="4 4"
                    strokeWidth="4"
                    d="M78 103V10"
                  ></path>
                  <path fill="#FFB237" d="M80 10H90V103H80z"></path>
                  <path
                    fill="#FFB237"
                    fillRule="evenodd"
                    d="M69.493 110.054C68.951 111.62 67.657 113 66 113v-10h24v10c-1.657 0-2.951-1.38-3.493-2.946a9.004 9.004 0 00-17.014 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FFB237"
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="2" dy="2"></feOffset>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.686275 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_ticket_purchase_card"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
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
      </div>
      <div className="bottom-background-img-container"></div>
    </section>
  );
}
