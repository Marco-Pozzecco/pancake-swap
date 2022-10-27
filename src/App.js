import React from "react";
import Navbar from "./components/navbar/Navbar";
import Trade from "./pages/trade/Trade"
import Earn from "./pages/earn/Earn"
import Win from "./pages/win/Win"
import Home from "./pages/Home";
import NoPage from "./pages/notFound/NotFound404";
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout";


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
        </div>
        
    );

}
export default App;