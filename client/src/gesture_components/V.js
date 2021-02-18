import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const vGesture = new GestureDescription("V");

//Thumb
vGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
vGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
vGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
vGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
// Ring finger
    vGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.8);
    vGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// Pinky finger
    vGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);
    vGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);