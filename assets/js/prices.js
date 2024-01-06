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

SLIDES.forEach((slide, i) => {
  SLIDER_CONTAINER.innerHTML += `
        <figure class="slide${i + 1}">
            <img src="assets/prices/${slide}" alt="${slide} image" />
            <div class="shadow"></div>
        </figure>`;
});
