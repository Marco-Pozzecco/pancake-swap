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
                <div className="frcl-ahb-number-box frcl-ahb-nb-f">3</div>
              </div>
            </div>
          </div>
        </div>
        {/* --- FOOTER / DATI --- */}
        <div className="frcl-ah-footer-container">
          <div className="frcl-ah-footer-sub-container">
            {/* //////////////////////////////////////////////////////////////////////////// */}

            <div className="frcl-ah-footer-sc-all-datas">
              {/* -- -- Data Titles -- --  */}
              <div className="frcl-ahf-sc-main-box-datas">
                <div className="frcl-ahf-sc-main-datas-title-box">
                  <div className="frcl-ahf-scd-title-box frcl-ahf-scdt-box-a">
                    <h2>Prize pot</h2>
                    <h2>~$77.915</h2>
                    <div>22,979 CAKE</div>
                  </div>
                  {/* -   -   -    -  */}
                  <div className="frcl-ahf-scd-title-box frcl-ahf-scdt-box-b">
                    Total players this round: 310
                  </div>
                </div>
                {/* -- -- Data and Description container -- --  */}
                <div className="frcl-ahf-sc-main-datas-box">
                  <div className="frcl-ahf-sc-main-datas-description">
                    Match the winning number in the same order to share prizes.
                  </div>
                  {/* ----------------------DATA COMPONENT CONTAINER------------------------------ */}
                  <div className="frcl-ahf-sc-main-data-components-wrapper">
                    <div>data</div>
                    <div>data</div>
                    <div>data</div>

                    <div>data</div>
                    <div>data</div>
                    <div>data</div>
                    <div>data</div>
                    <div>data</div>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////// */}
            {/* -- -- -- -- BUTTON -- -- -- --  */}
            <div className="frcl-ahf-button-container" onClick={handleClick}>
              <Button
                text="Details"
                type={"noBorderButton"}
                style={{
                  color: "rgb(114, 239, 255)",
                  textDecoration: "none",
                }}
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
