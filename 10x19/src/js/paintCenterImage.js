export const paintCenterImage = (index, images) => {
  const container = document.querySelector('.center__image');
  container.innerHTML = '';
  container.appendChild(images[index]);
}