import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const fourGesture = new GestureDescription("Four");

//Thumb
fourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
fourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
fourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

//All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
fourGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
fourGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}