import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const cGesture = new GestureDescription("C");

//Thumb
cGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

// Other four fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    cGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    cGesture.addDirection(finger, FingerDirection.VerticalDown, 0.8);
}