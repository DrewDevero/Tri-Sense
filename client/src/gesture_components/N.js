import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const nGesture = new GestureDescription("N");

// Thumb

nGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);

// All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    nGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    nGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    nGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}