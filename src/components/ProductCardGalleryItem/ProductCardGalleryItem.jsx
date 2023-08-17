import React from 'react'

const ProductCardGalleryItem = ({ classProductCardGalleryItemProps, srcProductCardGalleryItemProps, altProductCardGalleryItemProps }) => {
  return (
    <div className={`carousel-item product-card-gallery-item ` + classProductCardGalleryItemProps}>
      <img
        className="product-card-gallery-image"
        src={srcProductCardGalleryItemProps}
        alt={altProductCardGalleryItemProps}
      />
    </div>
  )
}

export default ProductCardGalleryItem