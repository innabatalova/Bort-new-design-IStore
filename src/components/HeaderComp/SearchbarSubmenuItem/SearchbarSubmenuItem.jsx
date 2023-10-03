import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchbarSubmenuItem = ({ hrefSearchbarSubmenuItemProps, titleSearchbarSubmenuItemProps }) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefSearchbarSubmenuItemProps) }
  
  return(
    <li className="bort-menu-item searchbar__submenu__item">
      <a onClick={onHref}>{titleSearchbarSubmenuItemProps}</a>
    </li>
  )
}

export default SearchbarSubmenuItem