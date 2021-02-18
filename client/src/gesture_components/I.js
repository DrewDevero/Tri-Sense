import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const iGesture = new GestureDescription("I");

//Thumb
iGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
iGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
iGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//Pinky finger
iGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.8);
iGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);
iGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

// Ring and pinky fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    iGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    iGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    iGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}