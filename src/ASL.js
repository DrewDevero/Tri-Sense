import React, { useEffect } from "react";
/* import main from "./MotionTracking"; */
import { load } from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";

export default function ASL() {

const ASL_Alphabet = "https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image"

useEffect(() => {

    const video = document.querySelector("video");
    const stopCam = document.getElementById("stopWebcam");
    const webcamArea = document.getElementsByClassName("videoArea")[0];

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            async function main() {
                const model = await load()
                const predictions = await model.estimateHands(video)
                if(predictions.length > 0) {
                    for(let i = 0; i < predictions.length; i++) {
                        const keypoints = predictions[i].landmarks;
                        for(let j=0; j < keypoints.length; j++) {
                            const [x,y,z] = keypoints[i];
                            console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
                        }
                    }
                }
            }
            main();
        })
        .catch((err) => console.error(err))
    }

    stopCam.onclick = stop;

    function stop() {
        let stream = video.srcObject;
        if(stream !== null) {
            let tracks = stream.getTracks();
            for(let i = 0; i < tracks.length; i++) {
                let track = tracks[i];
                track.stop();
            }
            webcamArea.style.display = "none";
            video.srcObject = null;
        }
    }

    /* async function main() {
            const model = await load();
            const predictions = await model.estimateHands(document.querySelector("video"));
            if(predictions.length > 0) {
                for(let i = 0; i < predictions.length; i++) {
                    const keypoints = predictions[i].landmarks;
                    for(let j=0; j < keypoints.length; j++) {
                        const [x,y,z] = keypoints[i];
                        console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
                    }
                }
            }
        }
        main() */
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
                <a href={ ASL_Alphabet } terget="_blank" alt="American Sign Language Alphabet">ASL Alphabet</a>
                </div>
            </div>
            <div>
               <div className="videoArea">
                    <video className="videoSize" autoPlay={ true } alt="American Sign Language Chat App Motion Tracking"></video>
                </div>
                <div className="centerText">
                    <button type="button" id="stopWebcam">Stop Webcam</button>
                </div>
            </div>
        </main>
    )
}
