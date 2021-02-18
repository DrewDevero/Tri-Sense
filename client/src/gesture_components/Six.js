import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const sixGesture = new GestureDescription("Six");

//Thumb and pinky fingers
for(let finger of [Finger.Thumb, Finger.Pinky]) {
    sixGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    sixGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
    sixGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
}

//Index, middle, and ring finger
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    sixGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    sixGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}