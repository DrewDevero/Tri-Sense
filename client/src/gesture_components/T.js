import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const tGesture = new GestureDescription("T");

// Thumb
tGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
tGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

// All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    tGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    tGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}