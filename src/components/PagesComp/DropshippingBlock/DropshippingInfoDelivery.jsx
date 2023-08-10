import React from 'react'

const DropshippingInfoDelivery = () => {
  return (
    <>
      <p class="dropshipping-info-text">
        На данный момент мы предлагаем два способа доставки:
      </p>
      <ul class="dropshipping-info-list">
        <li class="dropshipping-info-text">Курьером DPD до двери.</li>
        <li class="dropshipping-info-text">
          Почтой России до отделения.
        </li>
      </ul>
      <p class="dropshipping-info-text dropshipping-info-black">
        В обоих случаях стоимость доставки фиксирована и не зависит от
        региона покупателя,
        <span class="dropshipping-info-price"> всего 350 руб.</span>
      </p>
      <p class="dropshipping-info-text">
        Это огромное конкурентное преимущество! Ваши покупатели получают
        максимально простые условия доставки без необходимости расчитывать
        стоимость доставки по размеру и весу, а вам не придется
        настраивать интеграцию со службами доставки.
      </p>
    </>
  )
}

export default DropshippingInfoDelivery