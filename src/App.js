import React from "react";
import Navbar from "./components/navbar/Navbar";
import Trade from "./pages/Trade"
import Earn from "./pages/Earn"
import Win from "./pages/Win"
import "./App.css"
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'


function App() {
    return(
        <header>
            
            <Router>
                <Navbar/>
                <Route path="/trade" component={Trade}></Route>
                <Route path="/earn" component={Earn}></Route>
                <Route path="/earn" component={Win}></Route>

            </Router>
        </header>

    );

}
export default App;