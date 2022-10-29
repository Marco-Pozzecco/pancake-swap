import React from "react";
import {Trade} from "./pages/trade/Trade";
import {Earn} from "./pages/earn/Earn";
import {Win} from "./pages/win/Win";
import Home from "./pages/homepage/Home";
import {NoPage} from "./pages/notFound/NotFound404";
import "../src/main.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Nft} from "./pages/NFT/Nft";

export function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="trade" element={<Trade />} />
                        <Route path="earn" element={<Earn />} />
                        <Route path="win" element={<Win />} />
                        <Route path="nft" element={<Nft />} />
                        {/* <Route path="win" element={<extra/>} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}
