var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.nav-button');

navToggle.classList.add('nav-button--close');
navMain.classList.add('main-nav--close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
    navToggle.classList.remove('nav-button--close');
    navToggle.classList.add('nav-button--open');
  } else {
    navMain.classList.remove('main-nav--open');
    navMain.classList.add('main-nav--close');
    navToggle.classList.remove('nav-button--open');
    navToggle.classList.add('nav-button--close');
  }
});
