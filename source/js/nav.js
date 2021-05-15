var navMain = document.querySelector(".page-header");
var pageMain = document.querySelector(".page-main");
var navToggle = document.querySelector(".main-nav__toggle");
var navOpen = document.querySelector(".main-nav__open-button");
var navClose = document.querySelector(".main-nav__close-button");

navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
pageMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageMain.classList.add("main-nav--nojs");
    navOpen.classList.add("open-menu");
    navClose.classList.add("open-menu");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageMain.classList.remove("main-nav--nojs");
    navOpen.classList.remove("open-menu");
    navClose.classList.remove("open-menu");
  }
});
