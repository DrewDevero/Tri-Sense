import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const gGesture = new GestureDescription("G");

//Thumb
gGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
gGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
gGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//Index
gGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
gGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8);
gGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8);

// Other four fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    gGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    gGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    gGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}