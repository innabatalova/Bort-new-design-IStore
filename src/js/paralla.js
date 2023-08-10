window.$ = window.jQuery = require('jquery');

setTimeout(() => {

const paralla = () => {
  //паралакс эффект для product-card
  let scrollParallax = $(".parallax-section");
  let counter = 0;
  let x = 130;

  if(!scrollParallax === undefined){

  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop() + $(window).height();
    let offset = scrollParallax.offset().top + x;

    if (scroll > offset && counter == 0) {
      $(".parallax-object").css({ transform: "translateY(-55px)" });
      counter = 0;
    } else {
      $(".parallax-object").css({ transform: "translateY(0)" });
    }
  });

  let scrollParallax2 = $(".parallax-section2");

  $(window).on('scroll', function () {
    let scroll2 = $(window).scrollTop() + $(window).height();
    let offset2 = scrollParallax2.offset().top + x;

    if (scroll2 > offset2 && counter == 0) {
      $(".parallax-object2").css({ transform: "translateY(-55px)" });
      counter = 0;
    } else {
      $(".parallax-object2").css({ transform: "translateY(0)" });
    }
  });

  let scrollParallax3 = $(".parallax-section3");

  $(window).on('scroll', function () {
    let scroll3 = $(window).scrollTop() + $(window).height();
    let offset3 = scrollParallax3.offset().top + x;

    if (scroll3 > offset3 && counter == 0) {
      $(".parallax-object3").css({ transform: "translateY(-55px)" });
      counter = 0;
    } else {
      $(".parallax-object3").css({ transform: "translateY(0)" });
    }
  });

  let scrollParallax4 = $(".parallax-section4");

  $(window).on('scroll', function () {
    let scroll4 = $(window).scrollTop() + $(window).height();
    let offset4 = scrollParallax4.offset().top;

    if (scroll4 > offset4 && counter == 0) {
      $(".parallax-object4").css({ transform: "translateY(-55px)" });
      counter = 0;
    } else {
      $(".parallax-object4").css({ transform: "translateY(0)" });
    }
  });
}
};

paralla();
}, 450)
