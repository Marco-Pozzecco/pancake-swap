import React from "react";
import { Footer } from "../../../components/footer/Footer";
import Subnav from "../../../components/subnav/Subnav";
import { WinLottery } from "../../../layouts/win-lottery/WinLottery";
import "./_lottery.scss";

export function Lottery() {
  return (
    <div className="lottery-main-container">
      <Subnav
        elements={["Trading", "Prediction (BETA)", "Lottery", "Pottery (BETA)"]}
      />
      <div className="sub-container-lottery">
        <WinLottery />
      </div>
      <Footer />
    </div>
  );
}
