import instaUrl from "../img/url.json";

export const paintCenterImage = (index, images) => {
  const container = document.querySelector('.center__image');
  const a = document.createElement('a');
  container.innerHTML = '';
  a.href = `${instaUrl[index / 2 + 1]}`
  a.appendChild(images[index]);
  container.appendChild(a);
}