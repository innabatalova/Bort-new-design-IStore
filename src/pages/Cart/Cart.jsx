import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Button from '../../components/DesignComponents/Button'
import CartTableComp from '../../components/CartTableComp/CartTableComp'

import ProductImg1 from '../../static/listing_image/listing-card-one.jpg'
import ProductImg2 from '../../static/listing_image/listing-card-two.jpg'

const Cart = () => {
  const breadcrumbListItemProps = [
    ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Содержимое корзины']
  ]

  const CartTableCompProps = [
    [ProductImg1, 'Машина шлифовальная ленточная BORT BBS-801N', '93410969', '20200', '1'],
    [ProductImg2, 'Машина шлифовальная угловая аккумуляторная BORT BWS-21Li', '93413571', '7990', '2']
  ]

  const sortCartTableComp = CartTableCompProps.map(item =>
    <CartTableComp imgCartTableCompProps={item[0]} nameCartTableCompProps={item[1]} codeCartTableCompProps={item[2]}
      priceCartTableCompProps={item[3]} stockCartTableCompProps={item[4]}
    />
  )

  return (
    <div className="cart">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="authorization-title">Содержимое корзины</h2>
        <div className="cart-buttons cart-buttons_top">
          <div className="cart-buttons__wrapper">
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button' titleButtonProps='Закрыть' />
            <Button classDesignButtonProps='black' classSizeButtonProps='45' classButtonProps='cart-button' titleButtonProps='Очистить корзину' />
          </div>
          <div className="cart-buttons__wrapper cart-buttons__wrapper_bottom">
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button cart-button__blue' titleButtonProps='Пересчитать' />
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button' titleButtonProps='Оформить' />
          </div>
        </div>
        <div className="cart-table__title">
          <div className="cart-table__title__item">Товар</div>
          <div className="cart-table__title__item">Цена за ед.</div>
          <div className="cart-table__title__item">Кол-во</div>
          <div className="cart-table__title__item">Итого</div>
        </div>
        <div>
          {sortCartTableComp}
        </div>
        <div className="cart-sum">
          <div className="cart-sum__result">
            <div className="cart-sum__result__promo">
              <input type="text" className='cart-sum__result__input' placeholder='Промокод' />
            </div>
            <div className="cart-sum__result__item">Сумма</div>
            <div className="cart-sum__result__item">40 400 ₽</div>
          </div>
          <div className="cart-sum__allsum">
            <div className="cart-sum__allsum__item cart-sum__allsum__item_one"></div>
            <div className="cart-sum__allsum__item cart-sum__allsum__item_two">Предварительная стоимость корзины</div>
            <div className="cart-sum__allsum__item cart-sum__allsum__item_three">40 400 ₽</div>
          </div>
        </div>
        <div className="cart-buttons cart-buttons_bottom">
          <div className="cart-buttons__wrapper">
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button' titleButtonProps='Закрыть' />
          </div>
          <div className="cart-buttons__wrapper cart-buttons__wrapper_bottom">
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button cart-button__blue' titleButtonProps='Пересчитать' />
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='cart-button' titleButtonProps='Оформить' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart