import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { ThemeContext } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

//const ThemeContext = React.createContext("themes-light");

root.render(<App />);
