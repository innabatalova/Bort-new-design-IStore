import React from 'react'

const DropshippingInfoWork = () => {
  return (
    <>
        <p class="dropshipping-info-text">
          У вас должно быть зарегистрированное ИП или ООО. Если его нет -
          сначала пройдите государственную регистрацию в качестве ИП или ООО
          и откройте расчетный счет.
        </p>
        <ol>
          <li class="dropshipping-info-text">
            Оформите заявку на
            <span
              class="dropshipping-info-link dropshipping-info-link-opendrop"
            > подключение дропшипинга</span
            >
            ;
          </li>
          <li class="dropshipping-info-text">
            Подпишите договор и внесите аванс в размере 10 000 р.;
          </li>
          <li class="dropshipping-info-text">
            Получите API key и ознакомьтесь с
            <span
              class="dropshipping-info-link dropshipping-info-link-docapi"
            > документацией по API</span
            >
            ;
          </li>
          <li class="dropshipping-info-text">
            Загрузите к себе на сайт ассортимент Bort;
          </li>
          <li class="dropshipping-info-text">Начинайте продажи!</li>
        </ol>
        <p class="dropshipping-info-text">
          Каждый заказ по API будет приходить к нам в Bort Global. Мы
          надежно упакуем товар по всем требованиям транспортной компании, а
          полученные деньги от клиента перечислим на ваш расчетный счет.
        </p>
        <p class="dropshipping-info-text">
          Отчет о выполненных заказах будет доступен в личном кабинете — так
          вы всегда знаете, сколько зарабатываете. Все заказы доставляются
          от имени вашего интернет-магазина, мы гарантируем
          конфиденциальность информации о клиентах.
        </p>
    </>
  )
}

export default DropshippingInfoWork