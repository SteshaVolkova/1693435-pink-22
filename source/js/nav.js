var navMain = document.querySelector(".page-header");
var pageMain = document.querySelector(".page-main");
var navToggle = document.querySelector(".main-nav__toggle");
var navOpen = document.querySelector(".main-nav__open-button");
var navClose = document.querySelector(".main-nav__close-button");

navMain.classList.remove("nojs");
navMain.classList.remove("opened");
pageMain.classList.remove("nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("closed")) {
    navMain.classList.remove("closed");
    navMain.classList.add("opened");
    pageMain.classList.add("nojs");
    navOpen.classList.add("open-menu");
    navClose.classList.add("open-menu");
  } else {
    navMain.classList.add("closed");
    navMain.classList.remove("opened");
    pageMain.classList.remove("nojs");
    navOpen.classList.remove("open-menu");
    navClose.classList.remove("open-menu");
  }
});
