import React from "react";
import "./_moving-ticket.scss";

export function MovingTicket(props) {
  return (
    <div className="moving-ticket-main-container">
      <button className="moving-ticket-button">
        {props.moving_ticket_title}
      </button>

      {/* -------------------------------------------- */}
      <div className="moving-ticket-sub-container">
        {props.moving_ticket_svg_ticket_color}
      </div>
    </div>
  );
}
