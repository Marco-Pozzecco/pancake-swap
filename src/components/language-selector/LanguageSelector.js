import React, {useState} from "react";
import globeSvg from "../../resources/home/navbar/globe-icon.svg";
import {DropdownMenu} from "../dropdown-menu/DropdownMenu";
import "../language-selector/LanguageSelect.scss";

export function LanguageSelector() {
    const [openDropdown, setDropdown] = useState(false);

    return (
        <div className="flex">
            <img
                className="fa-globe"
                src={globeSvg}
                alt="globe icon"
                onMouseOver={() => setDropdown(true)}></img>

            <DropdownMenu
                open={openDropdown}
                elements={[
                    "Arabic",
                    "Chinese",
                    "English",
                    "Français",
                    "Filipino",
                    "German",
                    "Italian",
                    "Ελληνικά",
                    "Magyar",
                    "Nederlands",
                    "Polski",
                    "Русский",
                    "Suomalainen",
                    "Spanish",
                    "Turkish",
                ]}
            />
        </div>
    );
}
