import React from 'react'

const ProductCardNavlineItem = ({ classProductCardNavlineItemProps, hrefProductCardNavlineItemProps, titleProductCardNavlineItemProps }) => {
  return (
    <li className={`navline__item navline__item_product ` + classProductCardNavlineItemProps}>
      <a href={hrefProductCardNavlineItemProps}>{titleProductCardNavlineItemProps}</a>
      <span className="navline__item__arrow"></span>
    </li>
  )
}

export default ProductCardNavlineItem