window.$ = window.jQuery = require('jquery');

setTimeout(() => {
const contacts = () => {
  //отправка окна с формой обратной связи со страницы "Контакты"
  $(".contacts-info-form").on('submit', function (e) {
    e.preventDefault();
    $(".modal-overlay").fadeOut(200),
      setTimeout(function () {
        $(".modal-open").addClass("modal-open__visible");
      }, 1000),
      $(this).get(0).reset();
  });
};

contacts();
}, 150)
