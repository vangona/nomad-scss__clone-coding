(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "1": "https://www.instagram.com/p/Cbu2WL3PItD/",
  "2": "https://www.instagram.com/p/CJ3KNQtriKR/",
  "3": "https://www.instagram.com/p/CY4Y4mkP54J/",
  "4": "https://www.instagram.com/p/CX3D3TXFYvQ/",
  "5": "https://www.instagram.com/p/CVPttHOpanj/",
  "6": "https://www.instagram.com/p/CXJiNpjP6k6/",
  "7": "https://www.instagram.com/p/B7Yv5I-Hhbg/",
  "8": "https://www.instagram.com/p/CaXQeflFS5z/",
  "9": "https://www.instagram.com/p/CaKCN7SF0Dx/",
  "10": "https://www.instagram.com/p/CZENvT2Fahd/"
}
},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clickNumberEvent=void 0;var clickNumberEvent=function(e){var t=e.target.dataset.id;window.scrollTo({top:0,behavior:"smooth"}),console.log(t)};exports.clickNumberEvent=clickNumberEvent;

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hoverNumberEvent=void 0;var _paintCenterImage=require("./paintCenterImage"),IMAGE_FOR_FOLDER=2,hoverNumberEvent=function(e,t){var r=(e.target.dataset.id-1)*IMAGE_FOR_FOLDER;window.scrollTo({top:0,behavior:"smooth"}),(0,_paintCenterImage.paintCenterImage)(r,t)};exports.hoverNumberEvent=hoverNumberEvent;

},{"./paintCenterImage":6}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.preloadImg=void 0;var images=[],preloadImg=function(e){for(var r=0;r<e.length;r++)images[r]=new Image,images[r].src=e[r];return images};exports.preloadImg=preloadImg;

},{}],5:[function(require,module,exports){
"use strict";var _imgPreload=require("./imgPreload"),_clickNumberEvent=require("./clickNumberEvent"),_hoverNumberEvent=require("./hoverNumberEvent "),PAGES=10,IMG_NUMBERS_FOR_PAGE=2,NUMBER_DIVS=document.querySelectorAll(".number"),images=[];function init(){preload(),isMobile()?addNumberClickEvents():addNumberHoverEvents()}function preload(){for(var e=[],r=1;r<=PAGES;r++)for(var n=1;n<=IMG_NUMBERS_FOR_PAGE;n++)e.push("https://cdn.jsdelivr.net/gh/vangona/scss__clone-coding/10x19/build/img/".concat(r,"/").concat(n,".jpg"));images=(0,_imgPreload.preloadImg)(e)}function addNumberHoverEvents(){for(var e=0;e<NUMBER_DIVS.length;e++)NUMBER_DIVS[e].addEventListener("mouseover",function(e){(0,_hoverNumberEvent.hoverNumberEvent)(e,images)})}function addNumberClickEvents(){for(var e=0;e<NUMBER_DIVS.length;e++)NUMBER_DIVS[e].addEventListener("click",function(e){(0,_hoverNumberEvent.hoverNumberEvent)(e,images)})}function isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}init();

},{"./clickNumberEvent":2,"./hoverNumberEvent ":3,"./imgPreload":4}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paintCenterImage=void 0;var _url=_interopRequireDefault(require("../img/url.json"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var paintCenterImage=function(e,t){var r=document.querySelector(".center__image"),n=document.createElement("a");r.innerHTML="",n.href="".concat(_url.default[e/2+1]),n.appendChild(t[e]),r.appendChild(n)};exports.paintCenterImage=paintCenterImage;

},{"../img/url.json":1}]},{},[5]);
