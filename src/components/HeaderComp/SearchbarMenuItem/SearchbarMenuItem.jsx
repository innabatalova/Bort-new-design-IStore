import React from 'react'

import SearchbarSubmenuItem from '../SearchbarSubmenuItem/SearchbarSubmenuItem'

const SearchbarMenuItem = ({ hrefSearchbarMenuItemProps, titleSearchbarMenuItemProps, classSearchbarMenuItemProps, 
  classSearchbarMenuItemPropsList, arraySearchbarSubmenuItemProps }) => {

  const sortSearchbarSubmenuItems = arraySearchbarSubmenuItemProps.map((item, index) =>
    <SearchbarSubmenuItem key={index} hrefSearchbarSubmenuItemProps={item[0]} titleSearchbarSubmenuItemProps={item[1]} />
  );

  return (
    <li onClick={() => { location.href = '/listing' }} className={`bort-menu-item searchbar-menu-item ` + classSearchbarMenuItemProps + (arraySearchbarSubmenuItemProps.length === 0 ? ' bort-menu-item_nobg' : '')}>
      <a href={hrefSearchbarMenuItemProps}>{titleSearchbarMenuItemProps}</a>
      <ul className={`searchbar__submenu__wrapper searchbar__submenu__wrapper__` + classSearchbarMenuItemPropsList}>
        <li className="searchbar__submenu__topline"></li>
        {sortSearchbarSubmenuItems}
      </ul>
    </li>
  )
}

export default SearchbarMenuItem