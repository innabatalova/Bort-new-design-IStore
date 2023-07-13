import React from 'react'

const SearchbarSubmenuItem = ({ hrefSearchbarSubmenuItemProps, titleSearchbarSubmenuItemProps }) => {
  return(
    <li className="bort-menu-item searchbar__submenu__item">
      <a href={hrefSearchbarSubmenuItemProps}>{titleSearchbarSubmenuItemProps}</a>
    </li>
  )
}

export default SearchbarSubmenuItem