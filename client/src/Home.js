import React from "react";

export default function Home() {

const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"

return(
        <div>
        <main>
            <div className="general-spacing site-background">
                <header>
                    <h1 className="title">tri-sense&trade;</h1>
                </header>
                <div className="basic-margin center-text">
                <a href={ ASL_Alphabet } target="_blank" rel="noreferrer" alt="American Sign Language Alphabet">ASL Alphabet</a>
                </div>
                <section className="center">
                    <article className="mission-background">
                        <p className="mission-heading-first-word">A</p>
                        <p className="mission-heading-second-word">Mission</p>
                        <p className="mission-paragraph-1"><span className="work-in-progress">A work in progress:</span> Dictionary look up app with returning word, pronunciation(written form), part of speech, and vocal file giving auditory example of pronunciation. Accessibility level considered adequate as determined by Axe Accessibility.</p>
                        <p></p>
                    </article>
                </section>
            </div>
        </main>
        <footer className="copyright-spacing">
                <p className="copyright">&copy; 2021 Alston Drew Devero-Belfon. The Tri-Sense phrase and logo are trademarks of Alston Drew Devero-Belfon.</p>
        </footer>
        </div>
    )
}