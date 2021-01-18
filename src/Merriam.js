import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Merriam() {
    
    const [dictionary, setDictionary] = useState(null);
    const [currentWord, setCurrentWord] = useState(null);
    const [displayWord, setDisplayWord] = useState(null);
    const [pronunciationSource, setPronunciationSource] = useState("https://media.merriam-webster.com/audio/prons/en/us/mp3/a/apple001.mp3");
    const Merriam_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = "?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392";
    const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"
    const pronounce = useRef();
    /* let showDefinition;
    if(dictionary !== null && dictionary.word[0].def[0].sseq[0][0][1].dt[0][1] !== undefined) {
        showDefinition = <li>{dictionary.word[0].def[0].sseq[0][0][1].dt[0][1]}</li>
    } else if (dictionary !== null && dictionary.word[0].def[0].sseq[0][0][1].dt[0][1] === undefined) {
        showDefinition = <li>{dictionary.word[0].def[0].sseq[0][0][1].sense.dt[0][1]}</li>
    } */

    useEffect(() => {

        async function GetEnglishWord() {
            try {
            const res = await axios.get(Merriam_URL + "apple" + API_KEY, {
                    timeout: 2000,
                    })
                console.log(res.data);
                setDisplayWord("apple");
                setDictionary({ word: res.data })
            } catch (err) {
                console.error(err);
            } finally {
                console.log("An initial Merriam Webster Dictionary API GET call attempt was made")
            }    
        }

        GetEnglishWord();

    }, [])


    const handleChange = (e) => {
        setCurrentWord(e.target.value || "a");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(currentWord !== null) {
            try {
                const res = await axios.get(Merriam_URL + currentWord + API_KEY, {
                    timeout: 2000,
                    })
                console.log(res.data);
                setDisplayWord(currentWord);
                setDictionary({ word: res.data })
                const changePronunciation = () => {
                setPronunciationSource(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${res.data[0].hwi.prs[0].sound.audio[0]}/${res.data[0].hwi.prs[0].sound.audio}.mp3`);
                    if(pronounce.current) {
                        pronounce.current.pause();
                        pronounce.current.load();
                    }
                }
                changePronunciation();
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Another Merriam Webster Dictionary API GET call attempt was made")
            }
        }
    }

/* useEffect(() => {
    
    console.log("hello", pronunciationSource.toString())
}, [pronunciationSource]) */

    return(
        <main>

            <div className="generalSpacing siteBackground">
                <header>
                    <h1 className="title">tri-sense</h1>
                </header>
                <div className="basicMargin centerText">
                <a href={ ASL_Alphabet } target="_blank" rel="noreferrer" alt="American Sign Language Alphabet">ASL Alphabet</a>
                </div>
            </div>

            <div className="formAndWordBlock siteBackground">
                <form className="basicMargin" 
                    onChange={ handleChange }
                    onSubmit={ handleSubmit }
                >
                    <label title="Search Word"><input type="text" placeholder="search word" /></label>
                    <label title="Dictionary Data"><input className="submitWord" type="submit" value="Show Dictionary Data" /></label>
                </form>
                <div className="wordBlock">
                    {dictionary && 
                    <div>
                    <h2 className="word">{ displayWord }:</h2>
                        <div>
                            <p className="partOfSpeech">({dictionary.word[0].fl})</p> 
                            {/* { showDefinition } */}
                        </div>
                        {pronunciationSource &&
                        <div>
                            <h3>Pronuciation: { dictionary.word[0].hwi.hw }</h3>
                            <audio controls ref={ pronounce } className="audioBlock"> 
                                <source src= { pronunciationSource } type="audio/mp3" />
                            </audio>
                        </div>}
                    </div>
                    }
                </div>
            </div>
        </main>
    )
}