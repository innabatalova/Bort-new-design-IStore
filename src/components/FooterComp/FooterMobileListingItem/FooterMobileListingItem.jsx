import React from 'react'
import { useNavigate } from 'react-router-dom'

const FooterMobileListingItem = ({ hrefProps, titleProps }) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefProps) }

  return (
    <li className="bort-listing-item footer-mobile-listing-item">
      <a onClick={onHref}>{titleProps}</a>
    </li>
  )
}

export default FooterMobileListingItem