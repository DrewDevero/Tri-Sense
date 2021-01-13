import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Merriam() {
    
    const [dictionary, setDictionary] = useState(null);
    const [definition, setDefinition] = useState(null);

    let currentWord;

    useEffect(() => {

        let lookUp = "apple";
        const Merriam_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${lookUp}/`;
        const API_KEY = "?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392";

        async function GetEnglishWord() {
            function getWord() {
                return axios.get(Merriam_URL + API_KEY, {
                    timeout: 2000,
                    })
            }
            function getWordDefinition() {
                return axios.get(Merriam_URL + "def/" + API_KEY, {
                    timeout: 2000,
                    })
            }
            try {
            const res = await axios.all([getWord(), getWordDefinition()])
                const wordRes = res[0];
                const defRes = res[1];
                console.log(wordRes.data);
                console.log(defRes.data);
                setDictionary({ word: wordRes.data })
                setDefinition({ wordDef: defRes.data })
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Two Merriam Webster Dictionary API GET call attempts made")
            }
        }

        GetEnglishWord();
        let currentWord = lookUp;
        return currentWord;

    }, [])

    const logData = () => {
        console.log(dictionary.word);
        console.log(definition.wordDef);
    }

    return(
        <div>
            <p>This is where some words will go.</p>
            <button type="button" onClick={ () => logData() }>Show Dictionary Data</button>
            <h2>{currentWord}</h2>
            <ul>
                {dictionary && dictionary.word.map((info, index) => 
                <li key={index}>{info.fl} {info.def[0].sseq[0][0][1].dt[0][1]}</li>
                )}
                {definition && definition.wordDef.map((info, index) => 
                <li key={index}>{info}</li>
                )}
            </ul>
        </div>
    )
}