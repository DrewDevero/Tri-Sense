import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const nineGesture = new GestureDescription("Nine");

//Thumb and index fingers
for(let finger of [Finger.Thumb, Finger.Index]) {
    nineGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    nineGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
    nineGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
}

//Index, middle, and pinky finger
for(let finger of [Finger.Index, Finger.Middle, Finger.Pinky]) {
    nineGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    nineGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}