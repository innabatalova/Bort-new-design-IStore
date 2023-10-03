import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchmobileSubmenuItem = ({ hrefSearchmobileSubmenuItemProps, titleSearchmobileSubmenuItemProps, classSearchmobileSubmenuItemProps }) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefSearchmobileSubmenuItemProps) }

  return (
    <li className={`searchmobile-submenu-item ` + classSearchmobileSubmenuItemProps}>
      <a onClick={onHref}>{titleSearchmobileSubmenuItemProps}</a>
    </li>
  )
}

export default SearchmobileSubmenuItem;