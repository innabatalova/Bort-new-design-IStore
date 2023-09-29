import React, { useState, useContext, useEffect } from 'react'
import { ContextProductCardImage } from '../../context/contextProductCardImage'

const ProductCardGalleryItem = ({ classProductCardGalleryItemProps, srcProductCardGalleryItemProps, altProductCardGalleryItemProps }) => {
  const { openImage, setOpenImage } = useContext(ContextProductCardImage)
  const [view, setView] = useState(classProductCardGalleryItemProps)
  const OpenTargetImage = () => {
    setOpenImage(srcProductCardGalleryItemProps)
    const allImg = document.querySelectorAll('.product-card-gallery-item')
    allImg.forEach(item => {
      item.classList.remove('view')
    })
    view == '' || view == ' view' ? setView('view') : setView(' view')
  }

  return (
    <div className={`carousel-item product-card-gallery-item ` + view}>
      <img onClick={OpenTargetImage}
        className="product-card-gallery-image"
        src={srcProductCardGalleryItemProps}
        alt={altProductCardGalleryItemProps}
      />
    </div>
  )
}

export default ProductCardGalleryItem