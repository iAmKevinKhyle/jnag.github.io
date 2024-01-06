const WORKS_CONTENT = [
  {
    title: "name of the art",
    fileName: "one.png",
  },
  {
    title: "name of the art",
    fileName: "nine.png",
  },
  {
    title: "name of the art",
    fileName: "eight.png",
  },
  {
    title: "name of the art",
    fileName: "two.png",
  },
  {
    title: "name of the art",
    fileName: "seven.png",
  },
  {
    title: "name of the art",
    fileName: "six.png",
  },
  {
    title: "name of the art of the century",
    fileName: "ten.png",
  },
];

const WORKS_CONTAINER = document.getElementById("works");

WORKS_CONTENT.forEach((work, i) => {
  WORKS_CONTAINER.innerHTML += `
    <figure class="work${i + 2} works" title="${work.title}">
      <img
        src="assets/works/${work.fileName}"
        alt="${work.title}"
        class="works-image"
      />
      <figcaption class="px21">${work.title}</figcaption>
      <div class="curtain"></div>
      </figure>
      `;
});

const WORKS = document.querySelectorAll("figure.works");
const POPUP = document.querySelector(".popup");
let POPUP_FIG;
let currentActiveTab;

WORKS.forEach((work) => {
  work.addEventListener("click", (e) => {
    currentActiveTab = e.currentTarget.outerHTML;
    POPUP.innerHTML = currentActiveTab;

    POPUP.style.display = "flex";
    document.body.style.overflow = "hidden";
    POPUP_FIG = document.querySelector(".popup > figure");

    setTimeout(() => {
      POPUP_FIG.style = "transform: scale(1)";
    }, 300);
  });
});

POPUP.addEventListener("click", () => {
  POPUP_FIG = document.querySelector(".popup > figure");
  POPUP_FIG.style = "transform: scale(0)";

  setTimeout(() => {
    POPUP.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});
