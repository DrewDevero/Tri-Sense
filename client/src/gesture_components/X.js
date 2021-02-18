import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const xGesture = new GestureDescription("X");

//Index
xGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
xGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Thumb, middle, ring, and pinky fingers
for(let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
xGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
xGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
xGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.5);
xGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.5);
}