import React from 'react'

const NavbarItem = ({hrefProps, itemProps, classProps}) => {
    return(
      <li className={`navbar__item ` + classProps}  >
        <a href={hrefProps} target="_blank">{itemProps}</a>
      </li>
    )
}

export default NavbarItem;