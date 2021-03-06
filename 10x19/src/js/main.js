import { preloadImg } from "./imgPreload";
import { clickNumberEvent } from "./clickNumberEvent";
import { hoverNumberEvent } from "./hoverNumberEvent ";

const PAGES = 10;
const IMG_NUMBERS_FOR_PAGE = 2;
const NUMBER_DIVS = document.querySelectorAll('.number');
let images = [];

init();

function init () {
  preload();

  if (isMobile()) {
    addNumberClickEvents();
  } else {
    addNumberHoverEvents();
  }
}

function preload() {
  const sources = [];
  for (let i = 1; i <= PAGES; i++) {
    for (let j = 1; j <= IMG_NUMBERS_FOR_PAGE; j++) {
      sources.push(`https://cdn.jsdelivr.net/gh/vangona/scss__clone-coding/10x19/build/img/${i}/${j}.jpg`);
    }
  }
  
  images = preloadImg(sources);
}

function addNumberHoverEvents() {
  for (let i = 0; i < NUMBER_DIVS.length; i++) {
    NUMBER_DIVS[i].addEventListener('mouseover', e => {
      hoverNumberEvent(e, images)
    });
  }
}

function addNumberClickEvents() {
  for (let i = 0; i < NUMBER_DIVS.length; i++) {
    NUMBER_DIVS[i].addEventListener('click', e => {
      hoverNumberEvent(e, images)
    });
  }
}

function isMobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}