import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const fiveGesture = new GestureDescription("Five");

//Thumb
fiveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//All other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
fiveGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
fiveGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}