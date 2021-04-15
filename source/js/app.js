var navMain = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main');
var navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
pageMain.classList.remove('main-nav--nojs');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
