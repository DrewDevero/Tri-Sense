import React from "react";
import MotionTracking from "./MotionTracking";

export default function ASL() {


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
            <div className="canvas-area-relative">
                <div className="video-canvas-spacing">
                    <div className="video-area">
                        <video className="video-size" autoPlay={ true } alt="American Sign Language Chat App Motion Tracking"></video>
                        <canvas className="canvas-area"></canvas>
                    </div>
                </div>
                <div className="center-text">
                    <button type="button" id="stop-webcam">stop webcam</button>
                </div>
                { MotionTracking() }
            </div>
        </main>
    )
}