import React, {useState} from "react";
import globeSvg from "../../resources/home/navbar/globe-icon.svg";
import {DropdownMenu} from "../dropdown-menu/DropdownMenu";
import "../language-selector/LanguageSelect.scss";

export function LanguageSelector() {
    const [openDropdown, setDropdown] = useState(false)
    
    const languages =  ["العربية", "Bahasa Indonesia","Chinese", "English", "Français", "Filipino", "German", 
    "Italiano", "Ελληνικά", "Magyar", "Nederlands", "Polski", "Русский", "Suomalainen", 
    "Spanish", "Turkish", 'Tiếng Việt', "简体中文", "繁體中文"];

  return (
    <div className='flex'>
        <img
              className="fa-globe" src={globeSvg} alt="globe icon" 
              onMouseOver={() => setDropdown(true)}></img>
            
            <div className="menu-ul menu-nav dropdown">
            <DropdownMenu  open={openDropdown}
              elements={languages}/>
            </div>
    </div>
  )
}

// const languages =  [{lang:"العربية", code: "AR"}, {lang:"Bahasa Indonesia", code: "ID"},
//                          {lang:"English", code: "EN"},
//                         {lang:"Français", code: "FR"}, {lang:"Filipino", code: "FIL"},
//                         {lang:"German", code: "DE"}, {lang:"Italiano", code: "IT"},
//                         {lang:"Ελληνικά", code: "EL"}, {lang:"Magyar", code: "HU"},
//                         {lang:"Nederlands", code: "NL"}, {lang:"Polski", code: "PL"},
//                         {lang:"Русский", code: "RU"}, {lang:"Suomalainen", code: "FI"},
//                         {lang:"Spanish", code: "SP"}, {lang:"Turkish", code: "TN"},
//                         {lang:"Tiếng Việt", code: "VI"}, {lang:"简体中文", code: "ZH-CN"},    
//                           {lang:"繁體中文", code: "ZH-TW"}];

//   return (
//     <div className='flex'>
//         <img
//               className="fa-globe" src={globeSvg} alt="globe icon" 
//               onMouseOver={() => setDropdown(true)}></img>
            
//             <div className="menu-ul menu-nav dropdown">
//             <DropdownMenu  open={openDropdown}
//               elements={languages.lang}/>
//             </div>
//     </div>
//   )


