import React from 'react'

import Button from '../../DesignComponents/Button'

const DropshippingInfoDrop = () => {
  return (
    <>
        <p class="dropshipping-info-text">
          Дропшиппинг - это возможность e-commerce предпринимателю
          сосредоточить время и силы на продажах. Вы можете заниматься
          развитием отношений с покупателями в вашем интернет-магазине,
          повышать уровень доверия, уделить время настройке рекламы и
          продвижения.
        </p>
        <p class="dropshipping-info-text dropshipping-info-black">
          Мы возьмем на себя все рутинные задачи связанные с логистикой,
          приемом платежей и хранением остатков:
        </p>
        <ul class="dropshipping-info-list">
          <li class="dropshipping-info-text">
            Упакуем заказ в соответствии со стандартами транспортных
            компаний и служб доставки;
          </li>
          <li class="dropshipping-info-text">
            Подготовим сопроводительные документы;
          </li>
          <li class="dropshipping-info-text">Доставим заказ покупателю;</li>
          <li class="dropshipping-info-text">
            Получим оплату от него и переведем деньги на Ваш расчетный счет;
          </li>
        </ul>
        <p class="dropshipping-info-text">
          Вам остается только передать всю необходимую информацию для
          отправки заказа клиенту.
        </p>
        <p class="dropshipping-info-text">
          Отчет о выполненных заказах будет доступен в личном кабинете — так
          вы всегда будете знать, сколько зарабатываете. Все заказы
          доставляются от имени вашего интернет-магазина, мы гарантируем
          конфиденциальность информации о клиентах.
        </p>
      <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='dropshipping-info-button' titleButtonProps='Подключить дропшиппинг'/>
    </>
  )
}

export default DropshippingInfoDrop