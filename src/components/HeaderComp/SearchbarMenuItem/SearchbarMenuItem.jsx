import React from 'react'
import { useNavigate } from 'react-router-dom'

import SearchbarSubmenuItem from '../SearchbarSubmenuItem/SearchbarSubmenuItem'

const SearchbarMenuItem = ({ hrefSearchbarMenuItemProps, titleSearchbarMenuItemProps, classSearchbarMenuItemProps, 
  classSearchbarMenuItemPropsList, arraySearchbarSubmenuItemProps }) => {

  const sortSearchbarSubmenuItems = arraySearchbarSubmenuItemProps.map((item, index) =>
    <SearchbarSubmenuItem key={index} hrefSearchbarSubmenuItemProps={item[0]} titleSearchbarSubmenuItemProps={item[1]} />
  )

  const navigate = useNavigate()
  const onListing = () => { navigate('/product-card') }
  const onHref = () => { navigate(hrefSearchbarMenuItemProps) }

  return (
    <li onClick={onListing} className={`bort-menu-item searchbar-menu-item ` + classSearchbarMenuItemProps + (arraySearchbarSubmenuItemProps.length === 0 ? ' bort-menu-item_nobg' : '')}>
      <a onClick={onHref}>{titleSearchbarMenuItemProps}</a>
      <ul className={`searchbar__submenu__wrapper searchbar__submenu__wrapper__` + classSearchbarMenuItemPropsList}>
        <li className="searchbar__submenu__topline"></li>
        {sortSearchbarSubmenuItems}
      </ul>
    </li>
  )
}

export default SearchbarMenuItem