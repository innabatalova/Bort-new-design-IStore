import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCardNavlineItem = ({ classProductCardNavlineItemProps, hrefProductCardNavlineItemProps, titleProductCardNavlineItemProps }) => {
  const navigate = useNavigate()
  const onHref = () => { navigate(hrefProductCardNavlineItemProps) }
  
  return (
    <li className={`navline__item navline__item_product ` + classProductCardNavlineItemProps}>
      <a onClick={onHref}>{titleProductCardNavlineItemProps}</a>
      <span className="navline__item__arrow"></span>
    </li>
  )
}

export default ProductCardNavlineItem