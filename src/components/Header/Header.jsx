import React from 'react'

import NavbarItem from '../NavbarItem/NavbarItem'
import SearchMobile from '../SearchMobile/SearchMobile'

import BortLogo1 from '../../static/image/Bort_logo_1.svg'
import SearchImg from '../../static/image/search.svg'
import LogoSearchArrow from '../../static/image/logo-search-arrow.svg'
import CloseMobileIcon from '../../static/image/close-mobile-icon.svg'


const Header = () => {
  return (
    <header className="header">

      <div className="navigation">
        <div className="grid-container">
          <div className="navigation-wrapper">
            <div className="geolocation">
              <span className="geolocation__title">Ваш город: </span>
              <span className="geolocation__city">Москва</span>
            </div>
            <div className="navigation__sub">
              <ul className="navbar">
                <NavbarItem hrefProps='about-company.html' itemProps='О компании' />
                <NavbarItem hrefProps='guarantee.html"' itemProps='Оплата и доставка' />
                <NavbarItem hrefProps='be-dealer.html' itemProps='Контакты' />
                <NavbarItem hrefProps='#' itemProps='Гарантия и сервис' />
                <NavbarItem hrefProps='#' itemProps='Оптовый портал' />
                <NavbarItem hrefProps='#' itemProps='Расширенная гарантия' classProps='navbar__item_garanty' />
              </ul>
              <div>
                <a href="cabinet.html" className="account">Личный кабинет</a>
                <a href="cabinet.html" className="account busket">Корзина (0)</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="logo-wrapper">
          <button type="button" className="logo-mobile">
            <span className="logo-line"></span>
            <span className="logo-line"></span>
            <span className="logo-line logo-end"></span>
          </button>
          <img src={CloseMobileIcon} alt="close mobile icon" className="logo-close" />
          <a href="index.html"><img src={BortLogo1} alt="Bort logo" className="logo-image" /></a>

          <form action="#" className="logo-search">
            <img src={SearchImg} alt="icon search" className="logo-search-image" />
            <input type="text" className="logo-search-input" placeholder="Поиск по каталогу" />
            <button type="reset" className="logo-search-reset">
              <img src={LogoSearchArrow} alt="logo search arrow" className="logo-search-arrow" />
            </button>
          </form>

          <SearchMobile/>

          <div className="info-wrapper">
            <div className="info">
              <span className="info__span">Доступность, эргономичность и качество инструментов,
                <br />создаваемых для вас и вашего бизнеса.
              </span>
              <span className="info__span info__work">Работаем с 1993 года!</span>
            </div>

            <button className="bort-button-orange45 bort-button-orange45_ready">
              Написать нам
            </button>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="searchbar">
          <div className="searchbar-scrolling-wrapper">
            <a href="index.html" className="searchbar-scrolling-link"><img src={BortLogo1} alt="Bort logo"
              className="searchbar-scrolling-logo" /></a>
            <ul className="searchbar__list">
              <li className="searchbar__item searchbar__item__tool">
                инструменты
                <ul className="searchbar__menu__wrapper__tool searchbar-menu-wrapper">
                  <li className="searchbar__menu__topline"></li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-cordless
                    ">
                    <a href="category.html">Аккумуляторный инструмент</a>
                    <ul className="searchbar__submenu__wrapper__cordless">
                      <li className="searchbar__submenu__topline"></li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="product-card.html">Карточка товара</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Подменю Аккумуляторный инструмент</a>
                      </li>
                    </ul>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-drills
                    ">
                    <a href="#">Дрели и миксеры</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-hammers
                    ">
                    <a href="#">Перфораторы</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-saws
                    ">
                    <a href="#">Пилы</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-planers
                    ">
                    <a href="#">Рубанки электрические</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-milling
                    ">
                    <a href="#">Фрезеры электрические</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-grinders
                    ">
                    <a href="#">Шлифмашины</a>
                    <ul className="searchbar__submenu__wrapper__grinders">
                      <li className="searchbar__submenu__topline"></li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Орбитальные шлифмашины</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Ленточные шлифмашины</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Граверы</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Болгарки (УШМ)</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Многофункциональные</a>
                      </li>
                      <li className="bort-menu-item searchbar__submenu__item">
                        <a href="#">Машины шлифовальные вибрационные</a>
                      </li>
                    </ul>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-dryers
                    ">
                    <a href="#">Фены технические</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-spray
                    ">
                    <a href="#">Краскопульты</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-measuring
                    ">
                    <a href="#">Измерительные инструменты</a>
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item
                      searchbar__menu__item__tool
                      searchbar-menu-item-welding
                    ">
                    <a href="#">Сварочное оборудование</a>
                  </li>
                </ul>
              </li>
              <li className="searchbar__item searchbar__item__clining">
                клининг
                <ul className="
                    searchbar-menu-wrapper searchbar__menu__wrapper__clining
                  ">
                  <li className="searchbar__menu__topline"></li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню клининг
                  </li>
                </ul>
              </li>

              <li className="searchbar__item searchbar__item__car">
                автотовары
                <ul className="searchbar-menu-wrapper searchbar__menu__wrapper__car">
                  <li className="searchbar__menu__topline"></li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню автотовары
                  </li>
                </ul>
              </li>
              <li className="searchbar__item searchbar__item__tech">
                бытовая техника
                <ul className="searchbar-menu-wrapper searchbar__menu__wrapper__tech">
                  <li className="searchbar__menu__topline"></li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню бытовая техника
                  </li>
                </ul>
              </li>
              <li className="searchbar__item searchbar__item__handtool">
                ручные инструменты
                <ul className="
                    searchbar-menu-wrapper searchbar__menu__wrapper__handtool
                  ">
                  <li className="searchbar__menu__topline"></li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                  <li className="
                      bort-menu-item
                      searchbar-menu-item searchbar__menu__item
                    ">
                    Меню ручные инструменты
                  </li>
                </ul>
              </li>
            </ul>

            <form action="#" className="search">
              <input type="text" className="search-input" />
              <button className="search-button">
                <img src={SearchImg} alt="icon search" className="searchbar__image" />
              </button>
            </form>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;