import React from "react";
import { Button } from "../../buttons/Button";
import "./_rounds-input.scss";

export function RoundsInput() {
  return (
    <div className="rsi-main-container">
      <div className="rsi-sub-container">
        <div className="rsi-input-box-wrapper">
          <h2>Round</h2>
          <input pattern="^[0-9]+$" inputmode="numeric" value="747" />
        </div>
        {/* ------------------------------------------------------------ */}
        <div className="rsi-increment-decrement-box-wrapper">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              className="sc-4ba21b47-0 IIbzK"
              color="text"
              viewBox="0 0 24 24"
            >
              <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
            </svg>
          </button>
          {/* -- -- --  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              className="sc-4ba21b47-0 IIbzK"
              color="text"
              viewBox="0 0 24 24"
            >
              <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path>
            </svg>
          </button>
          {/* -- -- --  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              className="sc-4ba21b47-0 IIbzK"
              color="text"
              viewBox="0 0 24 24"
            >
              <path d="M3 13.184h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.87 4.89H3c-.55 0-1 .45-1 1s.45 1 1 1zM20 5.183a1 1 0 011 1v12a1 1 0 11-2 0v-12a1 1 0 011-1z"></path>
            </svg>
          </button>
          {/* -- -- --  */}
        </div>
      </div>
    </div>
  );
}
