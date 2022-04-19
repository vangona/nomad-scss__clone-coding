(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clickNumberEvent=void 0;var clickNumberEvent=function(e){var t=e.target.dataset.id;window.scrollTo({top:0,behavior:"smooth"}),console.log(t)};exports.clickNumberEvent=clickNumberEvent;

},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hoverNumberEvent=void 0;var _paintCenterImage=require("./paintCenterImage"),IMAGE_FOR_FOLDER=2,hoverNumberEvent=function(e,t){var r=(e.target.dataset.id-1)*IMAGE_FOR_FOLDER;window.scrollTo({top:0,behavior:"smooth"}),(0,_paintCenterImage.paintCenterImage)(r,t)};exports.hoverNumberEvent=hoverNumberEvent;

},{"./paintCenterImage":5}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.preloadImg=void 0;var images=[],preloadImg=function(e){for(var r=0;r<e.length;r++)images[r]=new Image,images[r].src=e[r];return images};exports.preloadImg=preloadImg;

},{}],4:[function(require,module,exports){
"use strict";var _imgPreload=require("./imgPreload"),_clickNumberEvent=require("./clickNumberEvent"),_hoverNumberEvent=require("./hoverNumberEvent "),PAGES=10,IMG_NUMBERS_FOR_PAGE=2,NUMBER_DIVS=document.querySelectorAll(".number"),images=[];function init(){preload(),addNumberHoverEvents(),addNumberClickEvents()}function preload(){for(var e=[],r=1;r<=PAGES;r++)for(var n=1;n<=IMG_NUMBERS_FOR_PAGE;n++)e.push("/img/".concat(r,"/").concat(n,".jpg"));images=(0,_imgPreload.preloadImg)(e)}function addNumberHoverEvents(){for(var e=0;e<NUMBER_DIVS.length;e++)NUMBER_DIVS[e].addEventListener("mouseover",function(e){(0,_hoverNumberEvent.hoverNumberEvent)(e,images)})}function addNumberClickEvents(){for(var e=0;e<NUMBER_DIVS.length;e++)NUMBER_DIVS[e].addEventListener("click",_clickNumberEvent.clickNumberEvent)}init();

},{"./clickNumberEvent":1,"./hoverNumberEvent ":2,"./imgPreload":3}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paintCenterImage=void 0;var paintCenterImage=function(e,t){var n=document.querySelector(".center__image");n.innerHTML="",n.appendChild(t[e])};exports.paintCenterImage=paintCenterImage;

},{}]},{},[4]);