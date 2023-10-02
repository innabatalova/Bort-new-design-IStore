window.$ = window.jQuery = require('jquery')
let mask = require('jquery-mask-plugin')

setTimeout(() => {

  const index = () => {
    //маска для проверки ввода номера
    $(".bort-phone").mask("+7 (900) 000 00 00")

    //выпадающее меню searchbar
    let menuFocusTool = $(".searchbar__item__tool");
    let menuOpenTool = $(".searchbar__menu__wrapper__tool");
    let menuFocusClining = $(".searchbar__item__clining");
    let menuOpenClining = $(".searchbar__menu__wrapper__clining");
    let menuFocusCar = $(".searchbar__item__car");
    let menuOpenCar = $(".searchbar__menu__wrapper__car");
    let menuFocusTech = $(".searchbar__item__tech");
    let menuOpenTech = $(".searchbar__menu__wrapper__tech");
    let menuFocusHandtool = $(".searchbar__item__handtool");
    let menuOpenHandtool = $(".searchbar__menu__wrapper__handtool");

    menuFocusTool.on("mouseover", function () {
      menuOpenTool.show();
    });
    menuFocusClining.on("mouseover", function () {
      menuOpenClining.show();
    });
    menuFocusCar.on("mouseover", function () {
      menuOpenCar.show();
    });
    menuFocusTech.on("mouseover", function () {
      menuOpenTech.show();
    });
    menuFocusHandtool.on("mouseover", function () {
      menuOpenHandtool.show();
    });

    function closeSearchbar(e, itemFocus, itemOpen) {
      if (
        !itemFocus.is(e.target) && // если курсор не над элементом
        itemFocus.has(e.target).length === 0
      ) {
        // и не над дочерними элементами
        itemOpen.hide(); // скрываем меню
      }
    }

    $(document).on("mouseout", function (e) {
      closeSearchbar(e, menuFocusTool, menuOpenTool)
      closeSearchbar(e, menuFocusClining, menuOpenClining)
      closeSearchbar(e, menuFocusCar, menuOpenCar)
      closeSearchbar(e, menuFocusTech, menuOpenTech)
      closeSearchbar(e, menuFocusHandtool, menuOpenHandtool)
    })

    //раскрывающийся пункт подменю (index decktop)
    let openSubMenuCordless = $(".searchbar-menu-item-cordless");
    let openSubMenuGrinders = $(".searchbar-menu-item-grinders");

    openSubMenuCordless.on("mouseover", function () {
      $(".searchbar__submenu__wrapper__cordless").addClass(
        "searchbar__submenu__wrapper__cordless__visability"
      );
    });
    openSubMenuGrinders.on("mouseover", function () {
      $(".searchbar__submenu__wrapper__grinders").addClass(
        "searchbar__submenu__wrapper__grinders__visability"
      );
    });

    function closeSearchbarSubMenu(e, item, className) {
      if (
        !item.is(e.target) && // если курсор не над элементом
        item.has(e.target).length === 0
      ) {
        // и не над дочерними элементами
        $(`.searchbar__submenu__wrapper__${className}`).removeClass(
          `searchbar__submenu__wrapper__${className}__visability`
        );
      }
    }

    $(document).on("mouseout", function (e) {
      closeSearchbarSubMenu(e, openSubMenuCordless, 'cordless')
      closeSearchbarSubMenu(e, openSubMenuGrinders, 'grinders')
    })

    //открытие мобильного меню
    let openMobileTool = $(".searchmobile-tool");
    let openMobileClining = $(".searchmobile-clining");
    let openMobileCar = $(".searchmobile-car");
    let openMobileTech = $(".searchmobile-tech");
    let openMobileHandtool = $(".searchmobile-handtool");

    function mobileMenuOpenClose(item, className) {
      $(`.menu-${className}`).slideToggle(500);

      if (!item.hasClass("minus")) {
        item.addClass("minus"),
          $(item)
            .children(".plus")
            .html((innerText = "–"))
            .css({ backgroundColor: "black", color: "white" });
      } else {
        item.removeClass("minus"),
          $(item)
            .children(".plus")
            .html((innerText = "+"))
            .css({ backgroundColor: "#F5F5F5", color: "black" })
            .removeClass("minus");
      }
    }

    openMobileTool.on("click", function () {
      mobileMenuOpenClose(openMobileTool, 'tool')
    });
    openMobileClining.on("click", function () {
      mobileMenuOpenClose(openMobileClining, 'clining')
    });
    openMobileCar.on("click", function () {
      mobileMenuOpenClose(openMobileCar, 'car')
    });
    openMobileTech.on("click", function () {
      mobileMenuOpenClose(openMobileTech, 'tech')
    });
    openMobileHandtool.on("click", function () {
      mobileMenuOpenClose(openMobileHandtool, 'handtool')
    })

    //открытие мобильного подменю
    let openMobileSubmenuSaws = $(".searchmobile-saws");
    let openMobileSubmenuDrill = $(".searchmobile-drill");
    let openMobileSubmenuCordless = $(".searchmobile-cordless");
    let openMobileSubmenuGrinder = $(".searchmobile-grinder");
    let openMobileSubmenuMeasuring = $(".searchmobile-measuring");
    let openMobileSubmenuWelding = $(".searchmobile-welding");

    function mobileSubenuOpenClose(item, className) {
      $(`.submenu-${className}`).slideToggle(500);

      if (!item.hasClass("subminus")) {
        item.addClass("subminus"),
          $(item)
            .children(".subplus")
            .html((innerText = "–"))
            .css({ backgroundColor: "black", color: "white" });
      } else {
        item.removeClass("subminus"),
          $(item)
            .children(".subplus")
            .html((innerText = "+"))
            .css({ backgroundColor: "#E3E3E3", color: "black" })
            .removeClass("minus");
      }
    }

    openMobileSubmenuSaws.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuSaws, 'saws')
    });
    openMobileSubmenuDrill.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuDrill, 'drill')
    });
    openMobileSubmenuCordless.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuCordless, 'cordless')
    });
    openMobileSubmenuGrinder.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuGrinder, 'grinder')
    });
    openMobileSubmenuMeasuring.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuMeasuring, 'measuring')
    });
    openMobileSubmenuWelding.on("click", function () {
      mobileSubenuOpenClose(openMobileSubmenuWelding, 'welding')
    })

    //открытие строки поиска и закрытие по клику на "лупу"
    let openSearchInput = $(".logo-search-image");
    openSearchInput.on("click", function () {
      if ($(".logo-search").hasClass("logo-search")) {
        $(".logo-search")
          .addClass("logo-search-visible")
          .removeClass("logo-search"),
          $(".logo-search-input").fadeIn(),
          $(".logo-search-reset").fadeIn();
      } else {
        $(".logo-search-visible")
          .addClass("logo-search")
          .removeClass("logo-search-visible"),
          $(".logo-search-input").fadeOut(),
          $(".logo-search-reset").fadeOut();
      }
    })

    //переключение на мобильное меню при клике на "бургер"
    $(".logo-mobile").on('click', function () {
      $(".searchmobile").fadeIn(), $(".logo-close").fadeIn(1);
    });
    $(".logo-close").on('click', function () {
      $(".searchmobile").fadeOut(), $(".logo-close").fadeOut(1);
    })

    //parallax-эффект для карточки товара
    const parallax = document.querySelector(".parallax-section")
    if (!(parallax === null)) {
      //паралакс эффект для product-card
      let scrollParallax = $(".parallax-section");
      let counter = 0;
      let x = 130;

      if (!(scrollParallax === undefined)) {
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

        let scrollParallax4 = $(".parallax-section3");

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
    }

  }

  index()
}, 50)