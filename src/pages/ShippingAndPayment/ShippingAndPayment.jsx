import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Input from '../../components/DesignComponents/Input'
import Button from '../../components/DesignComponents/Button'

const ShippingAndPayment = () => {
  const breadcrumbListItemProps = [
    ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Доставка и оплата']
  ]

  return (
    <div className="shipping">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <div className="politics-wrapper">
          <div className="politics-info-wrapper shipping-info-wrapper">
            <h2 className="politics-title shipping-title">Доставка</h2>
            <p className="shipping__text shipping__delivery">
              <span>При сумме заказа <span className="shipping__delivery_black">более 3000 руб.</span>  доставка Почтой России и курьерской службой до двери осуществляется <span className="shipping__delivery_black">бесплатно</span>.</span>
              <span>При сумме заказа <span className="shipping__delivery_black">менее 3000 руб.</span>  стоимость доставки Почтой России и курьерской службой до двери составляет <span className="shipping__delivery_black">350 руб.</span></span>
              <span>Доставка осуществляется только по России.</span>
            </p>
            <h2 className="politics-title shipping-title">Оплата</h2>
            <p className="shipping__text shipping__payment">
              <span>- Наличными или банковской картой курьеру при получении заказа. (только для Москвы) </span>
              <span>- Любыми банковскими картами через сервис безопасных онлайн платежей PAYMASTER.</span>
              <span>После нажатия кнопки Оплата, вы будете переведены на страницу выбора способа оплаты. Для вас доступны следующие способы оплаты:</span>
              <ul className="shipping__list">
                <li>Банковская карта</li>
                <li>Webmoney</li>
                <li>Альфа-банк</li>
                <li>ВТБ 24</li>
                <li>Банк Русский Стандарт</li>
                <li>Промсвязь банк</li>
                <li>Сбербанк Онлайн</li>
              </ul>
              <span>Выберите удобный для вас вариант и совершите платеж. Все данные, введенные Вами на платежной форме процессингового центра PayMaster, полностью защищены в соответствии с требованиями стандарта безопасности PCI DSS. Мы получаем информацию только о совершенном Вами платеже.</span>
              <span>На указанный Вами при оформлении платежа адрес электронной почты, будет отправлен электронный чек в соответствии с ФЗ-54 о применении контрольно-кассовой техники.</span>
            </p>
          </div>
          <div className="politics-form-wrapper">
            <div className="bort-modal politics-form-modal">
              <h3 className="bort-modal-title">обратная связь</h3>
              <form action="#" className="bort-modal-form">
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО'
                  typeInputProps='text' nameInputProps='name'
                  classInputFieldProps='bort-modal-contacts politics-form-modal-contacts'
                  minlengthInputProps='2'
                />
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
                  typeInputProps='tel' nameInputProps='phone'
                  classInputFieldProps='bort-phone bort-modal-contacts invalid politics-form-modal-contacts'
                  minlengthInputProps='18'
                />
                <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
                  typeInputProps='email' nameInputProps='Email'
                  classInputFieldProps='bort-modal-contacts invalid politics-form-modal-contacts'
                  minlengthInputProps='2'
                />
                <span className="bort-modal-text">Ваше сообщение</span>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="bort-modal-message politics-form-modal-contacts"
                ></textarea>
                <Button classDesignButtonProps='orange' classSizeButtonProps='50'
                  classButtonProps='bort-modal-button' titleButtonProps='Отправить' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAndPayment