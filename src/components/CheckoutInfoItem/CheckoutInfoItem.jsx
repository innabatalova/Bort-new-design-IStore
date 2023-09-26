import React, { useState } from 'react'

const CheckoutInfoItem = ({ titleCheckoutInfoItemProps, infoCheckoutInfoItemProps, activeClassCheckoutInfoItemProps } ) => {
  const [activeTabMobile, setActiveTabMobile] = useState(activeClassCheckoutInfoItemProps)
  const toogleTabMobile = () => {
    activeTabMobile === '' ? setActiveTabMobile('_active') : setActiveTabMobile('')
  }

  return(
    <div className="checkout-info__item" onClick={toogleTabMobile}>
      <span className={`checkout-info__item__title checkout-info__item__title` + activeTabMobile }>{titleCheckoutInfoItemProps}</span>
      <div className={`checkout-info__item__info checkout-info__item__info` + activeTabMobile}>
        {infoCheckoutInfoItemProps}
      </div>
    </div>
  )
}

export default CheckoutInfoItem