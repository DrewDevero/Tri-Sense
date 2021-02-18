import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const zGesture = new GestureDescription("Z");

//Thumb
zGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
zGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
zGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
zGesture.addDirection(Finger.Finger, FingerDirection.VerticalUp, 1.0);
zGesture.addDirection(Finger.Finger, FingerDirection.DiagonalUpLeft, 0.8);
zGesture.addDirection(Finger.Finger, FingerDirection.DiagonalUpRight, 0.8);

// Other four fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    zGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    zGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}