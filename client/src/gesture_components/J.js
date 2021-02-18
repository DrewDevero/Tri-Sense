import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const jGesture = new GestureDescription("J");

//Thumb
jGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
jGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
jGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//Pinky finger
jGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.8);
jGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);
jGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.8);

// Ring and pinky fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    jGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    jGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    jGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}