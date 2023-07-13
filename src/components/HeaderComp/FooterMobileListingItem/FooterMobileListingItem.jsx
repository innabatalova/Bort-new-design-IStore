import React from 'react'

const FooterMobileListingItem = ({ hrefProps, titleProps }) => {
  return(
    <li className="bort-listing-item footer-mobile-listing-item">
      <a href={hrefProps}>{titleProps}</a>
    </li>
  )
}

export default FooterMobileListingItem