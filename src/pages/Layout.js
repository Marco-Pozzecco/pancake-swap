import React from "react";
// import Home from "../pages/homepage/Home";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ResponsiveNavbar } from "../components/responsive-navbar/ResponsiveNavbar";
import './layout.scss';


export function Layout() {
   

  return (
    <div>
      
      <Navbar /> 
      <Outlet></Outlet>
      <Footer />
      
      <div className="bottomNavbar"><ResponsiveNavbar /></div>

    </div>
  );
}
