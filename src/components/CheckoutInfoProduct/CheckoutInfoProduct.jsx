import React from 'react'

const CheckoutInfoProduct = ({ titleCheckoutInfoProductProps, priceCheckoutInfoProductProps  } ) => {
  return (
    <div className="checkout-info__product">
      <span className="checkout-info__product__title">{titleCheckoutInfoProductProps}</span>
      <span className="checkout-info__product__price">{priceCheckoutInfoProductProps}</span>
    </div>
  )
}

export default CheckoutInfoProduct