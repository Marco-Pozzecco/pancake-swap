import React from "react";
import Trade from "./pages/Trade"
import Earn from "./pages/Earn"
import Win from "./pages/Win"
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css"
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom'
import Layout from "./pages/Layout";
 import Footer from "../src/components/footer/Footer"


function App() {
    return(
        <div>
                <Router>
                <Routes>
                    <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="trade" element={<Trade/>} />
                    <Route path="earn" element={<Earn/>} />
                    <Route path="win" element={<Win/>} />
                    <Route path="*" element={<NoPage/>} />
                    </Route>
                </Routes>
                </Router>
                <Outlet></Outlet>
                <Footer/>
        </div>
        
    );

}
export default App;