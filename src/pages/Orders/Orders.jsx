import React, { useState } from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import OrdersItem from '../../components/OrdersItem'
import Input from '../../components/DesignComponents/Input'

import MenuArrow from '../../static/image/menu-arrow.svg'

const Orders = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Заказы']
  ]

  const ordersListResultProps = [
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽'],
    ['9746473643', 'Аннулирован', 'Иван Иванов', 'email@email.com', '30.05.2023, 09:23', '20 200 ₽']
  ]
  const sortOrdersListResultProps = ordersListResultProps.map(item =>
    <OrdersItem idOrdersItemProps={item[0]} statusOrdersItemProps={item[1]} nameOrdersItemProps={item[2]}
      emailOrdersItemProps={item[3]} dateOrdersItemProps={item[4]} priceOrdersItemProps={item[5]} />
  )

  const [ordersSearchStock, setOrdersSearchStock] = useState('')
  const openOrdersSearchStock = () => {
    ordersSearchStock === '' ? setOrdersSearchStock('open') : setOrdersSearchStock('')
  }

  return (
    <main className="orders">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="authorization-title">Заказы</h2>

        <div className="orders-search">
          <div className="orders-search__title" onClick={openOrdersSearchStock}>
            <span className="orders-search__name">Варианты поиска</span>
            <img className={`orders-search__arrow orders-search__arrow_` + ordersSearchStock} src={MenuArrow} />
          </div>
          <div className={`orders-search__content orders-search__content_` + ordersSearchStock}>
            <div className="orders-search__content__wrapper">
              <Input classInputSpanProps='bort-modal-text' titleInputProps='Номер заказа'
                typeInputProps='text' nameInputProps='orderId' classInputFieldProps='bort-modal-contacts orders-search__content__orderID' minlengthInputProps='2' />
            </div>
            <div className="orders-search__content__wrapper">
                <span class="bort-modal-text">Итого (Р)</span>
                <div className="orders-search__content__price">
                  <input className="orders-search__content__field"></input>
                  <div className="orders-search__content__dash"></div>
                  <input className="orders-search__content__field"></input>
                </div>
            </div>
            <div className="orders-search__content__wrapper">
                <span class="bort-modal-text">Период</span>
                <select className="orders-search__content__select">
                  <option value="1">Все</option>
                  <option value="2">Сегодня</option>
                  <option value="3">Текущая неделя</option>
                  <option value="4">Текущий месц</option>
                  <option value="5">Текущий год</option>
                </select>
                <div className="orders-search__content__date">
                  <input className="orders-search__content__field" type="date" />
                  <div className="orders-search__content__dash"></div>
                  <input className="orders-search__content__field" type="date" />
                </div>
            </div>
            <div className="orders-search__content__wrapper">
              <span class="bort-modal-text">Статус заказа</span>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="1" />
              <label for="1" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Принят и оплачен</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="2" />
              <label for="2" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Возвращено</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="3" />
              <label for="3" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Закрыт</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="4" />
              <label for="4" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Доставляется</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="5" />
              <label for="5" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Новый</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="6" />
              <label for="6" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Отменен</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="7" />
              <label for="7" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Аннулирован</label>
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="8" />
              <label for="8" className="bort-checkbox-label filter-checkbox-label orders-search__content__label">Счет отправлен</label>
            </div>
          </div>
        </div>

        <div className="orders-list">
          <div className="orders-list__title">
            <div className="orders-list__title__item">ID</div>
            <div className="orders-list__title__item">Статус</div>
            <div className="orders-list__title__item">Покупатель</div>
            <div className="orders-list__title__item">Дата</div>
            <div className="orders-list__title__item">Итого</div>
          </div>
          <div className="orders-list__result">
            {sortOrdersListResultProps}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Orders