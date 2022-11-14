import { createContext } from "react";

const context = {
    theme: '',
    setTheme: () => {}
}

export const ThemeContext = createContext(context);