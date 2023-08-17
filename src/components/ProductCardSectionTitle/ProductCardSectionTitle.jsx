import React from 'react'

const ProductCardSectionTitle = ({ classProductCardSectionTitleProps, titleProductCardSectionTitleProps }) => {
  return(
    <>
      <h2 className={classProductCardSectionTitleProps + `-title`}>{titleProductCardSectionTitleProps}</h2>
      <span className={classProductCardSectionTitleProps + `-line`}></span>
    </>
  )
}

export default ProductCardSectionTitle