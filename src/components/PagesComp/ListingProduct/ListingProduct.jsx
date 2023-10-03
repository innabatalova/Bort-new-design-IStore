import React from 'react'

import Breadcrumb from '../../Breadcrumb/Breadcrumb'

const ListingProduct = () => {
    const breadcrumbListItemProps = [
        ['/main', 'breadcrumb-list__nav', 'Главная'],
        ['/listing', 'breadcrumb-list__nav', 'Инструменты'],
        ['/category', ' ', 'Аккумуляторный инструмент']
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