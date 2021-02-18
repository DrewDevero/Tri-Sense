import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const sevenGesture = new GestureDescription("Seven");

//Thumb and ring fingers
for(let finger of [Finger.Thumb, Finger.Ring]) {
    sevenGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    sevenGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
    sevenGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
}

//Index, middle, and pinky finger
for(let finger of [Finger.Index, Finger.Middle, Finger.Pinky]) {
    sevenGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    sevenGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}