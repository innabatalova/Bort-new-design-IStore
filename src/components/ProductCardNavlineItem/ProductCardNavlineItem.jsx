import React from 'react'

const ProductCardNavlineItem = ({ classProductCardNavlineItemProps, hrefProductCardNavlineItemProps, titleProductCardNavlineItemProps }) => {
  return (
    <li className={`navline__item ` + classProductCardNavlineItemProps}>
      <a href={hrefProductCardNavlineItemProps}>{titleProductCardNavlineItemProps}</a>
      <span className="navline__item__arrow"></span>
    </li>
  )
}

export default ProductCardNavlineItem