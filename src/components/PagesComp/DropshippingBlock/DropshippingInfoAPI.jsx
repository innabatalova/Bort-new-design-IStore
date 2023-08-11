import React from 'react'

import TextParagraph from '../../TextParagraph/TextParagraph'

const DropshippingInfoAPI = () => {
  return (
    <>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Мы предоставляем нашим дропшиппинг-клиентам возможность полной
        автоматизации взаимодействия с нашей системой с помощью API.'/>
      <TextParagraph classTextParagraphProps='dropshipping-info-text dropshipping-info-black'
        textTextParagraphProps='Функционал API:'/>
      <ul className="dropshipping-info-list">
        <li className="dropshipping-info-text">
          Получение информации о товарах (описание, фото, инструкции,
          особенности, преимущества, видео)
        </li>
        <li className="dropshipping-info-text">
          Автоматическое размещение заказа
        </li>
        <li className="dropshipping-info-text">
          Получение информации о текущем состоянии заказа
        </li>
      </ul>
      <p className="dropshipping-info-text">
        Если у Вашего IT-специалиста будут вопросы, мы с радостью поможем,
        просто свяжитесь с нами. Техническая информация об API будет
        доступна после прохождения
        <span className="dropshipping-info-link dropshipping-info-link-regdrop"> регистрации </span>
        в качестве дропшипинг партнера.
      </p>
    </>
  )
}

export default DropshippingInfoAPI