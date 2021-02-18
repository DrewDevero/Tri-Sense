import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const bGesture = new GestureDescription("B");

//Thumb
bGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
bGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.25);
bGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
bGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

// Other four fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    bGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}