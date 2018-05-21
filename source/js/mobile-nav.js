var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.classList.add('main-nav__toggle--close');
navMain.classList.add('main-nav--close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
    navToggle.classList.remove('main-nav__toggle--close');
    navToggle.classList.add('main-nav__toggle--open');
  } else {
    navMain.classList.remove('main-nav--open');
    navMain.classList.add('main-nav--close');
    navToggle.classList.remove('main-nav__toggle--open');
    navToggle.classList.add('main-nav__toggle--close');
  }
});
