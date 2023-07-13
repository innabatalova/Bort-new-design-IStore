import React from 'react'

import SearchmobileSubmenuItem from '../SearchmobileSubmenuItem/SearchmobileSubmenuItem'

const SearchmobileMenuItem = ({ hrefSearchmobileMenuItemProps, titleSearchmobileMenuItemProps, classSearchmobileMenuItemProps, arraySearchmobileMenuItemProps }) => {

  const sortSearchmobileSubmenuItems = arraySearchmobileMenuItemProps.map((item) => 
    <SearchmobileSubmenuItem hrefSearchmobileSubmenuItemProps={item[0]} titleSearchmobileSubmenuItemProps={item[1]}
      classSearchmobileSubmenuItemProps={item[2]}/>
  );

  return (
    <li className="searchmobile-menu-item">

      <div className={`searchmobile-item-wrapper searchmobile-` + classSearchmobileMenuItemProps}>
        <span className="searchmobile-menu-title">
          <a href={hrefSearchmobileMenuItemProps}>{titleSearchmobileMenuItemProps}</a>
        </span>
        <span className="subplus searchmobile-menu-plus">+</span>
      </div>

      <ul className={`searchmobile-submenu submenu-` + classSearchmobileMenuItemProps}>
        {sortSearchmobileSubmenuItems}
      </ul>
    </li>
  )
}

export default SearchmobileMenuItem;