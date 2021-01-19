import React, { useEffect } from "react";
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

  let thisWindowName = document.defaultView.location.pathname;

  useEffect(() => {

      const nav = document.getElementsByTagName("span");

      nav[0].onclick = stopWebcam;
      nav[1].onclick = stopWebcam;
      nav[2].onclick = stopWebcam;

  function stopWebcam() {
      if(thisWindowName === "/Home") {
        console.log(thisWindowName);
        navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then(mediaStream => {
          const tracks = mediaStream.getTracks();
          tracks[0].stop();
        })
      }
  }

  }, [thisWindowName])

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