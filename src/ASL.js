import React, { useEffect } from "react";
import MotionTracking from "./MotionTracking";

export default function ASL() {

const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"

useEffect(() => {

    MotionTracking();

}, [])


/* useEffect(() => {

    main();

}, []); */

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
            <div>
                <div className="videoCanvasSpacing">
                    <div className="videoArea">
                        <video className="videoSize" autoPlay={ true } alt="American Sign Language Chat App Motion Tracking"></video>
                        <canvas className="canvasArea"></canvas>
                    </div>
                </div>
                <div className="centerText">
                    <button type="button" id="stopWebcam">stop webcam</button>
                </div>
            </div>
        </main>
    )
}
