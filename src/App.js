import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from "./Home";
import ASL from "./ASL";
import Merriam from "./Merriam";
import "./App.css";

export default function App() {

  return (
        <Router>
            <div className="generalSpacing">
              <nav className="centerText">
                <span className="generalSpacing">
                    <Link to="/Home">Home</Link>
                </span>
                <span className="generalSpacing">
                    <Link to="/ASL">ASL Chat App</Link>
                </span>
                <span className="generalSpacing">
                    <Link to="/Merriam">Dictionary Lookup App</Link>
                </span>
              </nav>

              <Switch>
                <Route path="/Home">
                  <Home />
                </Route>
                <Route path="/ASL">
                  <ASL />
                </Route>
                <Route path="/Merriam">
                  <Merriam />
                </Route>
              </Switch>
            </div>
        </Router>
  );
}