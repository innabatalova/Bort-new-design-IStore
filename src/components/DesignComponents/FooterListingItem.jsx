import React from 'react'
import { useNavigate } from 'react-router-dom'

const FooterListingItem = ({ classFooterListingItemProps, hrefFooterListingItemProps, titleFooterListingItemProps }) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefFooterListingItemProps) }

  return (
    <li className={`bort-listing-item ` + classFooterListingItemProps}>
      <a onClick={onHref}>{titleFooterListingItemProps}</a>
    </li>
  )
}

export default FooterListingItem