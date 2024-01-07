const SLIDES = [
  "slide1.png",
  "slide2.png",
  "slide3.png",
  "slide4.png",
  "slide5.png",
  "slide6.png",
  "slide7.png",
];

const SLIDER_CONTAINER = document.querySelector(".slider");
const SLIDER_DOTS_CONTAINER = document.querySelector(".dots");
const SLIDE_LEFT = document.getElementById("slide-left");
const SLIDE_RIGHT = document.getElementById("slide-right");

let slideNumber = 0;

SLIDES.forEach((slide, i) => {
  SLIDER_CONTAINER.innerHTML += `
        <figure class="slide${i + 1}">
            <img src="assets/prices/${slide}" alt="${slide} image" />
            <div class="shadow"></div>
        </figure>`;

  if (i === slideNumber) {
    SLIDER_DOTS_CONTAINER.innerHTML += `<span class="dot active" data-index="${i}"></span>`;
  } else {
    SLIDER_DOTS_CONTAINER.innerHTML += `<span class="dot" data-index="${i}"></span>`;
  }
});

SLIDE_LEFT.addEventListener("click", () => {
  slideNumber <= 0 ? (slideNumber = 0) : slideNumber--;
  SLIDER_CONTAINER.scrollTo(slideNumber * SLIDER_CONTAINER.offsetWidth, 0);
  changeActiveDot(slideNumber);
});

SLIDE_RIGHT.addEventListener("click", () => {
  slideNumber >= SLIDES.length - 1
    ? (slideNumber = SLIDES.length - 1)
    : slideNumber++;
  SLIDER_CONTAINER.scroll(slideNumber * SLIDER_CONTAINER.offsetWidth, 0);
  changeActiveDot(slideNumber);
});

const SLIDER_DOTS = document.querySelectorAll(".dot");

SLIDER_DOTS.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    let targetIndex = parseInt(e.target.dataset.index);
    slideNumber = targetIndex;
    SLIDER_CONTAINER.scroll(slideNumber * SLIDER_CONTAINER.offsetWidth, 0);

    SLIDER_DOTS.forEach((activeDot) => {
      activeDot.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

function changeActiveDot(index) {
  SLIDER_DOTS.forEach((activeDot, i) => {
    if (i === index) {
      activeDot.classList.add("active");
    } else {
      activeDot.classList.remove("active");
    }
  });
}
