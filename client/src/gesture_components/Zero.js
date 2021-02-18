import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const zeroGesture = new GestureDescription("Zero");

// All fingers
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    zeroGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    zeroGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.8);
    zeroGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.8);
}