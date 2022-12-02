import { default as React, default as React } from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

//const ThemeContext = React.createContext("themes-light");

root.render(<App />);
