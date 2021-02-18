import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const wGesture = new GestureDescription("W");

//Thumb
wGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
wGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index, middle, and ring fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
wGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
wGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
// Pinky fingers
wGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);
wGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);