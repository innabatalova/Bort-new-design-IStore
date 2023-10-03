import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarItem = ({ hrefProps, itemProps, classProps, targetProps}) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefProps) }

    return(
      <li className={`navbar__item ` + classProps}  >
        <a onClick={onHref} target={targetProps}>{itemProps}</a>
      </li>
    )
}

export default NavbarItem;