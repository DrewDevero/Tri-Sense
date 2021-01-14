import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Merriam() {
    
    const [dictionary, setDictionary] = useState(null);
    const [currentWord, setCurrentWord] = useState("apple");
    const [pronunciationSource, setPronunciationSource] = useState("https://media.merriam-webster.com/audio/prons/en/us/mp3/a/apple001.mp3");
    const Merriam_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = "?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392";
    /* let showDefinition;
    if(dictionary !== null && dictionary.word[0].def[0].sseq[0][0][1].dt[0][1] !== undefined) {
        showDefinition = <li>{dictionary.word[0].def[0].sseq[0][0][1].dt[0][1]}</li>
    } else if (dictionary !== null && dictionary.word[0].def[0].sseq[0][0][1].dt[0][1] === undefined) {
        showDefinition = <li>{dictionary.word[0].def[0].sseq[0][0][1].sense.dt[0][1]}</li>
    } */

    useEffect(() => {

        const searchWord = currentWord;
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

    }, [Merriam_URL, API_KEY, currentWord, pronunciationSource])


    const handleChange = (e) => {
        e.preventDefault();
        setCurrentWord(e.target.value || "a")
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.get(Merriam_URL + currentWord + API_KEY, {
                    timeout: 2000,
                    })
                console.log(res.data);
                setDictionary({ word: res.data })
                setPronunciationSource(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${dictionary.word[0].hwi.prs[0].sound.audio[0]}/${dictionary.word[0].hwi.prs[0].sound.audio}.mp3`)
                console.log(pronunciationSource.toString())
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
                {dictionary && 
                <div>
                <h2 className="word">{dictionary.word[0].hwi.hw}:</h2>
                    <div>
                        <p className="partOfSpeech">({dictionary.word[0].fl})</p> 
                        {/* { showDefinition } */}
                    </div>
                    <audio controls> 
                        {pronunciationSource && <source src={ pronunciationSource } type="audio/mp3" />}
                    </audio>
                </div>
                }
            </div>
        </div>
    )
}