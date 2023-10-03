import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoriesCard = ({ classCategoriesCardProps, srcCategoriesCardProps, titleCategoriesCardProps }) => {
  const navigate = useNavigate()
  const onProductCard = () => { navigate('/product-card') }
  
  return (
    <div className={`card categories-card ` + classCategoriesCardProps} onClick={onProductCard}>
      <img
        src={srcCategoriesCardProps}
        alt={titleCategoriesCardProps}
        className="card__image"
      />
      <h2 className="card__title">{titleCategoriesCardProps}</h2>
    </div>
  )
}

export default CategoriesCard