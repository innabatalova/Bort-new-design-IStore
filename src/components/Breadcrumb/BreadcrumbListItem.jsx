import React from 'react'
import { useNavigate } from 'react-router-dom'

const BreadcrumbListItem = ({hrefBreadcrumbListItemProps, classBreadcrumbListItemProps, titleBreadcrumbListItemProps}) => {
    const navigate = useNavigate()
    const onBreadcrumb = () => { navigate(hrefBreadcrumbListItemProps) }

    return (
        <li className={`breadcrumb-list__item ` + classBreadcrumbListItemProps}>
            <a onClick={onBreadcrumb} className="breadcrumb-list__link">{titleBreadcrumbListItemProps}</a>
        </li>
    )
}

export default BreadcrumbListItem