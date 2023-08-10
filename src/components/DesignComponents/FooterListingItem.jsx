import React from 'react'

const FooterListingItem = ({ classFooterListingItemProps, hrefFooterListingItemProps, titleFooterListingItemProps }) => {
  return (
    <li className={`bort-listing-item ` + classFooterListingItemProps}>
      <a href={hrefFooterListingItemProps}>{titleFooterListingItemProps}</a>
    </li>
  )
}

export default FooterListingItem