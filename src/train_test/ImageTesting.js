const fs = require("fs");

const labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const numOfImages = 21;
let totalImages = 0;
let imageCapture;

(function getUserMedia() {
    navigator.mediaDevices.getUserMedia({video: true})
     .then(mediaStream => {
        document.querySelector("video").srcObject = mediaStream;

     let track = mediaStream.getVideoTracks()[0];
     let imageCapture = new ImageCapture(track)
    })
     .catch(error => console.log(error));
})();

labels.forEach((char) => {
    fs.mkdir(`../images/${char}`, () => null);
    for(let i = 1; i < numOfImages; i++) {
        fs.writeFile(`../images/${char}/label_${char}_${i.toString()}.png`, "utf8", () => null )
    totalImages++;
    }
    return totalImages;
})
console.log(totalImages)