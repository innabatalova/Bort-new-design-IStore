import React from 'react'

const SearchmobileSubmenuItem = ({hrefPropsSubMenu, itemPropsSubMenu, classPropsSubMenu}) => {
    return(
      <li className={`searchmobile-submenu-item ` + classPropsSubMenu}>
      <a href={hrefPropsSubMenu}>{itemPropsSubMenu}</a>
    </li>
    )
}

export default SearchmobileSubmenuItem;