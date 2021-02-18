import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const pGesture = new GestureDescription("P");

// Thumb
pGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

// Index
pGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
// All other fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    pGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    pGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}