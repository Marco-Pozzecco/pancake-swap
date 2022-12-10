import React from "react";
import { GreyLine } from "../../components/lines/GreyLine";
import { DataTextGraph } from "../../components/text-components/data-text-graph/DataTextGraph";
import { DataCardGraph } from "../../components/card/data-card-graph/DataCardGraph";
import "./_split-breakdown.scss";

export function SplitBreakdown() {
  return (
    <section className="sb-main-container">
      <div className="sb-sub-container">
        <h2 className="sb-title">Split Breakdown</h2>
        <div className="sb-data-wrapper">
          <div className="sb-data-text-wrapper">
            <DataTextGraph
              dtg_introduction={"The staking rewards of funds"}
              dtg_sub_title_a={"Prize Pool (80%)"}
              dtg_sub_title_b={"Rewards (20%)"}
              dtg_sub_title_c={"Fees (8%)"}
              dtg_list_a={"80% of staking rewards from the funds deposited"}
              dtg_list_b={"20% of the staking rewards from the funds deposited"}
              dtg_list_c={
                "8% of the prize pot distributed each week will be charged as fees"
              }
            />
          </div>
          <div className="sb-data-graph-wrapper">
            <DataCardGraph
              //----------------------------------------
              data_graph_image={
                <img src="https://pancakeswap.finance/images/pottery/chart.svg" />
              }
              //----------------------------------------
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
        <div className="sb-text-wrapper">
          <p>
            Since the rewards from lock-staking are only distributed at the end
            of the duration, the prize pool to be distributed in each of the 10
            weeks upon deposit is borrowed from the CAKE treasury based on the
            estimated APY. The rewards at the end of the duration from the
            deposit will be used to repay the treasury and to distribute the 20%
            staking rewards. Because the APY may change over the duration based
            on other deposits and their lock-periods in the lock CAKE pool,
            there may be a small deviance from the above percentages specified
            (+/- 10%). But, ultimately all staking rewards net of the Pottery
            fees will be returned to depositors through prize pool or rewards --
            the expected value is the same.
          </p>
        </div>
        <GreyLine />
      </div>
    </section>
  );
}
