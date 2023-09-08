import React from 'react'

const NavbarItem = ({ hrefProps, itemProps, classProps, targetProps}) => {
    return(
      <li className={`navbar__item ` + classProps}  >
        <a href={hrefProps} target={targetProps}>{itemProps}</a>
      </li>
    )
}

export default NavbarItem;