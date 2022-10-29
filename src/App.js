import React from "react";
import { Trade } from "./pages/trade/Trade"
import { Earn } from "./pages/earn/Earn"
import Win from "./pages/win/Win"
import Home from "./pages/homepage/Home";
import NoPage from "./pages/notFound/NotFound404";
import "../src/main.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from "./pages/Layout";
// import {Footer} from "../src/components/footer/Footer"


export function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="trade" element={<Trade />} />
                        <Route path="earn" element={<Earn />} />
                        <Route path="win" element={<Win />} />
                        {/* <Route path="win" element={<Nft/>} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>

            {/* <Home/> */}
            {/* <Footer/> */}
        </>
    );

}

