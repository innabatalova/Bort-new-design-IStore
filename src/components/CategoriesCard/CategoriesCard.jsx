import React from 'react'

const CategoriesCard = ({ classCategoriesCardProps, srcCategoriesCardProps, titleCategoriesCardProps }) => {
  return (
    <div className={`card categories-card ` + classCategoriesCardProps} onClick={()=>location.href = '/product-card'}>
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