import React from 'react'
import { useNavigate } from 'react-router-dom'

import BasketMenuItem from './BasketMenuItem'
import Button from '../../DesignComponents/Button'

import BusketImg1 from '../../../static/image/busket-img-1.jpg'
import BusketImg2 from '../../../static/image/busket-img-2.jpg'
import BusketImg3 from '../../../static/image/busket-img-3.jpg'
import BusketImg4 from '../../../static/image/busket-img-4.jpg'

const PopupBasket = ({ classBusketProfileProps }) => {
  const popupBusketProps = [
    [BusketImg1, 'Измельчитель пищевых отходов BORT TITAN 5000', '1 x 3 640 ₽'],
    [BusketImg2, 'Измельчитель пищевых отходов BORT MASTER ECO', '1 x 3 640 ₽'],
    [BusketImg3, 'Измельчитель пищевых отходов BORT TITAN 4000 Plus', '1 x 3 640 ₽'],
    [BusketImg4, 'Измельчитель пищевых отходов BORT TITAN MAX Power', '1 x 3 640 ₽']]

  const sortPopupBusketProps = popupBusketProps.map((item, index) =>
    <BasketMenuItem key={index} srcBasketMenuItemProps={item[0]} titleBasketMenuItemProps={item[1]} priceBasketMenuItemProps={item[2]} />
  )
  
  const navigate = useNavigate()
  const OnCart = () => { navigate('/cart') }

  return (
    <div className={`busket__popup ` + classBusketProfileProps}>
      {sortPopupBusketProps}
      <div className="busket__popup__buttons">
        <Button clickDesignButtonProps={OnCart} classDesignButtonProps='black' classSizeButtonProps='45' classButtonProps='busket__popup__button' titleButtonProps='Корзина' />
        <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='busket__popup__button' titleButtonProps='Оформить заказ' />
      </div>
    </div>
  )
}

export default PopupBasket