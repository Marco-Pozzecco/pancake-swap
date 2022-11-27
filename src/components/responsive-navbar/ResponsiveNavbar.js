import React from "react";
import "./responsiveNavbar.scss";
import tradeIcon from "../../resources/home/responsive-navbar/trade-icon.svg";
import winIcon from "../../resources/home/responsive-navbar/win.svg";
import earnIcon from "../../resources/home/responsive-navbar/earn-icon.svg";
import nftIcon from "../../resources/home/responsive-navbar/nft.svg";
import dotIcon from "../../resources/home/responsive-navbar/dot.svg";
import { NavLink } from "react-router-dom";
import exitIcon from "../../resources/home/cake/exit-icon.svg";

export function ResponsiveNavbar() {
  return (
    <div>
      <div className="bottom-navbar">
        <ul className="menu-ul">
          <li className="liCenter">
            <NavLink to="/swap">
              <ul>
                <li>
                  <NavLink to="/swap">Swap</NavLink>
                </li>
                <li>
                  <NavLink to="/limit">Limit</NavLink>
                </li>
                <li>
                  <NavLink to="/liquidity">Liquidity</NavLink>
                </li>
                {/* <li>
                    <a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light" target="blank">
                      Perpetual
                    </a>
                    <img src={exitIcon} alt="exit icon" />
                  </li>
                  <li>
                    <a href="https://bridge.pancakeswap.finance/" target="blank">
                      Bridge
                    </a>
                    <img src={exitIcon} alt="exit icon" />
                  </li> */}
              </ul>
              <div>
                <img src={tradeIcon} alt="trade-icon" />
                <p>Trade</p>
              </div>
            </NavLink>
          </li>
          <li className="liCenter">
            <NavLink to="/farms">
              <ul>
                <li>
                  <NavLink to="/farms">Farms</NavLink>
                </li>
                <li>
                  <NavLink to="/pools">Pools</NavLink>
                </li>
              </ul>
              <div>
                <img src={earnIcon} alt="trade-icon" />
                <p>Earn</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/trading">
              <ul>
                <li>
                  <NavLink to="/trading">Trading Competition</NavLink>
                </li>
                <li>
                  <NavLink to="/prediction">Prediction (Beta)</NavLink>
                </li>
                <li>
                  <NavLink to="/lottery">Lottery</NavLink>
                </li>
                <li>
                  <NavLink to="/pottery">Pottery</NavLink>
                </li>
              </ul>
              <div>
                <img src={winIcon} alt="trade-icon" />
                <p>Win</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/overview">
              <ul>
                <li>
                  <NavLink to="/overview">Overview</NavLink>
                </li>
                <li>
                  <NavLink to="/collections">Collections</NavLink>
                </li>
                <li>
                  <NavLink to="/activity">Activity</NavLink>
                </li>
              </ul>
              <div>
                <img src={nftIcon} alt="trade-icon" />
                <p>NFT</p>
              </div>
            </NavLink>
          </li>
          <li className="liCenter">
            <NavLink to="/info">
              <ul>
                <li>
                  <NavLink to="info">Info</NavLink>
                </li>
                <li>
                  <NavLink to="ifo">IFO</NavLink>
                </li>
                <li>
                  <NavLink to="voting">Voting</NavLink>
                </li>
                <li className="line-dd">
                  <NavLink to="leaderboard">Leaderboard</NavLink>
                </li>
                <li>
                  <a href="https://medium.com/pancakeswap" target="blank">
                    Blog
                  </a>
                  <img src={exitIcon} alt="exit icon"></img>
                </li>
                <li>
                  <a href="https://docs.pancakeswap.finance" target="blank">
                    Docs
                  </a>
                  <img src={exitIcon} alt="exit icon"></img>
                </li>
              </ul>
              <div>
                <img src={dotIcon} alt="trade-icon" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
