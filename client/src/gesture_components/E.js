import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const eGesture = new GestureDescription("E");

//Thumb
eGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
eGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
eGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Other four fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    eGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    eGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}