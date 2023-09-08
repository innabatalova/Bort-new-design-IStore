window.$ = window.jQuery = require('jquery');
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

setTimeout(() => {

const index = () => {
  //получение размера отступа для внутреннего контента в main-slider
  let left = $('.grid-container').offset().left;
  let marginLeft = left + 15;
  $(".main-card-wrapper").css("left", marginLeft + "px");
  $(window).on("resize", function () {
    let left = $('.grid-container').offset().left;
    let marginLeft = left + 15;
    $(".main-card-wrapper").css("left", marginLeft + "px");
  });

  //создание кликабельности для кнопки "Стать дилером" на главной странице
  let linkDealer = $(".be-dealer-button-link");
  linkDealer.on("click", function () {
    window.open("/be-dealer"); //ссылки на странички категорий
  });

  //карусель index main-slider

  //инициализация слайдера
  $(function () {
    $(".main-slider").owlCarousel();
  });

  //адаптив карусели index main-slider
  $(".main-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navContainer: ".main-slider-navigation",
    dotsEach: true,
    navText: [
      "<img src='http://localhost:3000/img/main-prev.svg'>",
      "<img src='http://localhost:3000/img/main-next.svg'>"
    ],
  });

  $(".main__button").on("click", function () {
    location.href = "/product-card"; //ссылки на странички категорий
  });

  //карусель index novelty-slider

  //инициализация слайдера
  $(function () {
    $(".novelty-slider").owlCarousel();
  });
  //адаптив карусели index novelty-slider

  $(".novelty-slider").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".novelty-slider-navigation",
    navText: [
      "<img src='http://localhost:3000/img/novelty-slider-prev.svg'>",
      "<img src='http://localhost:3000/img/novelty-slider-next.svg'>"
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  });

  //карусель index popular-slider

  //инициализация слайдера
  $(function () {
    $(".popular-slider").owlCarousel();
  });
  //адаптив карусели popular-slider
  $(".popular-slider").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: ".popular-slider-navigation",
    navText: [
      "<img src='http://localhost:3000/img/novelty-slider-prev.svg'>",
      "<img src='http://localhost:3000/img/novelty-slider-next.svg'>"
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  });

  //создание кликабельности для ссылки "Где купить?" с открытием в новой вкладке
  let linkNoveltyCard = $(".novelty-card");
  linkNoveltyCard.on("click", function () {
    window.open("/product-card"); //ссылки на странички категорий
  });
  let linkPopularCard = $(".popular-card");
  linkPopularCard.on("click", function () {
    window.open("/product-card"); //ссылки на странички категорий
  });
};

index();

}, 100)
