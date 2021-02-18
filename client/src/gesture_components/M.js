import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const mGesture = new GestureDescription("M");

// Thumb

mGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
mGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
mGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

// All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    mGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    mGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    mGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}