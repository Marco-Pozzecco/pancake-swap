import React from "react";
import "./Navbar.scss"
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <header>
            <h3>Logo</h3>
            <nav className="navbar">
                {/* <a href="">Trade</a>
                <a href="">Earn</a>
                <a href="">Win</a>
                <a href="">NFT</a>
                <a href="">...</a>    */}
                <Link to="/trade">Trade</Link>{" "} 
                <Link to="/earn">Earn</Link>{" "}  
                <Link to="/win">Win</Link>{" "}            
            </nav> 

        </header>
    )
}

export default Navbar;