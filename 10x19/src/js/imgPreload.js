const images = [];
export const preloadImg = (sources) => {
  for (let i = 0; i < sources.length; i++) {
    images[i] = new Image();
    images[i].src = sources[i];
  }

  return images;
}