import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const twoGesture = new GestureDescription("Two");

//Thumb
twoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
twoGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
twoGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
twoGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    twoGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    twoGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}