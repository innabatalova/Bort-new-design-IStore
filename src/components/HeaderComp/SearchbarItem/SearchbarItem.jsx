import React from 'react'

import SearchbarMenuItem from '../SearchbarMenuItem/SearchbarMenuItem'

const SearchbarItem = ({ titleSearchbarItemProps, classSearchbarItemProps, arraySearchbarMenuItemProps }) => {

  const sortSearchbarMenuItemProps = arraySearchbarMenuItemProps.map((item, index) =>
    <SearchbarMenuItem key={index} hrefSearchbarMenuItemProps={item[0]} titleSearchbarMenuItemProps={item[1]}
      classSearchbarMenuItemProps={item[2]}
      classSearchbarMenuItemPropsList={item[3]}
      arraySearchbarSubmenuItemProps={item[4]} />
  )

  return (
    <li className={`searchbar__item searchbar__item__` + classSearchbarItemProps}>
      {titleSearchbarItemProps}
      <ul className={`searchbar-menu-wrapper ` + `searchbar__menu__wrapper__` + classSearchbarItemProps}>
        <li className="searchbar__menu__topline"></li>
        {sortSearchbarMenuItemProps}
      </ul>
    </li>

  )
}

export default SearchbarItem