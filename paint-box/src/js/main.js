import { scrollEvent } from "./scrollEvent";
import { resizeEvent } from "./resizeEvent";

document.addEventListener('scroll', scrollEvent);
window.addEventListener('resize', resizeEvent);