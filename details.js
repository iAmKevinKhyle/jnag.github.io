const data = {
  user: "Jomar Nedroda",
  desc: "I'm a Traditional and Digital Artist in Cavite, Philippines.",
  link: "@oh_ri_on",
  number: "09999999999",
};

const links = [
  {
    iconName: "facebook",
    href: "#",
  },
  {
    iconName: "instagram",
    href: "#",
  },
  {
    iconName: "twitter",
    href: "#",
  },
];

// BEFORE YOU MODIFY THE ABOVE ITEMS MAKE SURE YOU KNOW WHAT YOURE DOING
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// DO NOT CHANGE ANYTING FROM BELOW HERE

const NAME = document.querySelector(".figure-name");
const DESC = document.querySelector(".figure-desc");
const LINK = document.querySelector(".link a");
const ICON_CONTAINER = document.querySelector(".icon-container");
const CONTACT_ICON_CONTAINER = document.querySelector(
  "article#contact > div.right-content > div.container"
);
const FOOTER_CONTAINER = document.querySelector("footer.footer > div.content");
let result = "";
let footerResult = "";

function createElement() {
  links.forEach((link) => {
    result += `<a href="${link.href}" title="${
      link.href
    }" class="link-icon px24"
        ><i class="fa-brands fa-${link.iconName.toLocaleLowerCase()}"></i
      ></a>`;
  });
}

createElement();

window.addEventListener("DOMContentLoaded", () => {
  NAME.textContent = data.user;
  DESC.textContent = data.desc;
  LINK.textContent = data.link;
  let date = new Date();

  footerResult += `
      <a href="#" class="number px24">${data.number}</a>
      <p>jnag.blog ©${date.getFullYear()}</p>
      <a href="#" class="ig px24">${data.link}</a>
      `;

  ICON_CONTAINER.innerHTML = result;
  CONTACT_ICON_CONTAINER.innerHTML = result;
  FOOTER_CONTAINER.innerHTML = footerResult;
});
