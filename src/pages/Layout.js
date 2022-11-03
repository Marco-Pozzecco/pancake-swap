import React from "react";
// import Home from "../pages/homepage/Home";
import {Footer} from "../components/footer/Footer";
import {Navbar} from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";
// import { ResponsiveNavbar } from "../components/responsive-navbar/ResponsiveNavbar";
import Subnav from "../components/subnav/Subnav";

export function Layout() {
    return (
        <div>
            <Navbar />

            <Outlet>
                <Subnav />
            </Outlet>
            <Footer />
            {/* <ResponsiveNavbar /> */}
        </div>
    );
}
