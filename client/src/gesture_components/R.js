import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const rGesture = new GestureDescription("R");

//Thumb
rGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
rGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
rGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
rGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
rGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
rGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
}

// Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    rGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    rGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}