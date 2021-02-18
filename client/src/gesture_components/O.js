import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const oGesture = new GestureDescription("O");

// All fingers
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    oGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}