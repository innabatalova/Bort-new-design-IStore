import React from 'react'

import TextParagraph from '../../TextParagraph/TextParagraph'

const DropshippingInfoWork = () => {
  return (
    <>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='У вас должно быть зарегистрированное ИП или ООО. Если его нет -
          сначала пройдите государственную регистрацию в качестве ИП или ООО
          и откройте расчетный счет.'/>
      <ol>
        <li className="dropshipping-info-text">
          Оформите заявку на
          <span
            className="dropshipping-info-link dropshipping-info-link-opendrop"
          > подключение дропшипинга</span
          >
          ;
        </li>
        <li className="dropshipping-info-text">
          Подпишите договор и внесите аванс в размере 10 000 р.;
        </li>
        <li className="dropshipping-info-text">
          Получите API key и ознакомьтесь с
          <span
            className="dropshipping-info-link dropshipping-info-link-docapi"
          > документацией по API</span
          >
          ;
        </li>
        <li className="dropshipping-info-text">
          Загрузите к себе на сайт ассортимент Bort;
        </li>
        <li className="dropshipping-info-text">Начинайте продажи!</li>
      </ol>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Каждый заказ по API будет приходить к нам в Bort Global. Мы
          надежно упакуем товар по всем требованиям транспортной компании, а
          полученные деньги от клиента перечислим на ваш расчетный счет.'/>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Отчет о выполненных заказах будет доступен в личном кабинете — так
          вы всегда знаете, сколько зарабатываете. Все заказы доставляются
          от имени вашего интернет-магазина, мы гарантируем
          конфиденциальность информации о клиентах.'/>
    </>
  )
}

export default DropshippingInfoWork