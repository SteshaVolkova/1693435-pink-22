var navMain = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main');
var navToggle = document.querySelector('.main-nav__toggle');
var navOpen = document.querySelector('.main-nav__open-button');
var navClose = document.querySelector('.main-nav__close-button');


navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
pageMain.classList.remove('main-nav--nojs');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageMain.classList.add('main-nav--nojs');
    navOpen.classList.add('open-menu');
    navClose.classList.add('open-menu');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageMain.classList.remove('main-nav--nojs');
    navOpen.classList.remove('open-menu');
    navClose.classList.remove('open-menu');
  }
});

const carousels = document.querySelectorAll(".carousel");

carousels.forEach(initCarousel);

function initCarousel(carousel) {
  const wrapper = carousel.querySelector(".carousel__wrapper");

  const tableMode = !Boolean(wrapper.querySelector(".carousel__slide"));

  const slides = tableMode
    ? wrapper.querySelectorAll(".carousel__table-col")
    : wrapper.querySelectorAll(".carousel__slide");

  const dots = carousel.querySelectorAll(".carousel__dot");

  let current = 0;

  /* Подсвечивает нужную точку при скролле */
  const observerOptions = {
    root: wrapper,
    rootMargin: "0px",
    threshold: 0.5
  };

  function highlightDotOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dots.forEach((dot, index) => {
          const isActive = removeHashFromLink(dot) === entry.target.id;
          dot.classList.toggle("carousel__dot--active", isActive);
          if (isActive) {
            current = index;
            // console.log(`Current of ${carousel.classList[1]}: ${current}`);
          }
        });
      }
    });
  }

  const observer = new IntersectionObserver(
    highlightDotOnScroll,
    observerOptions
  );
  slides.forEach((slide) => {
    observer.observe(slide);
  });

  /* Пролистывает таблицу на вторую позицию */
  const startSlider = carousel.dataset.start;
  if (startSlider) {
    scrollToSlide(slides[Number(startSlider)]);
  }

  /* Меняет поведение точек */
  dots.forEach((dot) => {
    dot.addEventListener("click", (evt) => {
      evt.preventDefault();
      const targetSlide = wrapper.querySelector(dot.getAttribute("href"));
      scrollToSlide(targetSlide);
    });
  });

  /* Кнопки назад-вперёд */
  const controls = carousel.querySelectorAll(".carousel__control");

  if (controls.length) {
    controls.forEach((control) => {
      control.addEventListener("click", (evt) => {
        evt.preventDefault();
        console.log(current);
        const max = slides.length - 1;
        const isPrev = control.classList.contains("carousel__control--prev");
        let target;

        if (isPrev) {

          target = current === 0 ? max : current - 1;
        }
        console.log(slides[target])

        scrollToSlide[slides[target]]


      });
    });
  }

  function scrollToSlide(slide) {
    wrapper.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth"
    });
  }
}

function removeHashFromLink(link) {
  const href = link.getAttribute("href");
  return href.substring(1);
}


var popupEmpty = document.querySelector('.popup-empty-inputs');
var popupSubmit = document.querySelector('.popup-submit');
var closePopup = document.querySelector('.close-popup');

function validate(){
  var lastName=document.forms['form']['last-name'].value;
  var firstName=document.forms['form']['first-name'].value;
  var email=document.forms['form']['email-address'].value;
  if (lastName.length==0){
    popupEmpty.classList.toggle('show-popup');
    return false;
  }
  if (firstName.length==0){
    popupEmpty.classList.add('show-popup');
    return false;
  }
  if (email.length==0){
    popupEmpty.classList.add('show-popup');
    return false;
  }
  if (lastName.length!=0,firstName.length!=0,email.length!=0){
    popupSubmit.classList.add('show-popup');
  }
}

var popupEmptyShow = document.querySelector('.popup-empty-inputs.show-popup');
var popupSubmitShow = document.querySelector('.popup-submit.show-popup');

closePopup.onclick = function(){
  popupEmptyShow.classList.remove('show-popup');
};

closePopup.onclick = function(){
  popupSubmitShow.classList.remove('show-popup');
};
