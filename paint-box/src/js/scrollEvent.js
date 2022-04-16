export const scrollEvent = () => {
  const scrollY = document.documentElement.scrollTop;
  const navHeader = document.querySelector('.nav__header');

  if (scrollY > 144) {
    navHeader.classList.add('scroll-event');
  } else {
    navHeader.classList.remove('scroll-event');
  }
}