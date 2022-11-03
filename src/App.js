import React from "react";
<<<<<<< HEAD
import Navbar from "./components/navbar/Navbar";
import Trade from "./pages/Trade"
import Earn from "./pages/Earn"
import Win from "./pages/Win"
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout";
import { ButtonAG, ButtonOB, ButtonST, ButtonOSvg } from "./components/buttons/Buttons";
=======
import {Trade} from "./pages/trade/Trade";
import {Earn} from "./pages/earn/Earn";
import {Win} from "./pages/win/Win";
import Home from "./pages/homepage/Home";
import {NoPage} from "./pages/notFound/NotFound404";
import "../src/main.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Nft} from "./pages/nft/Nft";
>>>>>>> 402726ad0be2e3

export function App() {
    return (
        <div>
<<<<<<< HEAD


                {/* <Router>
=======
            <Router>
>>>>>>> 402726ad0be2e3
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
<<<<<<< HEAD
                </Router> */}

               <ButtonAG/>
               <ButtonOB/>
               <ButtonST/>
               <ButtonOSvg/>
               


            
=======
            </Router>
>>>>>>> 402726ad0be2e3
        </div>
    );
}
