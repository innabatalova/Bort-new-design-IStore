import React from 'react'

import BreadcrumbListItem from './BreadcrumbListItem'

const Breadcrumb = ({ breadcrumbListItemProps }) => {

  const sortBreadcrumbListItemProps = breadcrumbListItemProps.map((item, index) =>
    <BreadcrumbListItem key={index} hrefBreadcrumbListItemProps={item[0]} classBreadcrumbListItemProps={item[1]}
      titleBreadcrumbListItemProps={item[2]} />
  )
  
  return(
    <nav className="breadcrumb">
      <ul className="breadcrumb-list onelevel-breadcrumb-list">
        {sortBreadcrumbListItemProps}
      </ul>
    </nav>
  )
}

export default Breadcrumb