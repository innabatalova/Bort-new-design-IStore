import React, { useState } from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import CheckoutInfoItem from '../../components/CheckoutInfoItem/CheckoutInfoItem'
import CheckoutInfoProduct from '../../components/CheckoutInfoProduct/CheckoutInfoProduct'
import FormField from '../../components/PagesComp/FormField/FormField'
import Button from '../../components/DesignComponents/Button'

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

  const [activeTab, setActiveTab] = useState('active-tab-1')

  const [checkedDelivery, setCheckedDelivery] = useState('postRussia')
  const [checkedPayment, setCheckedPayment] = useState('paymentCard')

  return (
    <div className="checkout">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="authorization-title checkout-title">Безопасное оформление заказа</h2>

        <div className="checkout-content">

          <div className="checkout-payment">

            <div className="checkout-payment__comp">
              <div className='checkout-payment__comp__top'>
                <span className={`checkout-payment__comp__top__title ` + (activeTab === 'active-tab-1' ? 'checkout-payment__comp__top__title_active' : '')}>Авторизован как batalovainna97@gmail.com</span>
                <span className={`checkout-payment__comp__top__link ` + (activeTab === 'active-tab-1' ? 'checkout-payment__comp__top__link_active' : '')}
                onClick={() => setActiveTab('active-tab-1')}>Изменить</span>
              </div>
              <div className={`checkout-payment__comp__bottom ` + (activeTab === 'active-tab-1' ? 'checkout-payment__comp__bottom_active' : '')}>
                <FormField titleFormFieldProps='Телефон' typeFormFieldProps='phone'
                  nameFormFieldProps='phone' classFormFieldProps='checkout-payment__comp__field' />
                <span className="checkout-payment__comp__auth">Авторизоваться как другой пользователь</span>
                <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='checkout-payment__comp__button' 
                  titleButtonProps='Продолжить' clickDesignButtonProps={() => setActiveTab('active-tab-2')}/>
              </div>
            </div>

            <div className="checkout-payment__comp">
              <div className={`checkout-payment__comp__top ` + (activeTab === 'active-tab-2' ? 'checkout-payment__comp__top_active' : '')}>
                <span className={`checkout-payment__comp__top__title ` + (activeTab === 'active-tab-2' ? 'checkout-payment__comp__top__title_active' : '')}>Адрес доставки</span>
                <span className={`checkout-payment__comp__top__link ` + (activeTab === 'active-tab-2' ? 'checkout-payment__comp__top__link_active' : '')}
                onClick={() => setActiveTab('active-tab-2')}>Изменить</span>
              </div>
              <div className={`checkout-payment__comp__bottom ` + (activeTab === 'active-tab-2' ? 'checkout-payment__comp__bottom_active' : '')}>
                <div className="profiles-user__wrapprof checkout-payment__comp__wrapprof">
                  <a className="profiles-user__linkprof">Основной</a>
                  <a className="profiles-user__overprof checkout-payment__comp__overprof">Новый тестовый</a>
                  <span>или</span>
                  <a className="profiles-user__linkprof">Добавить новый адрес доставки</a>
                </div>
                <div className="checkout-payment__comp__form">
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='Имя' typeFormFieldProps='name'
                      nameFormFieldProps='name' classFormFieldProps='checkout-payment__comp__field profiles-user__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='Фамилия' typeFormFieldProps='surname'
                      nameFormFieldProps='surname' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='E-mail' typeFormFieldProps='email'
                      nameFormFieldProps='Email' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='Телефон' typeFormFieldProps='phone'
                      nameFormFieldProps='phone' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield checkout-payment__comp__wrapfield_address">
                    <FormField titleFormFieldProps='Адрес доставки' typeFormFieldProps='address'
                      nameFormFieldProps='address' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='Город' typeFormFieldProps='city'
                      nameFormFieldProps='city' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                  <div className="checkout-payment__comp__wrapfield">
                    <FormField titleFormFieldProps='Почтовый индекс' typeFormFieldProps='code'
                      nameFormFieldProps='code' classFormFieldProps='checkout-payment__comp__field' />
                  </div>
                </div>
                <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='checkout-payment__comp__button' 
                  titleButtonProps='Продолжить' clickDesignButtonProps={() => setActiveTab('active-tab-3')}/>
              </div>
            </div>

            <div className="checkout-payment__comp">
              <div className={`checkout-payment__comp__top ` + (activeTab === 'active-tab-3' ? 'checkout-payment__comp__top_active' : '')}>
                <span className={`checkout-payment__comp__top__title ` + (activeTab === 'active-tab-3' ? 'checkout-payment__comp__top__title_active' : '')}>Выбор способа доставки</span>
                <span className={`checkout-payment__comp__top__link ` + (activeTab === 'active-tab-3' ? 'checkout-payment__comp__top__link_active' : '')}
                onClick={() => setActiveTab('active-tab-3')}>Изменить</span>
              </div>
              <div className={`checkout-payment__comp__bottom ` + (activeTab === 'active-tab-3' ? 'checkout-payment__comp__bottom_active' : '')}>
                <div className="checkout-payment__comp__checkbox" onClick={() => setCheckedDelivery('postRussia')}>
                  <input type="checkbox" className="bort-checkbox filter-checkbox" id="postRussia" checked={checkedDelivery == 'postRussia' ? true : false}/>
                  <label for="postRussia" className="bort-checkbox-label filter-checkbox-label">Почта России. Бесплатная доставка</label>
                </div>
                <div className="checkout-payment__comp__checkbox" onClick={() => setCheckedDelivery('DPD')}>
                  <input type="checkbox" className="bort-checkbox filter-checkbox" id="DPD" checked={checkedDelivery == 'DPD' ? true : false} />
                  <label for="DPD" className="bort-checkbox-label filter-checkbox-label">Курьером до двери по России. Бесплатная доставка</label>
                </div>
                <span className="checkout-payment__comp__result">Итого: 0 Р</span>
                <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='checkout-payment__comp__button' 
                  titleButtonProps='Продолжить' clickDesignButtonProps={() => setActiveTab('active-tab-4')}/>
              </div>
            </div>

            <div className="checkout-payment__comp">
              <div className={`checkout-payment__comp__top ` + (activeTab === 'active-tab-4' ? 'checkout-payment__comp__top_active' : '')}>
                <span className={`checkout-payment__comp__top__title ` + (activeTab === 'active-tab-4' ? 'checkout-payment__comp__top__title_active' : '')}>Выбор варианта оплаты</span>
                <span className={`checkout-payment__comp__top__link ` + (activeTab === 'active-tab-4' ? 'checkout-payment__comp__top__link_active' : '')} 
                onClick={() => setActiveTab('active-tab-4')}>Изменить</span>
              </div>
              <div className={`checkout-payment__comp__bottom ` + (activeTab === 'active-tab-4' ? 'checkout-payment__comp__bottom_active' : '')}>
                <div className="checkout-payment__comp__checkbox" onClick={() => setCheckedPayment('paymentCard')}>
                  <input type="checkbox" className="bort-checkbox filter-checkbox" id="paymentCard" checked={checkedPayment == 'paymentCard' ? true : false} />
                  <label for="paymentCard" className="bort-checkbox-label filter-checkbox-label">Оплата картой онлайн</label>
                </div>
                <div className="checkout-payment__comp__checkbox" onClick={() => setCheckedPayment('cashlessPay')}>
                  <input type="checkbox" className="bort-checkbox filter-checkbox" id="cashlessPay" checked={checkedPayment == 'cashlessPay' ? true : false} />
                  <label for="cashlessPay" className="bort-checkbox-label filter-checkbox-label">Безналичный расчет для юридических лиц</label>
                </div>
                <span class="bort-modal-text authorization-form-text checkout-payment__comp__label">Ваш комментарий к заказу</span>
                <textarea className="checkout-payment__comp__textarea"  name="comment" id="comment" cols="30" rows="10"></textarea>
                <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='checkout-payment__comp__button' 
                  titleButtonProps='Выбор варианта оплаты' clickDesignButtonProps={() => setActiveTab('active-tab-1')}/>
              </div>
            </div>

          </div>

          <div className="checkout-info">
            <CheckoutInfoItem titleCheckoutInfoItemProps='Не получается оформить заказ?'
              infoCheckoutInfoItemProps={
                <span className="checkout-info__item__text">
                  <a href="#" className="checkout-info__item__link">Напишите нам</a>, мы обязательно поможем
                </span>
              } activeClassCheckoutInfoItemProps='' />
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
              } activeClassCheckoutInfoItemProps='_active' />
            <CheckoutInfoItem titleCheckoutInfoItemProps='Товаров в вашем заказе'
              infoCheckoutInfoItemProps={sortCheckoutInfoProduct}
              activeClassCheckoutInfoItemProps='' />
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
              } activeClassCheckoutInfoItemProps='' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout