import React from "react";
// import Home from "../pages/homepage/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ResponsiveNavbar } from "../components/responsive-navbar/ResponsiveNavbar";
import "./layout.scss";
import { ScrollToTop } from "../components/buttons/ScrollToTop";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <ScrollToTop />

      <div className="bottomNavbar">
        <ResponsiveNavbar />
      </div>
    </div>
  );
}
