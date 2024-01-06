const DARK_MODE = document.querySelector(".dark-mode-container > i");
const ROOT = document.querySelector(":root").style;
let isDarkMode = getMode();

window.addEventListener("load", () => {
  saveMode(isDarkMode);
});

DARK_MODE.addEventListener("click", () => {
  setModeButton();
});

function saveMode(darkMode) {
  localStorage.setItem("dark-mode", JSON.stringify(darkMode));

  if (!darkMode) {
    DARK_MODE.classList.add("fa-solid");
    DARK_MODE.classList.remove("fa-regular");
    ROOT.setProperty("--background-color", "#e7dfd8");
    ROOT.setProperty("--text-color", "#231f20");
  } else {
    DARK_MODE.classList.add("fa-regular");
    DARK_MODE.classList.remove("fa-solid");
    ROOT.setProperty("--background-color", "#231f20");
    ROOT.setProperty("--text-color", "#e7dfd8");
  }
}

function getMode() {
  return localStorage.getItem("dark-mode")
    ? JSON.parse(localStorage.getItem("dark-mode"))
    : false;
}

function setModeButton() {
  if (!isDarkMode) {
    isDarkMode = true;
    saveMode(isDarkMode);
  } else {
    isDarkMode = false;
    saveMode(isDarkMode);
  }
}
