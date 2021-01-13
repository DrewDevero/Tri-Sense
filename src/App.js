import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Merriam from "./Merriam";
import "./App.css";

const testGreetings = ["howdy", "what's up", "hey there"]

const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"

export default function App() {
  const [words, setWords] = useState(null);

  useEffect(() => {
    setWords("Hello")
    console.log("loaded")
  }, []);

  const changeGreeting = () => {
    let randomGreetingSelection = Math.floor(Math.random() * 3);
    setWords(testGreetings[randomGreetingSelection]);
  }


  return (
    <div className="generalSpacing">
      <header>
          <h1 className="title">tri-sense</h1>
      </header>
          <p>{words}</p>
          <button type="button" onClick={ () => changeGreeting() }>Change hello text</button>
          <div className="generalSpacing">
            <a href={ ASL_Alphabet } terget="_blank" alt="American Sign Language Alphabet">ASL Alphabet</a>
          </div>
          <Merriam />
    </div>
  );
}