import { createContext } from "react";

// Utilizzare la sintassi const {theme} = useContext(ThemeContext) per ottenere in stringa il tema corrente

const selected = {
  option: "",
  setSelected: () => {},
};

export const SelectedOptionContext = createContext(selected);
