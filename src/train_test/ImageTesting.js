const fs = require("fs");
const { promisify } = require("util");
const withNodeSleep = promisify(setTimeout);
/* const inBrowserSleep = (milliseconds) => {
    return new Promise(res => setTimeout(res, milliseconds))
} */

const labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const numOfImages = 21;
// let totalImages = 0;
// let imageCapture;
// const captureButton = document.querySelector("button");

// let mediaStream = null;
/* (async function getUserMedia() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({video: { width:1280, height:720 }})
        document.querySelector("video").srcObject = mediaStream;
    } catch(error) {
        console.log(error)
    }
})(); */

// captureButton.onclick = takeScreenShots;

/* function takeScreenShots() {
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
    saveImages();
} */


// creates directories and files based on the developer's wanted labels using Node.js

 function saveImages() {
    labels.forEach((char) => {
        withNodeSleep(1000).then(() => fs.mkdir(`../images/${char}`, () => null),
        (async function populateDirs() {
            for(let i = 1; i < numOfImages; i++) {
                await withNodeSleep(1000).then(() => {fs.writeFile(`../images/${char}/label_${char}_${i.toString()}.png`,"utf8", () => null);
                })
            }
        })(),
    )})
}
saveImages();