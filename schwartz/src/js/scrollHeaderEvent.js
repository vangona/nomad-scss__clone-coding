const header = document.querySelector("header");
const headerTitle = document.querySelector("header .header__title");
const headerTitleSpans = document.querySelectorAll(
  "header .header__title span"
);

export const scrollHeaderEvent = () => {
  if (window.scrollY > 100) {
    header.style.height = "50px";
    header.classList.add("header--box-shadow");
    headerTitle.style.justifyContent = "flex-start";
    headerTitleSpans.forEach((headerTitleSpan) => {
      headerTitleSpan.style.fontSize = "1.5rem";
    });
  } else if (window.screenY <= 105) {
    header.style.height = "100px";
    header.classList.remove("header--box-shadow");
    headerTitle.style.justifyContent = "space-between";
    headerTitleSpans.forEach((headerTitleSpan) => {
      headerTitleSpan.style.fontSize = "3rem";
    });
  }
};
