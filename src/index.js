import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { Home } from "./pages/homepage/Home";

const root = ReactDOM.createRoot(
    document.querySelector('#root')
);

root.render(<App />);
