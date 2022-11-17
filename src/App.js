import React from "react";
// --------------------------------------------
import {Swap} from "./pages/trade/Swap";
import {Limit} from './pages/trade/limit/Limit';
import {Liquidity} from './pages/trade/liquidity/Liquidity'
import {Farms} from "./pages/earn/Farms";
import {TradingCompetition} from "./pages/win/TradingCompetition";
import Home from "./pages/homepage/Home";
import {NoPage} from "./pages/notFound/NotFound404";
import "../src/main.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Overview} from "./pages/nft/Overview";
// ---------------------------------------------------

// import "./App.css"

import { Pools } from "./pages/earn/pools/Pools";
import {Collections} from "./pages/nft/collections/Collections";
import { Activity } from "./pages/nft/activity/Activity";
import { Lottery } from "./pages/win/lottery/Lottery";
import {Info} from "./pages/info/Info";
import { Ifo } from "./pages/info/ifo/Ifo";
import { Voting } from "./pages/info/voting/Voting";
import LeaderBoard from "./pages/info/leaderboard/LeaderBoard";

export function App() {
    return (
        <div>
            <Router>

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home /> } />
                        <Route path="swap" element={<Swap />} />
                            <Route path='limit' element={<Limit/>}/>
                            <Route path='liquidity' element={<Liquidity/>}/>
                        <Route path="farms" element={<Farms />} />
                            <Route path="pools" element={<Pools />} />
                        <Route path="trading" element={<TradingCompetition />} />
                            <Route path="lottery" element={<Lottery />} />
                            
                        <Route path="overview" element={<Overview />} />
                            <Route path="collections" element={<Collections />} />
                            <Route path="activity" element={<Activity />} />
                        <Route path="info" element={<Info />} />
                            <Route path="ifo" element={<Ifo />} />
                            <Route path="voting" element={<Voting />} />
                            <Route path="leaderboard" element={<LeaderBoard />} />
                        {/* <Route path="win" element={<extra/>} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>

                



        </div>
    );
}
