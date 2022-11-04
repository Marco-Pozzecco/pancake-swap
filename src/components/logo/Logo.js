import React from 'react'
import logo from "../../resources/home/navbar/logo_black.svg";
import logoWhite from "../../resources/home/navbar/logo_white.svg";

export default function Logo(src) {
    //const  [theme, setTheme] = useState()

    let themeClass = document.body.className
    
    

   
  return (
    <div>
       {/* { themeClass === 'theme-dark' ?  <img src={logoWhite} alt="main-logo" id="main-logo"></img> : */}
        <img src={src} alt="main-logo" id="main-logo"></img>
        
    </div>
  )
}
