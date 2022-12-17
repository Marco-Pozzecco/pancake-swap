import React from "react";
import "./_matches-datas.scss";

export default function MatchesDatas(props) {
  return (
    <div className="matches-datas-main-container">
      {props.matches_data_title ? (
        <div className="msds-data-main-title">{props.matches_data_title}</div>
      ) : (
        <div></div>
      )}
      {/* ---------------------------------------------------------- */}
      {props.matches_data_amount_up ? (
        <div className="msds-data-amount">{props.matches_data_amount_up}</div>
      ) : (
        <div></div>
      )}
      {/* ---------------------------------------------------------- */}
      {props.matches_data_cakes_number ? (
        <div className="msds-data-cakes">{props.matches_data_cakes_number}</div>
      ) : (
        <div></div>
      )}
      {/* ---------------------------------------------------------- */}
      {props.matches_data_amount_down ? (
        <div className="msds-data-amount">{props.matches_data_amount_down}</div>
      ) : (
        <div></div>
      )}
      {/* ---------------------------------------------------------- */}
      {props.matches_data_cake_each ? (
        <div className="msds-data-cake-each">
          {props.matches_data_cake_each}
        </div>
      ) : (
        <div></div>
      )}
      {/* ---------------------------------------------------------- */}
      {props.matches_data_winning_tickets ? (
        <div className="msds-data-winning-tickets">
          {props.matches_winning_tickets}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
