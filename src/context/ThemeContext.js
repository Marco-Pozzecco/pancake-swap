import { createContext } from "react";

function setThemeContext() {
    let theme = document.body.classList;
    return theme;
}

export const ThemeContext = createContext(setThemeContext());