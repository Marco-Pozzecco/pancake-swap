import React, {useState} from "react";

function HandleThemeColor(checked) {
    const [theme, setTheme] = useState();

    setTheme(checked);
    //console.log(theme)
    if (theme) {
        console.log("theme-dark");
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
        //chk3.checked = false;
    } else if (theme === true) {
        console.log("theme-light");
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
        //chk3.checked = true;
    }

    return <div></div>;
}

export default HandleThemeColor;
