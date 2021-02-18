import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const sGesture = new GestureDescription("S");

// Thumb
sGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
sGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

// All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    sGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    sGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}