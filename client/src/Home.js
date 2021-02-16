import React from "react";

export default function Home() {

const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"

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
        </main>
    )
}