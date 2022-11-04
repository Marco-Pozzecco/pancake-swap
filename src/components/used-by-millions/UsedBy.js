import svg14 from "../../resources/svgs/svgexport-14.svg";
import svg15 from "../../resources/svgs/svgexport-15.svg";
import svg16 from "../../resources/svgs/svgexport-16.svg";
import svg17 from "../../resources/svgs/svgexport-17.svg";
import "./_usedby.scss";

export function UsedBy() {
  return (
    <div className="usedby_container">
      <div className="usedby_usedtop">
        <img src={svg14} alt="" />
        <h2>
          Used by millions.
          <br></br>
          Trusted with billions.
        </h2>
        <p>
          PancakeSwap has the most users of any decentralized platform, ever.
          <br></br>
          And those users are now entrusting the platform with over $3.5 billion
          in funds.
        </p>
        <span>Will you join them?</span>
      </div>

      <div className="usedby_usedbottom">
        <div className="usedby_card">
          <div className="usedby_card_top">
            <img src={svg15} alt="" />
          </div>
          <div className="usedby_card_bottom">
            <h2>
              2.3 million <span id="usedby_diff1">users</span>
            </h2>
            <p>in the last 30 days</p>
          </div>
        </div>
        <div className="usedby_card">
          <div className="usedby_card_top">
            <img src={svg16} alt="" />
          </div>
          <div className="usedby_card_bottom">
            <h2>
              19 million <p id="usedby_diff2">trades</p>
            </h2>
            <p>made in the last 30 days</p>
          </div>
        </div>
        <div className="usedby_card">
          <div className="usedby_card_top">
            <img src={svg17} alt="" />
          </div>
          <div className="usedby_card_bottom">
            <h2>
              $3.5 billion <p id="usedby_diff3">staked</p>
            </h2>
            <p>Total value Locked</p>
          </div>
        </div>
      </div>
    </div>
  );
}