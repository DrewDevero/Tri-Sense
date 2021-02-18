import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const uGesture = new GestureDescription("U");

//Thumb
uGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
uGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
uGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
uGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
// Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    uGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    uGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}