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
import "./train_test/ImageTesting";

export default function App() {

  return (
        <Router>
            <div className="general-spacing">
              <nav className="center-text">
                <span className="general-spacing">
                    <Link to="/Home">Home</Link>
                </span>
                <span className="general-spacing">
                    <Link to="/ASL">ASL Chat App</Link>
                </span>
                <span className="general-spacing">
                    <Link to="/Merriam">Pronunciation App</Link>
                </span>
              </nav>

              <Switch>
                <Route path="/ASL">
                  <ASL />
                </Route>
                <Route path="/Merriam">
                  <Merriam />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        </Router>
  );
}