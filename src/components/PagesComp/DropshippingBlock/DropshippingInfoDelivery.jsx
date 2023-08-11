import React from 'react'

import TextParagraph from '../../TextParagraph/TextParagraph'

const DropshippingInfoDelivery = () => {
  return (
    <>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='На данный момент мы предлагаем два способа доставки:'/>
      <ul clasName="dropshipping-info-list">
        <li clasName="dropshipping-info-text">Курьером DPD до двери.</li>
        <li clasName="dropshipping-info-text">
          Почтой России до отделения.
        </li>
      </ul>
      <p clasName="dropshipping-info-text dropshipping-info-black">
        В обоих случаях стоимость доставки фиксирована и не зависит от
        региона покупателя,
        <span clasName="dropshipping-info-price"> всего 350 руб.</span>
      </p>
      <TextParagraph classTextParagraphProps='dropshipping-info-text'
        textTextParagraphProps='Это огромное конкурентное преимущество! Ваши покупатели получают
        максимально простые условия доставки без необходимости расчитывать
        стоимость доставки по размеру и весу, а вам не придется
        настраивать интеграцию со службами доставки.' />
    </>
  )
}

export default DropshippingInfoDelivery