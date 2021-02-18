import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const yGesture = new GestureDescription("Y");

// Thumb
yGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
yGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
yGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Pinky
yGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
yGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
yGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

// All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    yGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    yGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}