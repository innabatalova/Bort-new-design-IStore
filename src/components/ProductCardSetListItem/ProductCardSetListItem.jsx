import React from 'react'

const ProductCardSetListItem = ({ nameProductCardSetListIteProps, valueProductCardSetListIteProps }) => {
  return (
    <div className="set-list__item">
      <dt className="set__key">{nameProductCardSetListIteProps}</dt>
      <dd className="set__meaning">{valueProductCardSetListIteProps}</dd>
    </div>
  )
}

export default ProductCardSetListItem