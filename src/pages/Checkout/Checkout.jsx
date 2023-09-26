import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import CheckoutInfoItem from '../../components/CheckoutInfoItem/CheckoutInfoItem'
import CheckoutInfoProduct from '../../components/CheckoutInfoProduct/CheckoutInfoProduct'

const Checkout = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Безопасное оформление заказа']
  ]

  const checkoutInfoProductProps = [
    ['Измельчитель пищевых отходов BORT TITAN 5000', '1 x 3 640 ₽'],
    ['Измельчитель пищевых отходов BORT TITAN 5000', '1 x 3 640 ₽']
  ]

  const sortCheckoutInfoProduct = checkoutInfoProductProps.map(item =>
    <CheckoutInfoProduct titleCheckoutInfoProductProps={item[0]}
      priceCheckoutInfoProductProps={item[1]} />
  )

  return (
    <div className="checkout">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="authorization-title checkout-title">Безопасное оформление заказа</h2>

        <div className="checkout-content">

          <div className="checkout-payment"></div>

          <div className="checkout-info">
            <CheckoutInfoItem titleCheckoutInfoItemProps='Не получается оформить заказ?'
              infoCheckoutInfoItemProps={
                <span className="checkout-info__item__text">
                  <a href="#" className="checkout-info__item__link">Напишите нам</a>, мы обязательно поможем
                </span>
              } activeClassCheckoutInfoItemProps=''/>
            <CheckoutInfoItem titleCheckoutInfoItemProps='Промо-код'
              infoCheckoutInfoItemProps={
                <>
                  <div className="checkout-info__item__text checkout-info__sum">
                    <span className="checkout-info__item__text_grey">2 шт.</span>
                    <span>15 230 ₽</span>
                  </div>
                  <div className="checkout-info__promo">
                    <input type="text" className='checkout-info__input' placeholder='Промокод' />
                  </div>
                  <div className="checkout-info__item__text checkout-info__sum">
                    <span>Сумма заказа:</span>
                    <span>15 230 ₽</span>
                  </div>
                </>
              } activeClassCheckoutInfoItemProps='_active'/>
            <CheckoutInfoItem titleCheckoutInfoItemProps='Товаров в вашем заказе'
              infoCheckoutInfoItemProps={sortCheckoutInfoProduct} 
              activeClassCheckoutInfoItemProps=''/>
            <CheckoutInfoItem titleCheckoutInfoItemProps='Информация о заказе'
              infoCheckoutInfoItemProps={
                <>
                  <ul className="checkout-info__item__text checkout-info__item__text_address">
                    <li className="checkout-info__item__text_list">Адрес доставки:</li>
                    <li>Тестовый Заказ</li>
                    <li>batalovainna97@gmail.com</li>
                    <li>г. Москва, ул. Авиационная, д. 79В</li>
                    <li>Москва</li>
                    <li>123182</li>
                  </ul>
                  <ul className="checkout-info__item__text">
                    <li className="checkout-info__item__text_list">Способ доставки:</li>
                    <li>Почта России</li>
                  </ul>
                </>
              } activeClassCheckoutInfoItemProps=''/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout