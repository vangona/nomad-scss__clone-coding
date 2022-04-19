import { paintCenterImage } from "./paintCenterImage";

const IMAGE_FOR_FOLDER = 2;

export const hoverNumberEvent = (e, images) => {
  const id = e.target.dataset.id;
  const index = (id - 1) * IMAGE_FOR_FOLDER;
  window.scrollTo({
    top: 0, behavior: "smooth"
  });
  
  paintCenterImage(index, images)
}