var popularCardOrder = document.querySelector('.product-card-full__button');
var popup = document.querySelector('.modal');
var cards = document.querySelectorAll('.product-cards__in-card');
var close = document.querySelector('.modal__close');

if (popularCardOrder) {
  popularCardOrder.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal--active');
  })
}

if (cards) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal--active');
    })
  }
}

close.addEventListener('click', function(evt) {
  evt.preventDefault;
  popup.classList.remove('modal--active');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove('modal--active');
  }
})
