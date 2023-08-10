window.$ = window.jQuery = require('jquery');

setTimeout(() => { 

const partners = () => {
  //переключение на страничку "стать дилером" со страницы partners
  $(".partners-board-button").on('click', function () {
    location.href = "be-dealer.html";
  });
};

partners();
}, 500)
