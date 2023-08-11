import React from 'react'

import Button from '../../DesignComponents/Button'
import TextParagraph from '../../TextParagraph/TextParagraph'

const DropshippingInfoDrop = () => {
  return (
    <>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Дропшиппинг - это возможность e-commerce предпринимателю
          сосредоточить время и силы на продажах. Вы можете заниматься
          развитием отношений с покупателями в вашем интернет-магазине,
          повышать уровень доверия, уделить время настройке рекламы и
          продвижения.'/>
      <TextParagraph classTextParagraphProps='dropshipping-info-text dropshipping-info-black'
        textTextParagraphProps='Мы возьмем на себя все рутинные задачи связанные с логистикой,
        приемом платежей и хранением остатков:'/>
      <ul className="dropshipping-info-list">
        <li className="dropshipping-info-text">
          Упакуем заказ в соответствии со стандартами транспортных
          компаний и служб доставки;
        </li>
        <li className="dropshipping-info-text">
          Подготовим сопроводительные документы;
        </li>
        <li className="dropshipping-info-text">Доставим заказ покупателю;</li>
        <li className="dropshipping-info-text">
          Получим оплату от него и переведем деньги на Ваш расчетный счет;
        </li>
      </ul>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Вам остается только передать всю необходимую информацию для
        отправки заказа клиенту.'/>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Отчет о выполненных заказах будет доступен в личном кабинете — так
        вы всегда будете знать, сколько зарабатываете. Все заказы
        доставляются от имени вашего интернет-магазина, мы гарантируем
        конфиденциальность информации о клиентах.'/>
      <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='dropshipping-info-button' titleButtonProps='Подключить дропшиппинг' />
    </>
  )
}

export default DropshippingInfoDrop