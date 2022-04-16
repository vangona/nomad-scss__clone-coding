export const resizeEvent = () => {
  const windowWidth = window.innerWidth;
  const navHeader = document.querySelector('.nav__header nav ul');

  if (windowWidth < 767) {
    navHeader.innerHTML = '<a><i class="fa-solid fa-bars"></i></a>';
  } else {
    navHeader.innerHTML = '<li>Nail studio</li>\n<li>Shop product</li>';
  }
}