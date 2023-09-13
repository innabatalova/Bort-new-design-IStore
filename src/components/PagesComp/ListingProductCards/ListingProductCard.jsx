import React from 'react'

import Button from '../../DesignComponents/Button'

import ComparisonLike from '../../../static/image/comparison-like.svg'
import ComparisonList from '../../../static/image/comparison-list.svg'
import Star from '../../../static/image/Star.svg'

const ListingProductCardItem = ({ imgListingProductCardItemProps, altListingProductCardItemProps, titleListingProductCardItemProps }) => {
    return (
        <div className="card listing-product-card">
            <img src={ComparisonLike} className="listing-product-card-icons" />
            <img src={ComparisonList} className="listing-product-card-icons listing-product-card-list" />
            <img src={imgListingProductCardItemProps} alt={altListingProductCardItemProps}
                className="listing-product-card-image" />
            <div className="listing-product-stars">
                <img src={Star}/>
                <img src={Star}/>
                <img src={Star}/>
                <img src={Star}/>
                <img src={Star}/>
                (2)
            </div>
            <h2 className="listing-product-card-title">
                {titleListingProductCardItemProps}
            </h2>
            <span className="listing-product-price">2 690 ₽</span>
            <Button classDesignButtonProps='orange' classSizeButtonProps='45'
                classButtonProps='listing-product-button' titleButtonProps='Купить'
            />
        </div>

    )
}

export default ListingProductCardItem