import React from 'react'

import BusketItemRemoveIcon from '../../../static/image/busket-remove.svg'

const BasketMenuItem = ({ srcBasketMenuItemProps, titleBasketMenuItemProps, priceBasketMenuItemProps }) => {
  return (
    <div className='busket__popup__item'>
      <img src={srcBasketMenuItemProps} />
      <div className="busket__popup__item__wrapper">
        <span className='busket__popup__item__title'>{titleBasketMenuItemProps}</span>
        <span className='busket__popup__item__price'>{priceBasketMenuItemProps}</span>
      </div>
      <div className="busket__popup__item_remove">
        <img src={BusketItemRemoveIcon} alt="" />
      </div>
    </div>
  )
}

export default BasketMenuItem