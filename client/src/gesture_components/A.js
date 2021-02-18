import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const aGesture = new GestureDescription("A");

//Thumb
aGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aGesture.addDirection(Finger.Thumb, FingerDirection.VirticalUp, 1.0);
aGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
aGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

// Other four fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    aGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    aGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}