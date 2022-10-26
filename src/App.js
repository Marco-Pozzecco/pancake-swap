import React from "react";
import Navbar from "./components/navbar/Navbar";
import Trade from "./pages/Trade"
import Earn from "./pages/Earn"
import Win from "./pages/Win"
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout";
import MainBanner from "./layouts/home-main-banner/MainBanner";


function App() {
    return(
        <div>
                {/* <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="trade" element={<Trade/>} />
                    <Route path="earn" element={<Earn/>} />
                    <Route path="win" element={<Win/>} />
                    <Route path="*" element={<NoPage/>} />
                    </Route>
                </Routes>
                </Router> */}

                <MainBanner />


        </div>
        
    );

}
export default App;