import React from 'react'

import SearchbarMenuItem from '../SearchbarMenuItem/SearchbarMenuItem'

const SearchbarItem = ({ titleSearchbarItemProps, classSearchbarItemProps, hrefSearchbarMenuItemProps,
  titleSearchbarMenuItemProps, classSearchbarMenuItemProps, classSearchbarMenuItemPropsList, arraySearchbarSubmenuItemProps1 }) => {

  console.log(arraySearchbarSubmenuItemProps1);

  return (
    <li className={`searchbar__item searchbar__item__` + classSearchbarItemProps}>
      {titleSearchbarItemProps}

      <ul className={`searchbar-menu-wrapper ` + `searchbar__menu__wrapper__` + classSearchbarItemProps}>
        <li className="searchbar__menu__topline"></li>

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps={hrefSearchbarMenuItemProps}
          titleSearchbarMenuItemProps={titleSearchbarMenuItemProps}
          classSearchbarMenuItemProps={classSearchbarMenuItemProps}
          classSearchbarMenuItemPropsList={classSearchbarMenuItemPropsList}
          arraySearchbarSubmenuItemProps1={arraySearchbarSubmenuItemProps1}
          arraySearchbarSubmenuItemProps={arraySearchbarSubmenuItemProps1} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='category.html'
          titleSearchbarMenuItemProps='Дрели и миксеры'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-drills'
          classSearchbarMenuItemPropsList='drills'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Перфораторы'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-hammers'
          classSearchbarMenuItemPropsList='hammers'
          arraySearchbarSubmenuItemProps={[]} />


        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Пилы'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-saws'
          classSearchbarMenuItemPropsList='saws'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Рубанки электрические'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-planers'
          classSearchbarMenuItemPropsList='planers'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Фрезеры электрические'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-milling'
          classSearchbarMenuItemPropsList='milling'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Шлифмашины'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-grinders'
          classSearchbarMenuItemPropsList='grinders'
          arraySearchbarSubmenuItemProps={[[['#'], ['Орбитальные шлифмашины']],
            [['#'], ['Ленточные шлифмашины']],
            [['#'], ['Граверы']],
            [['#'], ['Болгарки (УШМ)']],
            [['#'], ['Многофункциональные']],
            [['#'], ['Машины шлифовальные вибрационные']]
          ]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Фены технические'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-dryers'
          classSearchbarMenuItemPropsList='dryers'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Краскопульты'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-spray'
          classSearchbarMenuItemPropsList='spray'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Измерительные инструменты'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-measuring'
          classSearchbarMenuItemPropsList='measuring'
          arraySearchbarSubmenuItemProps={[]} />

        <SearchbarMenuItem
          hrefSearchbarMenuItemProps='#'
          titleSearchbarMenuItemProps='Сварочное оборудование'
          classSearchbarMenuItemProps='searchbar__menu__item__tool searchbar-menu-item-welding'
          classSearchbarMenuItemPropsList='welding'
          arraySearchbarSubmenuItemProps={[]} />
      </ul>

    </li>
  )
}

export default SearchbarItem