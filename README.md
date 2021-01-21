# Tri-Sense
[![Tri-Sense Site Screenshot](/Tri-Sense_site_screenshot.jpg)](https://drewdevero.github.io/Tri-Sense/)
1st level project(MVP): A dictionary look up app with returning word, pronunciation(written form), part of speach, and vocal file giving auditory example of pronunciation. Accessibility level considered adequate as determined by [Axe Accessibility](https://www.deque.com/axe/browser-extensions/?utm_term=Axe%20Plugin&utm_campaign=Search+-+axe+Pro+-+Branded&utm_source=bing&utm_medium=ppc&hsa_src=o&hsa_ad=&hsa_tgt=kwd-82738791770917:loc-190&hsa_mt=e&hsa_ver=3&hsa_acc=7854167720&hsa_kw=Axe%20Plugin&hsa_grp=1323813097587450&hsa_cam=6769485255&hsa_net=adwords&msclkid=b251fc65867e155e24949c6c13f427ae).
<br/>
2nd level project(stretch goals) - Detect hand position and show constant stream live through webcam incorporating another technology, MediaPipe hand tracking, properly through react. Make that functionality capable of being activated or deactivated via client. Show mapping of fingers so user can easily relate hand position to sign language alphabet and numbers 0 - 9.
<br/>
3rd level project(serious stretch goals)- relate live to American Sign Language alphabet, pull words from Merriam-Webster's Dictionary API and provide functionality to sign our words returned as audio and text (can scale back to written input only to still provide viable 1st level product(MVP) within the limited timeframe). Meant as the start of a much larger project; meant for submissions to initiatives like the [Google Developers Solution Challenge](https://developers.google.com/community/dsc-solution-challenge).
## User-Story
**Used primarily by**:<br/>
Client who is hearing impaired; I want to type out words and relate them to signed out words; convert words to sounds and written form so that I can more efficiently communicate with all other people in a multitude of situations.<br/><br/>
**End user goal**:<br/>
Dictionary App for word lookup and audio returned as written and vocalized characters/words; App for tracking hand motion by webcam.<br/><br/> 
**End business goal**:<br/> Camera access. Merriam-Webster's Dictionary API.<br/><br/>
**Acceptance criteria**:<br/> Refer to American Sign Language Alphabet. Refer to Merriam-Webster's API. Return written characters. Return vocal versions of characters. Enable webcam hand tracking through react app. Accessibility level considered adequate as determined by [Axe Accessibility](https://www.deque.com/axe/browser-extensions/?utm_term=Axe%20Plugin&utm_campaign=Search+-+axe+Pro+-+Branded&utm_source=bing&utm_medium=ppc&hsa_src=o&hsa_ad=&hsa_tgt=kwd-82738791770917:loc-190&hsa_mt=e&hsa_ver=3&hsa_acc=7854167720&hsa_kw=Axe%20Plugin&hsa_grp=1323813097587450&hsa_cam=6769485255&hsa_net=adwords&msclkid=b251fc65867e155e24949c6c13f427ae).<br/><br/>
![Tri-Sense Mockup](/tri-sense_mockup.png)

*Level One project (MVP) and Level Two project (strech goal) achieved. All acceptance criteria achieved.

Sources: 
MediaPipe documentation and code boilerplate: https://google.github.io/mediapipe/getting_started/javascript.html
General connecting webcam to browser capability: https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
General create files via javascript: https://code-boxx.com/create-save-files-javascript/
LabelBox for image annotation to use in training and testing cases: https://app.labelbox.com/