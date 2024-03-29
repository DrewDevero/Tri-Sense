import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Merriam() {
    
    const [dictionary, setDictionary] = useState(null);
    const [currentWord, setCurrentWord] = useState(null);
    const [displayWord, setDisplayWord] = useState(null);
    const [definition, setDefinition] = useState(null);
    const [pronunciationSource, setPronunciationSource] = useState("https://media.merriam-webster.com/audio/prons/en/us/mp3/a/apple001.mp3");
    const [postForm, setPostForm] = useState({
        id : 1,
        word: "apple",
        partOfSpeech: "noun",
        wordLength: 5,
        pronunciation: "ap*ple",
        pronunciationLink: "https://media.merriam-webster.com/audio/prons/en/us/mp3/a/apple001.mp3"
  });
    const [wordBank, setWordBank] = useState([] || "Apple");
    const Merriam_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = "?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392";
    const ASL_Alphabet = "https://www.nidcd.nih.gov/sites/default/files/Content%20Images/NIDCD-ASL-hands-2019_large.jpg"
    const pronounce = useRef();
    const WORD_BANK_CONTENT = document.querySelector(".word-bank-content");
    const WORD_BANK_BUTTON = document.querySelector(".word-bank-button");
    let savedWords;
    let wordBankToggled = false;

    // for all database requests, http://localhost:8080/words for local host OR https://obscure-woodland-21867.herokuapp.com/words for cloud host


    async function GetEnglishWord() {
        try {
        const res = await axios.get(Merriam_URL + "apple" + API_KEY, {
                timeout: 2000,
                })
            setDisplayWord("apple");
            setDictionary({ word: res.data })
            setDefinition(JSON.stringify(res.data[0].def[0]))
        const res2 = await axios.get("https://obscure-woodland-21867.herokuapp.com/words");
                const databaseWords = res2.data.map(entry => {
                    return entry.word;
                })
                setWordBank(...wordBank, databaseWords)
            // setDefinition(res.data[0].def[0].sseq[0][0][1].dt[0][1])
        } catch (err) {
            console.error(err);
        } finally {
            console.log("An initial Merriam Webster Dictionary API GET call attempt was made")
        }    
    }
    useEffect(() => {

        GetEnglishWord();

    }, [])

    useEffect(() => {
        async function postWord() {
            let wordExists = 0;
            try {
                const resTwo = await axios.get("https://obscure-woodland-21867.herokuapp.com/words");
                resTwo.data.forEach((entry) => {
                    if(entry.word === postForm.word) {
                        wordExists++;   
                    }
                })
            } catch(err) {
                console.error(err);
            }
            if(wordExists === 0) {
                try {
                    await axios.post("https://obscure-woodland-21867.herokuapp.com/words", postForm);
                    const res = await axios.get("https://obscure-woodland-21867.herokuapp.com/words");
                    res.data.forEach(entry => {
                        setWordBank([...wordBank, entry.word ]);
                    })
                    return savedWords;
                } catch(err) {
                    console.error(err);
                } finally {
                    console.log("Post attempt to database made");
                }
            }
        }

        postWord();

    }, [postForm]);

    const handleChange = (e) => {
        setCurrentWord(e.target.value.toLowerCase() || "a");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(currentWord !== null) {
            try {
                const res = await axios.get(Merriam_URL + currentWord + API_KEY, {
                    timeout: 2000,
                    })
                if(res.data[0].hwi.hw[0] === currentWord[0]) {
                    setDisplayWord(currentWord);
                    setDictionary({ word: res.data });
                    const changePronunciation = () => {
                    setPronunciationSource(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${res.data[0].hwi.prs[0].sound.audio[0]}/${res.data[0].hwi.prs[0].sound.audio}.mp3`);
                    setDefinition(JSON.stringify(res.data[0].def[0]))
                        if(pronounce.current) {
                            pronounce.current.pause();
                            pronounce.current.load();
                        }
                    }
                    changePronunciation();
                    // set words for post to http://localhost:8080/words OR https://obscure-woodland-21867.herokuapp.com/words
                    // word <string>
                    // partOfSpeech <string>
                    // wordLength <integer>
                    // pronunciation <string>
                    // pronunciationLink <string>
                    setPostForm({ 
                        word: currentWord.toLowerCase(),
                        partOfSpeech: res.data[0].fl,
                        wordLength: currentWord.length,
                        pronunciation: res.data[0].hwi.hw,
                        pronunciationLink: `https://media.merriam-webster.com/audio/prons/en/us/mp3/${res.data[0].hwi.prs[0].sound.audio[0]}/${res.data[0].hwi.prs[0].sound.audio}.mp3`
                    })
                }
            } catch (err) {
                console.error(err);     
            } finally {
                console.log("Another Merriam Webster Dictionary API GET call attempt was made")
            }       
        }
    }

    function selectFromBank(e) {
        const selectedWord = e.target.value.toLowerCase();
        setCurrentWord(selectedWord);
    }

    function deselectFromBank() {
        setCurrentWord(null);
    }

    function toggleWordBank() {
        if(!wordBankToggled) {
            WORD_BANK_CONTENT.style.display = "block";
            WORD_BANK_BUTTON.style.background = "rgba(23, 235, 35, 0.8)";
            return wordBankToggled = true;
        } else {
            WORD_BANK_CONTENT.style.display = "none";
            WORD_BANK_BUTTON.style.background = "rgba(23, 35, 235, 0.7)";
            return wordBankToggled = false;
        }
    }

    return(
        <main>

            <div className="general-spacing site-background">
                <header>
                    <h1 className="title">tri-sense</h1>
                </header>
                <div className="basic-margin center-text">
                <a href={ ASL_Alphabet } target="_blank" rel="noreferrer" alt="American Sign Language Alphabet">ASL Alphabet</a>
                </div>
            </div>

            <div className="form-and-word-block site-background">
                <form className="basic-margin" 
                    onChange={ handleChange }
                    onSubmit={ handleSubmit }
                >
                    <label title="Word Bank" className="word-bank-spacing">
                        <div className="word-bank">
                            <button className="word-bank-button" type="button" onClick={ toggleWordBank }>word bank</button>
                            <div className="word-bank-content"> { wordBank.map((word, index) => { 
                                return (
                                    <div key={ index }>
                                        <input type="submit" value={ word } onMouseEnter={ selectFromBank } onMouseLeave={ deselectFromBank } ></input> 
                                    </div>
                                )
                            }) }</div>
                        </div>
                    </label>
                    <label title="Search Word"><input type="text" placeholder="search word" /></label>
                    <label title="Pronunciation Search"><input className="submit-word" type="submit" value="Click for Pronunciation" /></label>
                </form>
                <div className="word-block">
                    {dictionary && 
                    <div>
                    <h2 className="word">{ displayWord }:</h2>
                        <div>
                            <p className="part-of-speech">({dictionary.word[0].fl})</p>
                        </div>
                        {pronunciationSource &&
                        <div>
                            <h3>Pronuciation: { dictionary.word[0].hwi.hw }</h3>
                            <audio controls ref={ pronounce } className="audio-block"> 
                                <source src= { pronunciationSource } type="audio/mp3" />
                            </audio>
                        </div>}
                        {/* // definition to use in appropriate cases considering high level of navigation specificity
                        <div>
                            <p>{ definition }</p>
                        </div> */}
                    </div>
                    }
                </div>
            </div>
        </main>
    )
}