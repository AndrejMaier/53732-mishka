var popularCardOrder = document.querySelector('.product-card-full__button');
var popup = document.querySelector('.modal');
var cards = document.querySelectorAll('.product-cards__in-card');

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
