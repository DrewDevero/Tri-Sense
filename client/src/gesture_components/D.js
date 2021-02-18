import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const dGesture = new GestureDescription("D");

//Thumb
dGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
dGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
dGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
dGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
dGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
dGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Other four fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    dGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    dGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}