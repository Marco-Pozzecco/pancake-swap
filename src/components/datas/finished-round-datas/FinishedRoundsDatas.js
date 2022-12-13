import React from "react";
import "./_finished-rounds-datas.scss";

export function FinishedRoundsDatas(props) {
  return (
    <div className="frd-main-container">
      <div className="frd-sub-container-a">{props.frd_datas_icon}</div>
      {/* -------------------------------------------------------------------- */}
      <div className="frd-sub-container-b">
        {props.frd_datas_code ? (
          <div className="frd-sc-text frsct-a">{props.frd_datas_code}</div>
        ) : (
          <div className="frd-transparent-placeholder-datas">x</div>
        )}
        {/* -------------------------------------------------------------------- */}
        {props.frd_datas_user ? (
          <div className="frd-sc-text frsct-b">{props.frd_datas_user}</div>
        ) : (
          <div className="frd-transparent-placeholder-datas"></div>
        )}
        {/* -------------------------------------------------------------------- */}
      </div>
    </div>
  );
}
