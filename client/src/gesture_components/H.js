import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const hGesture = new GestureDescription("H");

//Thumb
hGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
hGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
hGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//Index and middle fingers
for(let finger in [Finger.Index, Finger.Middle]){
hGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
hGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.8);
hGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.8);
}

// Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    hGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    hGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    hGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}