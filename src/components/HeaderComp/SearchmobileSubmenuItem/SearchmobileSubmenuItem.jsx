import React from 'react'

const SearchmobileSubmenuItem = ({ hrefSearchmobileSubmenuItemProps, titleSearchmobileSubmenuItemProps, classSearchmobileSubmenuItemProps }) => {
    return(
      <li className={`searchmobile-submenu-item ` + classSearchmobileSubmenuItemProps}>
        <a href={hrefSearchmobileSubmenuItemProps}>{titleSearchmobileSubmenuItemProps}</a>
      </li>
    )
}

export default SearchmobileSubmenuItem;