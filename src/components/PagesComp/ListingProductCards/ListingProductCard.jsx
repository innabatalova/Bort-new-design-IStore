import React from 'react'

const ListingProductCardItem = ({ imgListingProductCardItemProps, altListingProductCardItemProps, titleListingProductCardItemProps }) => {
    return (
        <div className="card listing-product-card">
            <img src={imgListingProductCardItemProps} alt={altListingProductCardItemProps}
                className="listing-product-card-image" />
            <h2 className="listing-product-card-title">
                {titleListingProductCardItemProps}
            </h2>
            <button className="listing-product-card-button">Где купить?</button>
        </div>

    )
}

export default ListingProductCardItem