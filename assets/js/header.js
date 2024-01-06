const BUTTONS = document.querySelectorAll(".navigation-button");
const CONTENTS = document.querySelectorAll(".content");
const HEADER = document.querySelector(".header");
let backgroundColor = "#e7dfd8";
let textColor = "#231f20";

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    if (!isDarkMode) {
      HEADER.style.backgroundColor = backgroundColor;
      HEADER.style.boxShadow = `0 1px 10px 1px ${textColor}`;
    } else {
      HEADER.style.backgroundColor = textColor;
      HEADER.style.boxShadow = `0 1px 10px 1px ${backgroundColor}`;
    }
  } else {
    HEADER.style.backgroundColor = "transparent";
    HEADER.style.boxShadow = `none`;
  }

  debounceScroll();
});

BUTTONS.forEach((button) => {
  button.addEventListener("click", (e) => {
    let link = e.currentTarget.innerHTML.toLowerCase();
    let currentTarget = document.getElementById(link).offsetTop;
    const HEADER_HEIGHT = HEADER.offsetHeight;

    window.scrollTo(0, currentTarget - (HEADER_HEIGHT + 10));
  });
});

function scroll() {
  CONTENTS.forEach((content) => {
    if (
      window.scrollY > content.offsetTop - (HEADER.offsetHeight + 15) &&
      window.scrollY <
        content.offsetTop + content.offsetHeight - (HEADER.offsetHeight + 15)
    ) {
      BUTTONS.forEach((button) => {
        button.classList.remove("active");
      });
      document
        .querySelector(`.${content.id.toLocaleLowerCase()}`)
        .classList.add("active");
    }
  });
}

function debounce(func, delay = 25) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

let debounceScroll = debounce(() => scroll(), 100);
