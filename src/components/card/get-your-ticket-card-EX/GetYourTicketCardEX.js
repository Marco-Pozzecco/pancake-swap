import React from "react";
import "./_get-your-ticket-cardEX.scss";

export function GetYourTickCardEX() {
  const [showDetails, setShowDetails] = React.useState(false);

  const svgPath =
    "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z";

  return (
    <div className="gyt-main-container">
      <div className="gyt-sub-container">
        <div className="gyt-card-upper-section">
          <div className="left-upper-section">Next Draw</div>
          <div className="right-upper-section">
            #734 | Draw: Dec 1, 2022, 1:00 PM
          </div>
        </div>

        <div className="card-middle-section">
          <div className="middle-left">
            <div className="middle-left-subsection">Prize Pot</div>
            <div className="middle-left-subsection">Your Tickets</div>
          </div>

          <div className="middle-right">
            <div className="middle-right-subsection">
              <div className="right-up-content">
                <div className="highlighted">~$86,172</div>
                <div>21,290 CAKE</div>
              </div>
            </div>

            <div className="middle-right-subsection">
              <button className="butt">Buy Tickets</button>
            </div>
          </div>
        </div>
        <div
          className={`hidden-section-body-row ${showDetails && "active"}`}
          style={{
            height: 253,
            width: 754,
            backgroundColor: "black",
            padding: 24,
            display: showDetails ? "block" : "none",
          }}
        >
          <div
            className="text-in-black-section"
            style={{ color: "white", marginBottom: 24 }}
          >
            Match the winning number in the same order to share prizes. Current
            prizes up for grabs:
          </div>
          <div className="hidden-section-body-row" style={{ display: "flex" }}>
            <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div>
            <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div>
            <div
              className="box-in-black-section"
              style={{ color: "white", width: 174 }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div>
            <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div>
          </div>
          <div className="hidden-section-body-row" style={{ display: "flex" }}>
            {/* <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div> */}

            {/* <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div> */}

            {/* <div
              className="box-in-black-section"
              style={{ color: "white", width: 174 }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div> */}

            {/* <div
              className="box-in-black-section"
              style={{ width: 174, color: "white" }}
            >
              <div style={{ height: 24 }}>Match first 1</div>
              <div style={{ height: 30 }}>25273 cake</div>
              <div style={{ height: 18 }}>1.733</div>
            </div> */}
          </div>
        </div>
        <div className="card-bottom-section">
          <div className="bottom-content">
            Details
            <a href="#" onClick={() => setShowDetails(!showDetails)}>
              <svg width="32" height="32" viewBox="0 0 38 38">
                <g fill="aqua">
                  <path d={svgPath} />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
