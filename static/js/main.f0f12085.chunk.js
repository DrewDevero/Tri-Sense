(this["webpackJsonptri-sense"]=this["webpackJsonptri-sense"]||[]).push([[0],{44:function(e,n,t){},63:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),c=t.n(r),i=t(35),s=t.n(i),l=(t(44),t(15)),o=t(3);function d(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"general-spacing site-background",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"title",children:"tri-sense\u2122"})}),Object(a.jsx)("div",{className:"basic-margin center-text",children:Object(a.jsx)("a",{href:"https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image",target:"_blank",rel:"noreferrer",alt:"American Sign Language Alphabet",children:"ASL Alphabet"})}),Object(a.jsx)("section",{className:"center",children:Object(a.jsxs)("article",{className:"mission-background",children:[Object(a.jsx)("p",{className:"mission-heading-first-word",children:"A"}),Object(a.jsx)("p",{className:"mission-heading-second-word",children:"Mission"}),Object(a.jsxs)("p",{className:"mission-paragraph-1",children:[Object(a.jsx)("span",{className:"work-in-progress",children:"A work in progress:"})," Dictionary look up app with returning word, pronunciation(written form), part of speech, and vocal file giving auditory example of pronunciation. Accessibility level considered adequate as determined by Axe Accessibility."]}),Object(a.jsx)("p",{})]})})]})}),Object(a.jsx)("footer",{className:"copyright-spacing",children:Object(a.jsx)("p",{className:"copyright",children:"\xa9 2020 Alston Drew Devero-Belfon. The Tri-Sense phrase and logo are trademarks of Alston Drew Devero-Belfon."})})]})}var u=t(5),h=t.n(u),j=t(38),b=t(10),p=t(11),g=t(20),m=t(36),f=t(21),x=t(2),O=new x.GestureDescription("A");O.addCurl(x.Finger.Thumb,x.FingerCurl.NoCurl,1),O.addDirection(x.Finger.Thumb,x.FingerDirection.VirticalUp,.25),O.addDirection(x.Finger.Thumb,x.FingerDirection.DiagonalUpLeft,.5),O.addDirection(x.Finger.Thumb,x.FingerDirection.DiagonalUpRight,.5);for(var v=0,w=[x.Finger.Index,x.Finger.Middle,x.Finger.Ring,x.Finger.Pinky];v<w.length;v++){var y=w[v];O.addCurl(y,x.FingerCurl.FullCurl,1)}var F=new x.GestureDescription("B");F.addCurl(x.Finger.Thumb,x.FingerCurl.FullCurl,1),F.addDirection(x.Finger.Thumb,x.FingerDirection.VerticalUp,.25),F.addDirection(x.Finger.Thumb,x.FingerDirection.DiagonalUpLeft,.5),F.addDirection(x.Finger.Thumb,x.FingerDirection.DiagonalUpRight,.5);for(var N=0,k=[x.Finger.Index,x.Finger.Middle,x.Finger.Ring,x.Finger.Pinky];N<k.length;N++){var A=k[N];F.addCurl(A,x.FingerCurl.NoCurl,1)}function C(){var e=Object(r.useState)(null),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){var e=document.getElementsByClassName("video-canvas-spacing")[0],n=document.getElementsByClassName("video-size")[0],t=document.getElementsByClassName("canvas-area")[0],a=t.getContext("2d"),r=document.getElementById("stop-webcam"),i=document.getElementById("symbolSpacing"),s=!1;i.style.opacity="0";var l=new g.Hands({locateFile:function(e){return"https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.1/".concat(e)}});l.onResults((function(e){if(a.save(),a.clearRect(0,0,t.width,t.height),a.drawImage(e.image,0,0,t.width,t.height),e.multiHandLandmarks&&e.multiHandedness)for(var n=function(n){var t="Right"===e.multiHandedness[n].label,r=e.multiHandLandmarks[n];Object(f.drawConnectors)(a,r,g.HAND_CONNECTIONS,{color:t?"#00FF00":"#FF0000"}),Object(f.drawLandmarks)(a,r,{color:t?"#00FF00":"#FF0000",fillColor:t?"#FF0000":"#00FF00"}),function(){var e=Object(b.a)(h.a.mark((function e(){var n,t,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new x.GestureEstimator([O,F]),e.next=3,n.estimate(r,1);case 3:void 0!==(t=e.sent).gestures&&t.gestures.length>0&&(a=t.gestures.map((function(e){return e.confidence})),s=a.indexOf(Math.max.apply(Math,Object(j.a)(a))),i.style.opacity="1",c(t.gestures[s].name));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},r=0;r<e.multiHandLandmarks.length;r++)n(r);a.restore()}));var o=new m.Camera(n,{onFrame:function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.send({image:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),height:"25rem",width:"30rem"});o.start(),r.onclick=function(){console.log(s);var t=n.srcObject;return null!==t&&!1===s?(t.getTracks()[0].stop(),e.style.display="none",n.srcObject=null,r.innerHTML="start webcam",i.style.opacity="0",s=!0):(o.start(),e.style.display="block",s=!1)}})),Object(a.jsx)("div",{id:"symbolSpacing",children:t})}function D(){return Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"general-spacing site-background",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"title",children:"tri-sense"})}),Object(a.jsx)("div",{className:"basic-margin center-text",children:Object(a.jsx)("a",{href:"https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image",target:"_blank",rel:"noreferrer",alt:"American Sign Language Alphabet",children:"ASL Alphabet"})})]}),Object(a.jsxs)("div",{className:"canvas-area-relative",children:[Object(a.jsx)("div",{className:"video-canvas-spacing",children:Object(a.jsxs)("div",{className:"video-area",children:[Object(a.jsx)("video",{className:"video-size",autoPlay:!0,alt:"American Sign Language Chat App Motion Tracking"}),Object(a.jsx)("canvas",{className:"canvas-area"})]})}),Object(a.jsx)("div",{className:"center-text",children:Object(a.jsx)("button",{type:"button",id:"stop-webcam",children:"stop webcam"})}),C()]})]})}var S=t(22),L=t.n(S);function T(){var e=Object(r.useState)(null),n=Object(p.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(null),s=Object(p.a)(i,2),l=s[0],o=s[1],d=Object(r.useState)(null),u=Object(p.a)(d,2),j=u[0],g=u[1],m=Object(r.useState)(null),f=Object(p.a)(m,2),x=(f[0],f[1]),O=Object(r.useState)("https://media.merriam-webster.com/audio/prons/en/us/mp3/a/apple001.mp3"),v=Object(p.a)(O,2),w=v[0],y=v[1],F="https://www.dictionaryapi.com/api/v3/references/collegiate/json/",N="?key=b6d6ef59-ebe9-4fb1-9e9b-970c1e954392",k=Object(r.useRef)();Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get(F+"apple"+N,{timeout:2e3});case 3:n=e.sent,console.log(n.data),g("apple"),c({word:n.data}),x(JSON.stringify(n.data[0].def[0])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:return e.prev=13,console.log("An initial Merriam Webster Dictionary API GET call attempt was made"),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);function A(){return(A=Object(b.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),null===l){e.next=19;break}return e.prev=2,e.next=5,L.a.get(F+l+N,{timeout:2e3});case 5:t=e.sent,console.log(t.data),g(l),c({word:t.data}),function(){y("https://media.merriam-webster.com/audio/prons/en/us/mp3/".concat(t.data[0].hwi.prs[0].sound.audio[0],"/").concat(t.data[0].hwi.prs[0].sound.audio,".mp3")),x(JSON.stringify(t.data[0].def[0])),k.current&&(k.current.pause(),k.current.load())}(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:return e.prev=16,console.log("Another Merriam Webster Dictionary API GET call attempt was made"),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}return Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"general-spacing site-background",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"title",children:"tri-sense"})}),Object(a.jsx)("div",{className:"basic-margin center-text",children:Object(a.jsx)("a",{href:"https://www.nidcd.nih.gov/health/american-sign-language-fingerspelling-alphabets-image",target:"_blank",rel:"noreferrer",alt:"American Sign Language Alphabet",children:"ASL Alphabet"})})]}),Object(a.jsxs)("div",{className:"form-and-word-block site-background",children:[Object(a.jsxs)("form",{className:"basic-margin",onChange:function(e){o(e.target.value||"a")},onSubmit:function(e){return A.apply(this,arguments)},children:[Object(a.jsx)("label",{title:"Search Word",children:Object(a.jsx)("input",{type:"text",placeholder:"search word"})}),Object(a.jsx)("label",{title:"Pronunciation Search",children:Object(a.jsx)("input",{className:"submit-word",type:"submit",value:"Click for Pronunciation"})})]}),Object(a.jsx)("div",{className:"word-block",children:t&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{className:"word",children:[j,":"]}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:"part-of-speech",children:["(",t.word[0].fl,")"]})}),w&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Pronuciation: ",t.word[0].hwi.hw]}),Object(a.jsx)("audio",{controls:!0,ref:k,className:"audio-block",children:Object(a.jsx)("source",{src:w,type:"audio/mp3"})})]})]})})]})]})}t(63);var E=t(64),M=(0,t(65).promisify)(setTimeout);function P(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"general-spacing",children:[Object(a.jsxs)("nav",{className:"center-text",children:[Object(a.jsx)("span",{className:"general-spacing",children:Object(a.jsx)(l.b,{to:"/Home",children:"Home"})}),Object(a.jsx)("span",{className:"general-spacing",children:Object(a.jsx)(l.b,{to:"/ASL",children:"ASL Chat App"})}),Object(a.jsx)("span",{className:"general-spacing",children:Object(a.jsx)(l.b,{to:"/Merriam",children:"Pronunciation App"})})]}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/ASL",children:Object(a.jsx)(D,{})}),Object(a.jsx)(o.a,{path:"/Merriam",children:Object(a.jsx)(T,{})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(d,{})})]})]})})}["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"].forEach((function(e){M(1e3).then((function(){return E.mkdir("../images/".concat(e),(function(){return null}))}),function(){var n=Object(b.a)(h.a.mark((function n(){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=h.a.mark((function n(t){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(1e3).then((function(){E.writeFile("../images/".concat(e,"/label_").concat(e,"_").concat(t.toString(),".png"),"utf8",(function(){return null}))}));case 2:case"end":return n.stop()}}),n)})),a=1;case 2:if(!(a<21)){n.next=7;break}return n.delegateYield(t(a),"t0",4);case 4:a++,n.next=2;break;case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()())}));var B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.f0f12085.chunk.js.map