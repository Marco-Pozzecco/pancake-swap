import React from "react";
// import "./Navbar.scss"
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <h3>Logo</h3>
            <nav className="navbar">
                
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trade">Trade</Link></li>
                <li><Link to="/earn">Earn</Link></li>  
                <li><Link to="/win">Win</Link>  </li>     
                </ul>   
            </nav> 
            <Outlet></Outlet>
        </>
    )
}

export default Navbar;