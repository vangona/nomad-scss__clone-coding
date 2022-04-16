(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _scrollEvent=require("./scrollEvent"),_resizeEvent=require("./resizeEvent");document.addEventListener("scroll",_scrollEvent.scrollEvent),window.addEventListener("resize",_resizeEvent.resizeEvent);

},{"./resizeEvent":2,"./scrollEvent":3}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resizeEvent=void 0;var resizeEvent=function(){var e=window.innerWidth,i=document.querySelector(".nav__header nav ul");i.innerHTML=e<767?'<a><i class="fa-solid fa-bars"></i></a>':"<li>Nail studio</li>\n<li>Shop product</li>"};exports.resizeEvent=resizeEvent;

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollEvent=void 0;var scrollEvent=function(){var e=document.documentElement.scrollTop,t=document.querySelector(".nav__header");e>144?t.classList.add("scroll-event"):t.classList.remove("scroll-event")};exports.scrollEvent=scrollEvent;

},{}]},{},[1]);
