var popularCardOrder = document.querySelector('.product-card-full__button');
var card = document.querySelector('.product-cards__in-card');
var popup = document.querySelector('.modal');

popularCardOrder.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--active');
});

card.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList('modal--active');
});
