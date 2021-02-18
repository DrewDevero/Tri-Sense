import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const oneGesture = new GestureDescription("One");

//Thumb
oneGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
oneGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Other four fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    oneGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    oneGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}