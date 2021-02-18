import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const qGesture = new GestureDescription("Q");

// Thumb
qGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
qGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.8);

// Index
qGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
qGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// All other fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    qGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    qGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}