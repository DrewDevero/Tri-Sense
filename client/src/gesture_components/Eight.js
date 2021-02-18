import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const eightGesture = new GestureDescription("Eight");

//Thumb and middle fingers
for(let finger of [Finger.Thumb, Finger.Middle]) {
    eightGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    eightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
    eightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
}

//Index, ring, and pinky finger
for(let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
    eightGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    eightGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}