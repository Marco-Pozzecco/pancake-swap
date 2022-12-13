import React from "react";
import { Footer } from "../../../components/footer/Footer";
import Subnav from "../../../components/subnav/Subnav";
import { WinPottery } from "../../../layouts/win-pottery/WinPottery";
import "./_pottery.scss";

export function Pottery() {
  return (
    <div className="pottery-main-container">
      <Subnav
        elements={["Trading", "Prediction (BETA)", "Lottery", "Pottery (BETA)"]}
      />
      <div className="sub-container-lottery">
        <WinPottery />
      </div>
      <Footer />
    </div>
  );
}
