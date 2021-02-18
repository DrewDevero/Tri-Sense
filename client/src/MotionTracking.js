import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands/hands";
import { Camera } from "@mediapipe/camera_utils/camera_utils";
// import { FPS } from "@mediapipe/control_utils/control_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils/drawing_utils";
import * as fp from "fingerpose";
import React, { useEffect, useState } from "react";

import { aGesture } from "./gesture_components/A"
import { bGesture } from "./gesture_components/B";

export default function MotionTracking() {

  const [symbol, setSymbol] = useState(null);
  // Input frames

useEffect(() => {
  const videoBlock = document.getElementsByClassName("video-canvas-spacing")[0];
  const videoElement =
      document.getElementsByClassName("video-size")[0];
  const canvasElement =
      document.getElementsByClassName("canvas-area")[0];
  /* const controlsElement =
      document.getElementsByClassName('control-panel')[0]; */
  const canvasCtx = canvasElement.getContext("2d");
  const stopCam = document.getElementById("stop-webcam");
  const symbolSpacing = document.getElementById("symbolSpacing");
  let toggle = false;
  symbolSpacing.style.opacity = "0";

  // Call tick() each time the graph runs.
  // const fpsControl = new FPS();

  // Optimization: Turn off animated spinner after its hiding animation is done.
  /* const spinner = document.querySelector('.loading');
  spinner.ontransitionend = () => {
    spinner.style.display = 'none';
  }; */

  function onResults(results) {
    // Hide the spinner.
  //  document.body.classList.add('loaded');

    // Update the frame rate.
  // fpsControl.tick();

    // Draw the overlays.
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks && results.multiHandedness) {
      for (let index = 0; index < results.multiHandLandmarks.length; index++) {
        const classification = results.multiHandedness[index];
        const isRightHand = classification.label === 'Right';
        const landmarks = results.multiHandLandmarks[index];
        drawConnectors(
            canvasCtx, landmarks, HAND_CONNECTIONS,
            {color: isRightHand ? '#00FF00' : '#FF0000'});
        drawLandmarks(canvasCtx, landmarks, {
          color: isRightHand ? '#00FF00' : '#FF0000',
          fillColor: isRightHand ? '#FF0000' : '#00FF00'
        });
        // determines which hand gesture is present
        (async function handGestures() {
          const gestureEstimate = new fp.GestureEstimator([
            aGesture,
            bGesture
          ])
          const gesture = await gestureEstimate.estimate(landmarks, 1.0);
          symbolSpacing.style.opacity = "1";
          setSymbol(gesture.gestures[0].name);
          console.log(gesture.gestures);
        })();
      }

    }
    
    canvasCtx.restore();
  }

  const hands = new Hands({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.1/${file}`;
  }});
  hands.onResults(onResults);

  /**
  * Instantiate a camera. We'll feed each frame we receive into the solution.
  */
  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({image: videoElement});
    },
    height: "25rem",
    width: "30rem"
  });
  camera.start();

  // allows the client to toggle the webcam

  stopCam.onclick = stopWebcam;

  function stopWebcam() {
          console.log(toggle)
          let stream = videoElement.srcObject;
          if(stream !== null && toggle === false) {
              let tracks = stream.getTracks();
              tracks[0].stop()
              videoBlock.style.display = "none";
              videoElement.srcObject = null;
              stopCam.innerHTML = "start webcam";
              symbolSpacing.style.opacity = "0";
              return toggle = true;
          } else {
              camera.start();
              videoBlock.style.display = "block";
              return toggle = false;
          }
      }

  // Present a control panel through which the user can manipulate the solution
  // options.
  /* new ControlPanel(controlsElement, {
        selfieMode: true,
        maxNumHands: 2,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      })
      .add([
        new StaticText({title: 'MediaPipe Hands'}),
        fpsControl,
        new Toggle({title: 'Selfie Mode', field: 'selfieMode'}),
        new Slider(
            {title: 'Max Number of Hands', field: 'maxNumHands', range: [1, 4], step: 1}),
        new Slider({
          title: 'Min Detection Confidence',
          field: 'minDetectionConfidence',
          range: [0, 1],
          step: 0.01
        }),
        new Slider({
          title: 'Min Tracking Confidence',
          field: 'minTrackingConfidence',
          range: [0, 1],
          step: 0.01
        }),
      ])
      .on(options => {
        videoElement.classList.toggle('selfie', options.selfieMode);
        hands.setOptions(options);
      }); */
})
    return(
      <div id="symbolSpacing">{ symbol }</div>
    )
}