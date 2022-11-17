import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Perpetual } from "./pages/perpetual/Perpetual";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <StrictMode>
        <Perpetual />
    </StrictMode>
);
