import React from 'react'

const FooterListingItem = ({ hrefProps, titleProps }) => {
  return (
    <li class="bort-listing-item listing-item">
      <a href={hrefProps}>{titleProps}</a>
    </li>
  )
}

export default FooterListingItem