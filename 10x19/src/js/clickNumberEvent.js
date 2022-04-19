export const clickNumberEvent = (e) => {
  const id = e.target.dataset.id;
  window.scrollTo({
    top: 0, behavior: "smooth"
  });

  console.log(id);
}