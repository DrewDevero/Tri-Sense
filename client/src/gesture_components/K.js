import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const kGesture = new GestureDescription("K");

//Thumb
kGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
kGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
kGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
kGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
kGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
}

// Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    kGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    kGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}