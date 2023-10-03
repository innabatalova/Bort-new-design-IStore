import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import FeedbackSliderItem from '../../components/FeedbackSliderItem/FeedbackSliderItem'
import Input from '../../components/DesignComponents/Input'
import Button from '../../components/DesignComponents/Button'

const Feedback = () => {
  const breadcrumbListItemProps = [
    ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
    ['/about-company', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Обратная связь']
  ]

  const arrayFeedbackSliderItem = [
    ['Можно ли у вас приобрести аккумулятор, зарядное устройство?',
      'За покупкой вы можете обратиться в один из наших авторизованных сервисных центров.',
      '', ' Карта сервисных центров.'],
    ['Где можно приобрести запчасти в моем городе?',
      'За покупкой вы можете обратиться в один из наших авторизованных сервисных центров.',
      '', ' Карта сервисных центров.'],
    ['Как оформить расширенную гарантию?', 'Оформить и распечатать сертификат на расширенную гарантию вы сможете на нашем сервисном портале. При обращении в авторизованный сервисный центр в период действия расширенной гарантии вам необходимо предоставить распечатанный сертификат.',
      ''],
    ['Где находится сервисный центр в моем городе?', 'Вся информация о наших авторизованных сервисных центрах доступна', '', 'по ссылке.'],
    ['Получил товар в неполной комплектации, что делать?', 'Вам необходимо обратиться в организацию где приобретался товар с претензией о некомплекте.', ''],
    ['Обнаружил неисправность, что делать?', 'Вам необходимо обратиться в организацию где приобретался товар для диагностики, либо вы можете обратиться за диагностикой напрямую в один из наших',
      '', ' авторизованных сервисных центров.'],
    ['Как оформить заказ на организацию (юридическое лицо)?', 'Оформить расчет для юридических лиц Вы можете на сайте компании-партнера Extego. При оформлении покупки Вам будет предложен выбор варианта оплаты, в том числе и оплата по безналичному расчету.', ''],
    ['Можно ли оформить самовывоз товара?', 'Самовывоз из пунктов выдачи не предусмотрен. При офомлении заказа Вы можете выбрать способ доставки, либо курьером до двери, либо в отделение Почты России.', '']
  ]

  const sortArrayFeedbackSliderItem = arrayFeedbackSliderItem.map((item, index) =>
    <FeedbackSliderItem key={index} questionFeedbackSliderItemProps={item[0]}
      answerFeedbackSliderItemProps={item[1]} classFeedbackSliderItemProps={item[2]}
      answerLinkFeedbackSliderItemProps={item[3]} />
  )


  return (
    <div className="feedback">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="about-company-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <div className="feedback-slider">
          {sortArrayFeedbackSliderItem}
        </div>
        <span className="feedback__text">Если вы не нашли ответ на свой вопрос, вы можете отправить нам сообщение, используя форму ниже.</span>
        <div className="bort-modal feedback-modal">
          <h3 className="bort-modal-title">обратная связь</h3>
          <form action="#" className="bort-modal-form">
            <div className="feedback-modal-form__wrapper">
              <div className="feedback-modal-text">
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО'
                  typeInputProps='text' nameInputProps='name' classInputFieldProps='bort-modal-contacts' minlengthInputProps='2' />
              </div>
              <div className="feedback-modal-text">
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
                  typeInputProps='tel' nameInputProps='phone' classInputFieldProps='bort-phone bort-modal-contacts invalid' minlengthInputProps='18' />
              </div>
              <div className="feedback-modal-text">
                <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
                  typeInputProps='email' nameInputProps='Email' classInputFieldProps='bort-modal-contacts invalid' minlengthInputProps='2' />
              </div>
            </div>

            <div className="feedback-modal-select">
              <span className='bort-modal-text'>Тема</span>
              <select className='bort-modal-text feedback-modal-select__text'>
                <option selected disabled>Выбрать</option>
                <option>Гарантийное и постгарантийное обслуживание</option>
                <option>Вопрос</option>
                <option>Жалоба</option>
                <option>Благодарность</option>
              </select>
            </div>

            <div className="feedback-modal-select">
              <span className='bort-modal-text'>Город</span>
              <select className='bort-modal-text feedback-modal-select__text'>
                <option selected disabled>Выбрать</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Тольятти</option>
                <option>Челябинск</option>
              </select>
            </div>

            <div className="feedback-modal-file">
              <span className='bort-modal-text'>Файл</span>
              <label className="feedback-modal-label" htmlFor="feedback-modal-file">Загрузить файл</label>
              <input id='feedback-modal-file' type="file" />
            </div>


            <div>
              <span className="bort-modal-text">Ваше сообщение</span>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="bort-modal-message feedback-modal-form__message"
              ></textarea>
            </div>

            <div className="feedback-modal-bot">
              <span className='bort-modal-text'>Антибот</span>
              <div className="feedback-modal-bot__wrapper">
                <div className="feedback-modal-bot__check"></div>
                <span className="bort-modal-text">Я не робот</span>
              </div>
            </div>

            <div className="feedback-modal-confirm">
              <input type="checkbox" className="bort-checkbox filter-checkbox" id="bcheck" />
              <label for="bcheck" className="bort-checkbox-label filter-checkbox-label">
                Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.Нажимая кнопку "Отправить", я подтверждаю свою дееспособность и согласие на получение информации об оформлении и получении заказа, согласие на обработку персональных данных в соответствии с указанным <a>здесь текстом</a>.
              </label>
            </div>

            <Button classDesignButtonProps='orange' classSizeButtonProps='50'
              classButtonProps='bort-modal-button feedback-modal-form__button' titleButtonProps='Отправить' />


          </form>
        </div>
      </div>
    </div>
  )
}

export default Feedback