import React from 'react'

import BreadcrumbListItem from './BreadcrumbListItem'

const ListingProduct = () => {
    const breadcrumbListItemProps = [
        ['index.html', 'breadcrumb-list__nav', 'Главная'],
        ['index.html', 'breadcrumb-list__nav', 'Инструменты'],
        ['index.html', ' ', 'Аккумуляторный инструмент']
    ]
    const sortBreadcrumbListItemProps = breadcrumbListItemProps.map((item, index) =>
        <BreadcrumbListItem key={index} hrefBreadcrumbListItemProps={item[0]} classBreadcrumbListItemProps={item[1]}
            titleBreadcrumbListItemProps={item[2]} />
    )
    return (
        <main className="listing-product">
            <div className="grid-container">
                <nav className="breadcrumb listing-product-breadcrumb">
                    <ul className="breadcrumb-list">
                        {sortBreadcrumbListItemProps}
                    </ul>
                </nav>
                <h1 className="listing-product-title">АККУМУЛЯТОРНЫЙ ИНСТРУМЕНT</h1>
            </div>
        </main>
    )
}

export default ListingProduct