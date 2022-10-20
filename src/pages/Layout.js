import React from "react";
import "../components/navbar/Navbar.scss"

import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
    return(
        <>
            {/* <h3>Logo</h3> */}
            <li><Link to="/">Pancake Swap</Link></li>
            <nav className="menu-ul menu-nav">
                
                <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/trade">Trade</Link></li>
                <li><Link to="/earn">Earn</Link></li>  
                <li><Link to="/win">Win</Link>  </li>     
                </ul>   
            </nav> 
            <Outlet></Outlet>
        </>
    )
}

export default Layout;