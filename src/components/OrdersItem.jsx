import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrdersItem = ({ idOrdersItemProps, statusOrdersItemProps, nameOrdersItemProps, emailOrdersItemProps,
  dateOrdersItemProps, priceOrdersItemProps }) => {
  const navigate = useNavigate()
  const onOrders = () => { navigate('/orders') }

  return (
    <div className="orders__item__wrapper">
      <div className="orders__item__mobile">
        <div className="orders-list__title__item">ID</div>
        <div className="orders-list__title__item">Статус</div>
        <div className="orders-list__title__item">Покупатель</div>
        <div className="orders-list__title__item">Дата</div>
        <div className="orders-list__title__item">Итого</div>
      </div>
      <div className="orders__item">
        <div className="orders__data">
          <span>{idOrdersItemProps}</span>
          <a onClick={onOrders} className="orders__data_link">Просмотреть заказ</a>
        </div>
        <div className="orders__data">{statusOrdersItemProps}</div>
        <div className="orders__data">
          <span>{nameOrdersItemProps}</span>
          <span className="orders__data_link">{emailOrdersItemProps}</span>
        </div>
        <div className="orders__data">{dateOrdersItemProps}</div>
        <div className="orders__data">{priceOrdersItemProps}</div>
      </div>
    </div>
  )
}

export default OrdersItem