import React, { useState } from "react";
import { Button } from "../../../buttons/Button";
import "./_finished-round-card-lottery-ah.scss";
import { FaAngleDown } from "react-icons/fa";
import { RoundsInput } from "../../../inpunts/round-input-with-counter/RoundsInput";
import MatchesDatas from "../../../datas/matches-datas/MatchesDatas";

export function FinishedRoundCardLotteryAH(props) {
  const [showDetails, setShowDetails] = useState(false);
  // ------------------------------------------------------
  const handleClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="frcl-ah-main-container">
      <div className="frcl-ah-sub-container">
        {/* --- HEADER --- */}
        <div className="frcl-ah-header">
          <div className="frcl-ahh-sub frcl-ahhs-a">
            <RoundsInput />
          </div>
          <div className="frcl-ahh-sub frcl-ahhs-b">
            Drawn Dec 13, 2022, 1:00 PM
          </div>
        </div>
        {/* --- BODY --- */}
        <div className="frcl-ah-body-container">
          <div className="frcl-ah-body-sub-container frcl-ahbs-a">
            <h2>Winning Number</h2>
          </div>
          <div className="frcl-ah-body-sub-container frcl-ahbs-b">
            <div className="frcl-ah-balls-wrapper">
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                {/* // QUI MANCA DI AGGIUNGERE I DIV CON I NUMERI CHE CI SONO ALL INTENRO DELLE PALLE COLORATE */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-a">1</div>

                {/* -- -- -- -- -- --  */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#D750B2"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.334 0-5.391-2.783-10.133-6.99-12.867z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.989 6.16-2.25 2.251-4.327 3.823-6.16 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#1FC7D4"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.334 0-5.391-2.783-10.133-6.99-12.867z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.989 6.16-2.25 2.251-4.327 3.823-6.16 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* -- -- -- -- -- --  */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-b">9</div>
              </div>
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#1FC7D4"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.334 0-5.391-2.783-10.133-6.99-12.867z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.989 6.16-2.25 2.251-4.327 3.823-6.16 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* -- -- -- -- -- --  */}
                {/* // QUI MANCA DI AGGIUNGERE I DIV CON I NUMERI CHE CI SONO ALL INTENRO DELLE PALLE COLORATE */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-c">1</div>
              </div>
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#31D0AA"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.334 0-5.391-2.783-10.133-6.99-12.867z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.989 6.16-2.25 2.251-4.327 3.823-6.16 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* -- -- -- -- -- --  */}
                {/* // QUI MANCA DI AGGIUNGERE I DIV CON I NUMERI CHE CI SONO ALL INTENRO DELLE PALLE COLORATE */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-d">1</div>
              </div>
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#93D45A"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.334 0-5.391-2.783-10.133-6.99-12.867z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.989 6.16-2.25 2.251-4.327 3.823-6.16 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* -- -- -- -- -- --  */}
                {/* // QUI MANCA DI AGGIUNGERE I DIV CON I NUMERI CHE CI SONO ALL INTENRO DELLE PALLE COLORATE */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-e">2</div>
              </div>
              {/* -------------------------------- */}
              <div className="frcl-ah-ball-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 IIbzK"
                  color="text"
                  viewBox="0 0 32 32"
                >
                  <circle cx="16" cy="16" r="16" fill="#FFC43C"></circle>
                  <path
                    fillRule="evenodd"
                    d="M24.343 3.132c4.576 5.74 4.207 14.125-1.106 19.439-5.709 5.709-14.966 5.709-20.675 0-.28-.28-.546-.568-.798-.864C4.028 27.349 9.55 31.333 16 31.333c8.468 0 15.333-6.865 15.333-15.333 0-5.392-2.783-10.134-6.99-12.868z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M25.771 4.183c4.86 6.029 4.49 14.878-1.11 20.478-5.6 5.6-14.448 5.97-20.477 1.111A15.302 15.302 0 0016 31.332c8.468 0 15.333-6.864 15.333-15.332 0-4.755-2.164-9.005-5.562-11.817z"
                    clipRule="evenodd"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.49 24.868C.15 18.765.975 11.064 6.02 6.019 11.063.975 18.765.151 24.868 3.49A15.263 15.263 0 0016 .667C7.532.667.667 7.532.667 16c0 3.304 1.045 6.364 2.823 8.868z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M2.1 9.514a15.386 15.386 0 018.392-7.83c.054.048.107.098.158.15 1.834 1.833.262 3.91-1.988 6.16-2.25 2.251-4.328 3.823-6.161 1.99a3.876 3.876 0 01-.4-.47z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/* -- -- -- -- -- --  */}
                {/* // QUI MANCA DI AGGIUNGERE I DIV CON I NUMERI CHE CI SONO ALL INTENRO DELLE PALLE COLORATE */}
                <div className="frcl-ahb-number-box frcl-ahb-nb-f">3</div>
              </div>
            </div>
          </div>
        </div>
        {/* --- FOOTER / DATI --- */}
        <div className="frcl-ah-footer-container">
          <div className="frcl-ah-footer-sub-container">
            {/* --X -- -- -- DATA -- -- -- X--  */}
            <div
              className={`frcl-ahf-data-container  ${showDetails && "active"}`}
              style={{ display: showDetails ? "block" : "none" }}
            >
              {/* ------------------------------------------ */}
              <div className="frcl-ahf-data-sub-container">
                {/* --- Titles --- */}
                <div className="frcl-ahf-data-prize-pot-wrapper">
                  <div className="frcl-ahf-data-prize-pot-a">
                    <h2 className="frcl-ahf-data-title">Prize pot</h2>
                    <h2 className="frcl-ahf-data-amount">~$127.476</h2>
                    <div className="frcl-ahf-data-subtitle">34,070 CAKE</div>
                  </div>
                  {/* ---   ---   ---   ---   --- */}
                  <div className="frcl-ahf-data-prize-pot-b">
                    Total players this round: <br /> 653
                  </div>
                </div>
                {/* --- Data Components --- */}
                <div className="frcl-ahf-data-main-box">
                  <div className="frcl-ahf-data-description">
                    Match the winning number in the same order to share prizes.
                  </div>
                  {/* --   --   --   --    */}
                  <div className="frcl-ahf-data-component-wrapper">
                    <MatchesDatas
                      matches_data_title={"Match first 1"}
                      matches_data_amount_up={"~$7,197"}
                      matches_data_cakes_number={"2,194 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"1.60 CAKE each"}
                      matches_winning_tickets={"449 Winning Tickets"}
                    />
                    <MatchesDatas
                      matches_data_title={"Match first 3"}
                      matches_data_amount_up={"~$8,337"}
                      matches_data_cakes_number={"894 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"6.85 CAKE each"}
                      matches_winning_tickets={"965 Winning Tickets"}
                    />{" "}
                    <MatchesDatas
                      matches_data_title={"Match first 1"}
                      matches_data_amount_up={"~$17,197"}
                      matches_data_cakes_number={"6194 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"3.20 CAKE each"}
                      matches_winning_tickets={"429 Winning Tickets"}
                    />{" "}
                    <MatchesDatas
                      matches_data_title={"Match first 1"}
                      matches_data_amount_up={"~$3,137"}
                      matches_data_cakes_number={"2,194 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"456.78 CAKE each"}
                      matches_winning_tickets={"1 Winning Tickets"}
                    />{" "}
                    <MatchesDatas
                      matches_data_title={"Match first 2"}
                      matches_data_amount_up={"~$1,974"}
                      matches_data_cakes_number={"2,194 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"81.87 CAKE each"}
                      matches_winning_tickets={"35 Winning Tickets"}
                    />{" "}
                    <MatchesDatas
                      matches_data_title={"Match first 3"}
                      matches_data_amount_up={"~$4,169"}
                      matches_data_cakes_number={"919 CAKE"}
                      // matches_data_amount_down={"~$7,197"}
                      matches_data_cake_each={"13.93 CAKE each"}
                      matches_winning_tickets={"2 Winning Tickets"}
                    />{" "}
                    <MatchesDatas
                      matches_data_title={"Burn"}
                      // matches_data_amount_up={"~$7,197"}
                      matches_data_cakes_number={"2,194 CAKE"}
                      matches_data_amount_down={"~$7,197"}
                      // matches_data_cake_each={"60 CAKE each"}
                      // matches_winning_tickets={"4 Winning Tickets"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* -- -- -- -- BUTTON -- -- -- --  */}
            <div className="frcl-ahf-button-container" onClick={handleClick}>
              <Button
                text="Details"
                type={"noBorderButton"}
                style={{
                  color: "rgb(114, 239, 255)",
                  textDecoration: "none",
                }}
                // onClick={() => setShowDetails(!showDetails)}
              >
                <FaAngleDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="sc-3a5c8d1f-1 sc-32d5f017-0 iUtssi hBHgZr">
  <svg
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    color="text"
    xmlns="http://www.w3.org/2000/svg"
    class="sc-4ba21b47-0 IIbzK"
  >
    <circle cx="16" cy="16" r="16" fill="#FFC43C"></circle>
    <g opacity="0.1" style="mix-blend-mode: multiply;">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.3428 3.13245C28.9191 8.87189 28.5505 17.2575 23.2373 22.5707C17.528 28.28 8.27148 28.28 2.56223 22.5707C2.2825 22.291 2.01648 22.0028 1.76416 21.7068C4.02814 27.3487 9.54881 31.3327 16 31.3327C24.4683 31.3327 31.3332 24.4678 31.3332 15.9995C31.3332 10.6079 28.5504 5.86622 24.3428 3.13245Z"
        fill="black"
      ></path>
    </g>
    <g opacity="0.1" style="mix-blend-mode: multiply;">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.7714 4.18262C30.6309 10.2119 30.2608 19.061 24.661 24.6608C19.0616 30.2602 10.2134 30.6307 4.18408 25.7722C6.99655 29.1689 11.2456 31.3329 16.0001 31.3329C24.4685 31.3329 31.3334 24.468 31.3334 15.9997C31.3334 11.2446 29.1689 6.99508 25.7714 4.18262Z"
        fill="black"
      ></path>
    </g>
    <g style="mix-blend-mode: soft-light;">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z"
        fill="white"
      ></path>
    </g>
    <g style="mix-blend-mode: soft-light;">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.10087 9.51443C3.77283 5.93689 6.78541 3.11142 10.4922 1.68435C10.5461 1.73247 10.5988 1.78231 10.6504 1.83387C12.4839 3.6674 10.912 5.74432 8.66157 7.99477C6.41112 10.2452 4.33429 11.817 2.50076 9.98347C2.3535 9.83621 2.22025 9.67943 2.10087 9.51443Z"
        fill="white"
      ></path>
    </g>
  </svg>
  <div class="sc-6a2c5391-0 iAUwDR">
    <div
      font-size="42px"
      color="text"
      class="sc-c56ebc7d-0 sc-6a2c5391-1 dYDvpe iuiryq"
    >
      3
    </div>
  </div>
</div>;

// -- -- -- -- -- -- -- --


 {
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}


// --------------------
<div class="sc-6a2c5391-0 iAUwDR">
  <div
    font-size="42px"
    color="text"
    class="sc-c56ebc7d-0 sc-6a2c5391-1 dYDvpe iuiryq"
  >
    3
  </div>
</div>; */
}
// -- -- -- -- -- -- -- --
// color: rgb(0, 0, 0);
//     text-shadow: white -0.75px -0.75px 0px, white 0.75px -0.75px 0px, white -0.75px 0.75px 0px, white 0.75px 0.75px 0px;
//     transform: rotate(27deg);
//     // ...................

//     color: var(--colors-text);
//     font-weight: 600;
//     line-height: 1.5;
//     font-size: 42px;
