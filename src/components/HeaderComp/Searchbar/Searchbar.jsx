import React from 'react'

import SearchbarItem from '../SearchbarItem/SearchbarItem'

import BortLogo1 from '../../../static/image/Bort_logo_1.svg'
import SearchImg from '../../../static/image/search.svg'

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-scrolling-wrapper">
        <a href="/" className="searchbar-scrolling-link"><img src={BortLogo1} alt="Bort logo"
          className="searchbar-scrolling-logo" /></a>
        <ul className="searchbar__list">
          <SearchbarItem titleSearchbarItemProps='инструменты' classSearchbarItemProps='tool'
            hrefSearchbarMenuItemProps='/category'
            arraySearchbarMenuItemProps={[
              [['#'], ['Аккумуляторный инструмент'], ['searchbar__menu__item__tool searchbar-menu-item-cordless'],
                'cordless', [
                [['/product-card'], ['Карточка товара']],
                [['#'], ['Подменю Аккумуляторный инструмент']],
                [['#'], ['Подменю Аккумуляторный инструмент']],
                [['#'], ['Подменю Аккумуляторный инструмент']],
                [['#'], ['Подменю Аккумуляторный инструмент']]
              ]],
              [['#'], ['Дрели и миксеры'], ['searchbar__menu__item__tool searchbar-menu-item-drills'],
                'drills', []],
              [['#'], ['Перфораторы'], ['searchbar__menu__item__tool searchbar-menu-item-hammers'],
                'hammers', []],
              [['#'], ['Пилы'], ['searchbar__menu__item__tool searchbar-menu-item-saws'],
                'saws', []],
              [['#'], ['Рубанки электрические'], ['searchbar__menu__item__tool searchbar-menu-item-planers'],
                'planers', []],
              [['#'], ['Фрезеры электрические'], ['searchbar__menu__item__tool searchbar-menu-item-milling'],
                'milling', []],
              [['#'], ['Шлифмашины'], ['searchbar__menu__item__tool searchbar-menu-item-grinders'],
                'grinders', [
                [['#'], ['Орбитальные шлифмашины']],
                [['#'], ['Ленточные шлифмашины']],
                [['#'], ['Граверы']],
                [['#'], ['Болгарки (УШМ)']],
                [['#'], ['Многофункциональные']],
                [['#'], ['Машины шлифовальные вибрационные']]
              ]],
              [['#'], ['Фены технические'], ['searchbar__menu__item__tool searchbar-menu-item-dryers'],
                'dryers', []],
              [['#'], ['Краскопульты'], ['searchbar__menu__item__tool searchbar-menu-item-spray'],
                'spray', []],
              [['#'], ['Измерительные инструменты'], ['searchbar__menu__item__tool searchbar-menu-item-measuring'],
                'measuring', []],
              [['#'], ['Сварочное оборудование'], ['searchbar__menu__item__tool searchbar-menu-item-welding'],
                'welding', []]
            ]}
          />
          <SearchbarItem titleSearchbarItemProps='клининг' classSearchbarItemProps='clining'
            hrefSearchbarMenuItemProps='#'
            arraySearchbarMenuItemProps={[
              [['#'], ['Меню клининг'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню клининг'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню клининг'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню клининг'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню клининг'], ['searchbar__menu__item__tool'],
                '', []]
            ]}
          />
          <SearchbarItem titleSearchbarItemProps='автотовары' classSearchbarItemProps='car'
            hrefSearchbarMenuItemProps='#'
            arraySearchbarMenuItemProps={[
              [['#'], ['Меню автотовары'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню автотовары'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню автотовары'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню автотовары'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню автотовары'], ['searchbar__menu__item__tool'],
                '', []]
            ]}
          />
          <SearchbarItem titleSearchbarItemProps='бытовая техника' classSearchbarItemProps='tech'
            hrefSearchbarMenuItemProps='#'
            arraySearchbarMenuItemProps={[
              [['#'], ['Меню бытовая техника'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню бытовая техника'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню бытовая техника'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню бытовая техника'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню бытовая техника'], ['searchbar__menu__item__tool'],
                '', []]
            ]}
          />
          <SearchbarItem titleSearchbarItemProps='ручные инструменты' classSearchbarItemProps='handtool'
            hrefSearchbarMenuItemProps='#'
            arraySearchbarMenuItemProps={[
              [['#'], ['Меню ручные инструменты'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню ручные инструменты'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню ручные инструменты'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню ручные инструменты'], ['searchbar__menu__item__tool'],
                '', []],
              [['#'], ['Меню ручные инструменты'], ['searchbar__menu__item__tool'],
                '', []]
            ]}
          />
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