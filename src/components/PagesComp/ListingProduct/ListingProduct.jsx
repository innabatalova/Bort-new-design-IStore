import React from 'react'

import Breadcrumb from '../../Breadcrumb/Breadcrumb'

const ListingProduct = () => {
    const breadcrumbListItemProps = [
        ['index.html', 'breadcrumb-list__nav', 'Главная'],
        ['index.html', 'breadcrumb-list__nav', 'Инструменты'],
        ['index.html', ' ', 'Аккумуляторный инструмент']
    ]

    return (
        <main className="listing-product">
            <div className="grid-container">
                <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
                <h1 className="listing-product-title">АККУМУЛЯТОРНЫЙ ИНСТРУМЕНT</h1>
            </div>
        </main>
    )
}

export default ListingProduct