import React from 'react'

import SearchmobileMenuItem from '../SearchmobileMenuItem/SearchmobileMenuItem'

const SearchMobileItem = ({ hrefSearchMobileItemProps, titleSearchMobileItemProps, classSearchMobileItemProps,
  arraySearchMobileItemProps }) => {

  const sortSearchmobileMenuItem = arraySearchMobileItemProps.map((item) =>
    <SearchmobileMenuItem hrefSearchmobileMenuItemProps={item[0]} titleSearchmobileMenuItemProps={item[1]} classSearchmobileMenuItemProps={item[2]}
      arraySearchmobileMenuItemProps={item[3]}
      />
  );

  return (
    <li className="searchmobile-item">
      <div className={`searchmobile-item-wrapper searchmobile-` + classSearchMobileItemProps}>
        <span className="searchmobile-title"><a href={hrefSearchMobileItemProps}>{titleSearchMobileItemProps}</a></span>
        <span className="plus searchmobile-plus">+</span>
      </div>
      <ul className={`searchmobile-menu menu-` + classSearchMobileItemProps}>
        {sortSearchmobileMenuItem}
      </ul>

    </li>
  )
}

export default SearchMobileItem