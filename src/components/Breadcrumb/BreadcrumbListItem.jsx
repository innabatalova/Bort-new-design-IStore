import React from 'react'

const BreadcrumbListItem = ({hrefBreadcrumbListItemProps, classBreadcrumbListItemProps, titleBreadcrumbListItemProps}) => {
    return (
        <li className={`breadcrumb-list__item ` + classBreadcrumbListItemProps}>
            <a href={hrefBreadcrumbListItemProps} className="breadcrumb-list__link">{titleBreadcrumbListItemProps}</a>
        </li>
    )
}

export default BreadcrumbListItem