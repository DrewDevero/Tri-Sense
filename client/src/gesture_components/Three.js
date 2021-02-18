import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const threeGesture = new GestureDescription("Three");

//Thumb
threeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
threeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
threeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//Index and middle finger
for(let finger of [Finger.Index, Finger.Middle]) {
threeGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
threeGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//Ring and pinky fingers
for(let finger of [Finger.Ring, Finger.Pinky]) {
    threeGesture.addCurl(finger, FingerCurl.FullCurl, 0.8);
    threeGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}