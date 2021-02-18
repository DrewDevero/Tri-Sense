import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const lGesture = new GestureDescription("L");

//Thumb
lGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
lGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
lGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//Pinky finger
lGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
lGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);
lGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

// Ring and pinky fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    lGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    lGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    lGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}