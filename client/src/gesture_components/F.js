import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const fGesture = new GestureDescription("F");

//Thumb
fGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
fGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
fGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);
fGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

// Other four fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    fGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    fGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}