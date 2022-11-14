import { createContext } from "react";

// Utilizzare la sintassi const {theme} = useContext(ThemeContext) per ottenere in stringa il tema corrente

const context = {
    theme: '',
    setTheme: () => {}
}

export const ThemeContext = createContext(context);