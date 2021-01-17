import { load } from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";
/* import "@tensorflow/tfjs-backend-cpu"; */
/* const tf = require("@tensorflow/tfjs");

tf.setBackend("webgl");
console.log(tf.getBackend()); */

    const video = document.querySelector("video");

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => video.srcObject = stream)
        .catch((err) => console.error(err))
    }

// MediaPipe handpose model

        export default async function main() {
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
        main()