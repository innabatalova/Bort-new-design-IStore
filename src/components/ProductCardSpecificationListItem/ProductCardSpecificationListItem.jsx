import React from 'react'

const ProductCardSpecificationListItem = ({ nameProductCardSpecificationListItemProps, valueProductCardSpecificationListItemProps }) => {
  return (
    <div className="specification-list__item">
      <dt className="specification__key">{nameProductCardSpecificationListItemProps}</dt>
      <dd className="specification__meaning">{valueProductCardSpecificationListItemProps}</dd>
    </div>
  )
}

export default ProductCardSpecificationListItem