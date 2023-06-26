import React from 'react'

import SearchmobileSubmenuItem from '../SearchmobileSubmenuItem/SearchmobileSubmenuItem'

const SearchmobileMenuItem = ({hrefPropsMenu, itemPropsMenu}) => {
    return(
        <li class="searchmobile-menu-item">

        <div class="searchmobile-item-wrapper searchmobile-saws">
          <span class="searchmobile-menu-title">
            <a href={hrefPropsMenu}>{itemPropsMenu}</a>
          </span>
          <span class="subplus searchmobile-menu-plus">+</span>
        </div>

        <ul class="searchmobile-submenu submenu-saws">
         <SearchmobileSubmenuItem hrefPropsSubMenu='product-card.html' itemPropsSubMenu='Лобзики электрические' />
         <SearchmobileSubmenuItem hrefPropsSubMenu='product-card.html' itemPropsSubMenu='Пилы циркулярные' />
         <SearchmobileSubmenuItem hrefPropsSubMenu='product-card.html' itemPropsSubMenu='Сабельные пилы' classPropsSubMenu='searchmobile-submenu-item-last'/>
        </ul>
      </li>
    )
}

export default SearchmobileMenuItem;