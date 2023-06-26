import React from 'react'

import NavbarItem from '../NavbarItem/NavbarItem'

import BortLogo1 from '../../static/image/Bort_logo_1.svg'
import SearchImg from '../../static/image/search.svg'
import LogoSearchArrow from '../../static/image/logo-search-arrow.svg'
import CloseMobileIcon from '../../static/image/close-mobile-icon.svg'
import YoutubeIcon from '../../static/image/Youtube.svg'
import VKIcon from '../../static/image/VK.svg'
import OKIcon from '../../static/image/OK.svg'
import TwitterIcon from '../../static/image/Twitter.svg'


const Header = () => {
  return (
    <header class="header">
      <div class="navigation">
        <div class="grid-container">
          <div class="navigation-wrapper">
            <div class="geolocation">
              <span class="geolocation__title">Ваш город: </span>
              <span class="geolocation__city">Москва</span>
            </div>
            <div class="navigation__sub">
              <ul class="navbar">
                <NavbarItem hrefProps='about-company.html' itemProps='О компании'/>
                <NavbarItem hrefProps='guarantee.html"' itemProps='Оплата и доставка'/>
                <NavbarItem hrefProps='be-dealer.html' itemProps='Контакты'/>
                <NavbarItem hrefProps='#' itemProps='Гарантия и сервис'/>
                <NavbarItem hrefProps='#' itemProps='Оптовый портал'/>
                <NavbarItem hrefProps='#' itemProps='Расширенная гарантия' classProps='navbar__item_garanty'/>
              </ul>
              <div>
                <a href="cabinet.html" class="account">Личный кабинет</a>
                <a href="cabinet.html" class="account busket">Корзина (0)</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <div class="logo-wrapper">
          <button type="button" class="logo-mobile">
            <span class="logo-line"></span>
            <span class="logo-line"></span>
            <span class="logo-line logo-end"></span>
          </button>
          <img src={CloseMobileIcon} alt="close mobile icon" class="logo-close" />
          <a href="index.html"><img src={BortLogo1} alt="Bort logo" class="logo-image" /></a>

          <form action="#" class="logo-search">
            <img src={SearchImg} alt="icon search" class="logo-search-image" />
            <input type="text" class="logo-search-input" placeholder="Поиск по каталогу" />
            <button type="reset" class="logo-search-reset">
              <img src={LogoSearchArrow} alt="logo search arrow" class="logo-search-arrow" />
            </button>
          </form>

          <div class="searchmobile">
            <span class="searchmobile-shadow"></span>
            <div class="geolocation geolocation_searchmobile">
              <span class="geolocation__title geolocation__title_searchmobile">Ваш город: </span>
              <span class="geolocation__city">Москва</span>
            </div>
            <ul class="searchmobile-wrapper">
              <li class="searchmobile-item">
                <div class="searchmobile-item-wrapper searchmobile-tool">
                  <span class="searchmobile-title"><a href="listing.html">инструменты</a></span>
                  <span class="plus searchmobile-plus">+</span>
                </div>
                <ul class="searchmobile-menu menu-tool">
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-saws">
                      <span class="searchmobile-menu-title"><a href="category.html">Пилы</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-saws">
                      <li class="searchmobile-submenu-item">
                        <a href="product-card.html">Лобзики электрические</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="product-card.html">Пилы циркулярные</a>
                      </li>
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="product-card.html">Сабельные пилы</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-drill">
                      <span class="searchmobile-menu-title"><a href="category.html">Дрели и миксеры</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-drill">
                      <li class="searchmobile-submenu-item">
                        <a href="#">Сетевые дрели</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Дрели ударные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Сетевые шуруповерты</a>
                      </li>
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="#">Граверы</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Перфораторы</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-cordless">
                      <span class="searchmobile-menu-title"><a href="#">Аккумуляторный инструмент</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-cordless">
                      <li class="searchmobile-submenu-item">
                        <a href="#">Болгарки (УШМ) аккумуляторные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Перфораторы аккумуляторные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Дрели-шуруповерты аккумуляторые</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Гайковерты аккумуляторные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Лобзики аккумуляторные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Пилы сабельные аккумуляторные</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Реноваторы аккумуляторные</a>
                      </li>
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="#">Аккумуляторы для инструмента</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Рубанки электрические</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Фрезеры электрические</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-grinder">
                      <span class="searchmobile-menu-title"><a href="#">Шлифмашины</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-grinder">
                      <li class="searchmobile-submenu-item">
                        <a href="#">Орбитальные шлифмашины</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Ленточные шлифмашины</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Болгарки (УШМ)</a>
                      </li>
                      <li class="searchmobile-submenu-item">
                        <a href="#">Вибрационные шлифмашины</a>
                      </li>
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="#">Реноваторы</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Фены технические</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Краскопульты</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-measuring">
                      <span class="searchmobile-menu-title"><a href="#">Измерительные инструменты</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-measuring">
                      <li class="searchmobile-submenu-item">
                        <a href="#">Лазерные уровни</a>
                      </li>
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="#">Мультиметры</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper searchmobile-welding">
                      <span class="searchmobile-menu-title"><a href="#">Сварочное оборудование</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                    <ul class="searchmobile-submenu submenu-welding">
                      <li class="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                        <a href="#">Аппараты для сварки труб</a>
                      </li>
                    </ul>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Клеевые пистолеты</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="searchmobile-item">
                <div class="searchmobile-item-wrapper searchmobile-clining">
                  <span class="searchmobile-title"><a href="#">клининг</a></span>
                  <span class="plus searchmobile-plus">+</span>
                </div>
                <ul class="searchmobile-menu menu-clining">
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Пылесосы бытовые</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Пылесосы строительные</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Пылесосы автомобильные</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Роботы-пылесосы</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="searchmobile-item">
                <div class="searchmobile-item-wrapper searchmobile-car">
                  <span class="searchmobile-title"><a href="#">автотовары</a></span>
                  <span class="plus searchmobile-plus">+</span>
                </div>
                <ul class="searchmobile-menu menu-car">
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Ударные гайковерты</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Полировальные машины</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Компрессоры</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="searchmobile-item">
                <div class="searchmobile-item-wrapper searchmobile-tech">
                  <span class="searchmobile-title"><a href="#">Бытовая техника</a></span>
                  <span class="plus searchmobile-plus">+</span>
                </div>
                <ul class="searchmobile-menu menu-tech">
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Отпариватели</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Парогенераторы</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Мойки воздуха</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Измельчители отходов</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Аксессуары</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="searchmobile-item">
                <div class="searchmobile-item-wrapper searchmobile-handtool">
                  <span class="searchmobile-title"><a href="#">Ручные инструменты</a></span>
                  <span class="plus searchmobile-plus">+</span>
                </div>
                <ul class="searchmobile-menu menu-handtool">
                  <li class="searchmobile-menu-item">
                    <div class="searchmobile-item-wrapper">
                      <span class="searchmobile-menu-title"><a href="#">Наборы ручного инструмента</a></span>
                      <span class="subplus searchmobile-menu-plus">+</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="footer-mobile">
              <div class="footer-mobile-listing-wrapper">
                <ul class="footer-mobile-listing">
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="about-company.html">О компании</a>
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    Новости
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="guarantee.html">Гарантия и сервис</a>
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="be-dealer.html">Стать дилером</a>
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="contacts.html">Контакты</a>
                  </li>
                </ul>
                <ul class="footer-mobile-listing">
                  <li class="bort-listing-item footer-mobile-listing-item">
                    Конфиденциальность
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="be-dealer.html">Стать дилером</a>
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    <a href="dropshipping.html">Дропшиппинг</a>
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    Оптовый портал
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    Сервисные центры
                  </li>
                  <li class="bort-listing-item footer-mobile-listing-item">
                    Наши партнеры
                  </li>
                </ul>
              </div>
              <div class="footer-contacts">
                <a href="tel:74997001034" target="_blank" class="footer-phone">+7 <span
                  class="footer-phone-code">(499)</span> 700-10-34</a>

                <div class="footer-address">
                  Россия, Москва, Авиационная улица, 79В
                </div>

                <div class="footer-map">
                  <a href="#" target="_blank">Показать на карте</a>
                </div>

                <div class="icons">
                  <a href="#" target="_blank" class="footer-link">
                    <img src={YoutubeIcon} alt="Youtube icon" class="icons-image" />
                  </a>

                  <a href="#" target="_blank" class="footer-link">
                    <img src={VKIcon} alt="VK icon" class="icons-image" />
                  </a>

                  <a href="#" target="_blank" class="footer-link">
                    <img src={OKIcon} alt="OK icon" class="icons-image" />
                  </a>
                  <a href="#" target="_blank" class="footer-link"><img src={TwitterIcon} alt="Twitter icon"
                    class="icons-image" /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="info-wrapper">
            <div class="info">
              <span class="info__span">Доступность, эргономичность и качество инструментов,
                <br />создаваемых для вас и вашего бизнеса.
              </span>
              <span class="info__span info__work">Работаем с 1993 года!</span>
            </div>

            <button class="bort-button-orange45 bort-button-orange45_ready">
              Написать нам
            </button>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <div class="searchbar">
          <div class="searchbar-scrolling-wrapper">
            <a href="index.html" class="searchbar-scrolling-link"><img src={BortLogo1} alt="Bort logo"
              class="searchbar-scrolling-logo" /></a>
            <ul class="searchbar__list">
              <li class="searchbar__item searchbar__item__tool">
                инструменты
                <ul class="searchbar__menu__wrapper__tool searchbar-menu-wrapper">
                  <li class="searchbar__menu__topline"></li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-cordless
                    ">
                    <a href="category.html">Аккумуляторный инструмент</a>
                    <ul class="searchbar__submenu__wrapper__cordless">
                      <li class="searchbar__submenu__topline"></li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="product-card.html">Карточка товара</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                    </ul>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-drills
                    ">
                    <a href="#">Дрели и миксеры</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-hammers
                    ">
                    <a href="#">Перфораторы</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-saws
                    ">
                    <a href="#">Пилы</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-planers
                    ">
                    <a href="#">Рубанки электрические</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-milling
                    ">
                    <a href="#">Фрезеры электрические</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-grinders
                    ">
                    <a href="#">Шлифмашины</a>
                    <ul class="searchbar__submenu__wrapper__grinders">
                      <li class="searchbar__submenu__topline"></li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Орбитальные шлифмашины</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Ленточные шлифмашины</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Граверы</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Болгарки (УШМ)</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Многофункциональные</a>
                      </li>
                      <li class="bort-menu-item searchbar__submenu__item">
                        <a href="#">Машины шлифовальные вибрационные</a>
                      </li>
                    </ul>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-dryers
                    ">
                    <a href="#">Фены технические</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-spray
                    ">
                    <a href="#">Краскопульты</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-measuring
                    ">
                    <a href="#">Измерительные инструменты</a>
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-welding
                    ">
                    <a href="#">Сварочное оборудование</a>
                  </li>
                </ul>
              </li>
              <li class="searchbar__item searchbar__item__clining">
                клининг
                <ul class="
                    searchbar-menu-wrapper searchbar__menu__wrapper__clining
                  ">
                  <li class="searchbar__menu__topline"></li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                </ul>
              </li>

              <li class="searchbar__item searchbar__item__car">
                автотовары
                <ul class="searchbar-menu-wrapper searchbar__menu__wrapper__car">
                  <li class="searchbar__menu__topline"></li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                </ul>
              </li>
              <li class="searchbar__item searchbar__item__tech">
                бытовая техника
                <ul class="searchbar-menu-wrapper searchbar__menu__wrapper__tech">
                  <li class="searchbar__menu__topline"></li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                </ul>
              </li>
              <li class="searchbar__item searchbar__item__handtool">
                ручные инструменты
                <ul class="
                    searchbar-menu-wrapper searchbar__menu__wrapper__handtool
                  ">
                  <li class="searchbar__menu__topline"></li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li class="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                </ul>
              </li>
            </ul>

            <form action="#" class="search">
              <input type="text" class="search-input" />
              <button class="search-button">
                <img src={SearchImg} alt="icon search" class="searchbar__image" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;