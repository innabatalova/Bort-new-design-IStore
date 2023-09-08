window.$ = window.jQuery = require('jquery');

setTimeout(() => {

const newsView = () => {
  //ссылка по клику на кнопку "news-view-button"
  $(".news-view-button").on('click', function () {
    location.href = "/news-preview";
  });
};

newsView();
}, 115)
