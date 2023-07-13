import React from 'react'

import SearchbarItem from '../SearchbarItem/SearchbarItem'

import BortLogo1 from '../../../static/image/Bort_logo_1.svg'
import SearchImg from '../../../static/image/search.svg'

const Searchbar = () => {
  const test = [[['product-card.html'], ['Карточка товара']],
  [['#'], ['Подменю Аккумуляторный инструмент']],
  [['#'], ['Подменю Аккумуляторный инструмент']],
  [['#'], ['Подменю Аккумуляторный инструмент']],
  [['#'], ['Подменю Аккумуляторный инструмент']]
  ]

  return(
    <div className="searchbar">

      <div className="searchbar-scrolling-wrapper">
        <a href="index.html" className="searchbar-scrolling-link"><img src={BortLogo1} alt="Bort logo"
          className="searchbar-scrolling-logo" /></a>

        <ul className="searchbar__list">

          <SearchbarItem titleSearchbarItemProps='инструменты' classSearchbarItemProps='tool' 
            hrefSearchbarMenuItemProps='category.html' titleSearchbarMenuItemProps='Аккумуляторный инструмент'
            classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-cordless'
            classSearchbarMenuItemPropsList='cordless'
            arraySearchbarSubmenuItemProps1={[[['product-card.html'], ['Карточка товара']],
            [['#'], ['Подменю Аккумуляторный инструмент']],
            [['#'], ['Подменю Аккумуляторный инструмент']],
            [['#'], ['Подменю Аккумуляторный инструмент']],
            [['#'], ['Подменю Аккумуляторный инструмент']]
            ]}
          />

          <SearchbarItem titleSearchbarItemProps='автотовары' classSearchbarItemProps='car' />

          {/* <li className="searchbar__item searchbar__item__tool">
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
          </li> */}

        </ul>

        <form action="#" className="search">
          <input type="text" className="search-input" />
          <button className="search-button">
            <img src={SearchImg} alt="icon search" className="searchbar__image" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar