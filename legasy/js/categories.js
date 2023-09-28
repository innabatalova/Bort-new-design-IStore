window.$ = window.jQuery = require('jquery');

setTimeout(() => {
const categories = () => {
  //создание кликабельности для всего блока карточки categories
  let linkCard = $(".categories-card");
  linkCard.on("click", function () {
    location.href = '/product-card'; //ссылки на странички категорий
  });
};

categories();
}, 100)

