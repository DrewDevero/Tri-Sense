import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Merriam() {
    
    const [dictionary, setDictionary] = useState(null);
    const [currentWord, setCurrentWord] = useState("apple");
    const Merriam_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = "?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392";

    useEffect(() => {

        const searchWord = "apple";
        const Merriam = Merriam_URL;
        const API = API_KEY;

        async function GetEnglishWord() {
            try {
            const res = await axios.get(Merriam + searchWord + API, {
                    timeout: 2000,
                    })
                console.log(res.data);
                setDictionary({ word: res.data })
            } catch (err) {
                console.error(err);
            } finally {
                console.log("A Merriam Webster Dictionary API GET call attempt was made")
            }
        }

        GetEnglishWord();

    }, [Merriam_URL, API_KEY])

    const handleChange = (e) => {
        setCurrentWord(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.get(Merriam_URL + currentWord + API_KEY, {
                    timeout: 2000,
                    })
                console.log(res.data);
                setDictionary({ word: res.data })
            } catch (err) {
                console.error(err);
            } finally {
                console.log("A Merriam Webster Dictionary API GET call attempt was made")
            }
        }

    return(
        <div className="siteBackground">
            <form className="basicMargin" 
                onChange={ handleChange }
                onSubmit={ handleSubmit }
            >
                <input type="text" placeholder="search word"></input>
                <input type="submit" value="Show Dictionary Data"></input>
            </form>
            <div className="wordBlock">
                <h2 className="word">{currentWord}:</h2>
                {dictionary && 
                    <div>
                        <p className="partOfSpeech">({dictionary.word[0].fl})</p> 
                        {/* <li>{dictionary.word[0].def[0].sseq[0][0][1].dt[0][1]}</li> */}
                    </div>
                }
            </div>
        </div>
    )
}