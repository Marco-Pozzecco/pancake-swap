import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { ThemeContext } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <ThemeContext.Provider>
        <App />
    </ThemeContext.Provider>
);
