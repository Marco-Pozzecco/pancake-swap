import React from "react";
import "./how-to-play-wn.scss";
import { HowToPlayCard } from "./../../components/card/HowToPlayCard";
import { PrizeFoundsCard } from "./PrizeFoundsCard";
import { StillGotQuestions } from "./StillGotQuestions";
import { WinningCriteriaCard } from "./WinningCriteriaCard";
import { WinningCriteriaText } from "./WinningCriteriaText";
import { GreyLine } from "../../components/lines/GreyLine";
import { DataTextGraph } from "../../components/text-components/data-text-graph/DataTextGraph";
import { DataCardGraph } from "../../components/card/data-card-graph/DataCardGraph";

export function HowToPlayWN() {
  return (
    <section className="htp-section">
      <div className="htp-main-container">
        <div className="htp-sub-container">
          {/* ----------------- */}
          <div className="htp-content htpc-1">
            <h2 className="htpc-1-title">How to Play</h2>
            <p className="htpc-1-text-a">
              If the digits on your tickets match the winning numbers in the
              correct order, you win a portion of the prize pool.
            </p>
            <p className="htpc-1-text-b">Simple!</p>
          </div>
          {/* ----------------- */}
          <div className="htp-content htpc-2">
            <HowToPlayCard
              htpsc_step="STEP 1"
              htpsc_title="Buy Tickets"
              htpsc_text="Prices are set when the round starts, equal to 5 USD in CAKE per ticket."
            />
            <HowToPlayCard
              htpsc_step="STEP 2"
              htpsc_title="Wait for the Draw"
              htpsc_text="There is one draw every day alternating between 0 AM UTC and 12 PM UTC."
            />
            <HowToPlayCard
              htpsc_step="STEP 3"
              htpsc_title="Check for Prizes"
              htpsc_text="Once the round’s over, come back to the page and check to see if you’ve won!"
            />
          </div>

          {/* ----------------- */}
          <GreyLine />
          {/* ----------------- */}

          <div className="htp-content htpc-3">
            <div className="htpc-3-text">
              <WinningCriteriaText />
            </div>
            <div className="htpc-3-card">
              <WinningCriteriaCard />
            </div>
          </div>

          {/* ----------------- */}
          <GreyLine />
          {/* ----------------- */}

          <div className="htp-content htpc-4">
            <div className="htpc-4-text-wrapper">
              <div className="htpc-4-text-title-box">
                <h2>Prize Funds</h2>
              </div>
              <div className="htpc-4-text-box">
                <DataTextGraph
                  dtg_introduction={
                    "The prizes for each lottery round come from three sources:"
                  }
                  dtg_sub_title_a={"Ticket Purchases"}
                  dtg_sub_title_b={"Rollover Prizes"}
                  dtg_sub_title_c={"CAKE Injections"}
                  // ---------
                  dtg_list_a={
                    "100% of the CAKE paid by people buying tickets that round goes back into the prize pools."
                  }
                  dtg_list_b={
                    "After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools."
                  }
                  dtg_list_c={
                    "An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to CAKE Tokenomics"
                  }
                />
              </div>
            </div>
            <div className="htpc-4-card">
              <DataCardGraph
                //IMMAGINE DEL GRAFICO
                data_graph_image={
                  <svg
                    viewBox="0 0 103 105"
                    width="100px"
                    height="100px"
                    color="text"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-4ba21b47-0 IIbzK"
                  >
                    <svg
                      width="103"
                      height="105"
                      viewBox="0 0 403 405"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="201.5"
                        cy="202.5"
                        rx="200.5"
                        ry="199.5"
                        transform="rotate(-90 201.5 202.5)"
                        fill="#BDC2C4"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                      ></ellipse>
                      <path
                        d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542C404.255 180.811 404.255 224.189 391.236 264.458C378.217 304.727 352.847 339.82 318.763 364.708C284.679 389.596 243.63 403 201.5 403C159.37 403 118.321 389.596 84.2368 364.708C50.1527 339.82 24.7832 304.727 11.7642 264.458C-1.25475 224.189 -1.25475 180.811 11.7642 140.542L201.5 202.5L201.5 2.00002Z"
                        fill="#D750B2"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542C404.255 180.811 404.255 224.189 391.236 264.458C378.217 304.727 352.847 339.82 318.763 364.708L201.5 202.5L201.5 2.00002Z"
                        fill="#A881FC"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921C352.847 65.1798 378.217 100.273 391.236 140.542L201.5 202.5L201.5 2.00002Z"
                        fill="#3AF3F8"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C243.63 2.00002 284.679 15.4044 318.763 40.2921L201.5 202.5L201.5 2.00002Z"
                        fill="#10AC87"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C218.235 2.00002 234.904 4.11632 251.114 8.29909L201.5 202.5L201.5 2.00002Z"
                        fill="#93D45A"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C222.435 2.00002 243.239 5.3116 263.149 11.8132L201.5 202.5L201.5 2.00002Z"
                        fill="#8FD74F"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C205.679 2.00002 209.856 2.13198 214.027 2.39565L201.5 202.5L201.5 2.00002Z"
                        fill="#C4C4C4"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M201.5 2.00002C209.859 2.00002 218.211 2.52807 226.504 3.58101L201.5 202.5L201.5 2.00002Z"
                        fill="#FFD307"
                        stroke="#0E0E0E"
                        stroke-opacity="0.05"
                        stroke-width="2"
                        stroke-linejoin="round"
                      ></path>
                      <ellipse
                        opacity="0.2"
                        cx="201.5"
                        cy="202.5"
                        rx="200.5"
                        ry="199.5"
                        transform="rotate(-90 201.5 202.5)"
                        stroke="#280D5F"
                        stroke-width="3"
                      ></ellipse>
                    </svg>
                  </svg>
                }
                //TITOLI----------------------------------------
                dg_main_title_a={"DIGITS MATCHED"}
                dg_main_title_b={"PRIZE POOL ALLOCATION"}
                //----------------------------------------
                // dcg_data_name_prova={"titolo"}
                // dcg_data_percentage_prova={"percentuale"}
                //------------
                dcg_data_name_1={"Matches first 1"}
                dcg_data_percentage_1={"2%"}
                // -----------
                dcg_data_name_2={"Matches first 2"}
                dcg_data_percentage_2={"3%"}
                // -----------
                dcg_data_name_3={"Matches first 3"}
                dcg_data_percentage_3={"5%"}
                // -----------
                dcg_data_name_4={"Matches first 4"}
                dcg_data_percentage_4={"10%"}
                // -----------
                dcg_data_name_5={"Matches first 5"}
                dcg_data_percentage_5={"20%"}
                // -----------
                dcg_data_name_6={"Matches all 6"}
                dcg_data_percentage_6={"4%"}
                // -----------
                dcg_data_name_7={"Burn Pool"}
                dcg_data_percentage_7={"20%"}
                // -----------
              />
            </div>
          </div>

          {/* ----------------- */}
          <GreyLine />
          {/* ----------------- */}

          <div className="htp-content htpc-5">
            <StillGotQuestions />
          </div>
        </div>
      </div>
    </section>
  );
}

// #######################################################

//
// ⇓⇓ NON CANCELLARE ⇓⇓
//
//

// style={...props.outerCardStyle}
// style={...props.innerCardStyle}
// // -------------------
// <Card outerCardStyle={{}}>
//   {/* -------------- */}
//   <Card outerCardClasses={"outercardStyle2"}
//   // --------------------
//   <div className={...outerCardClasses + " blablabla"}>
//     {/* ----------------- */}
