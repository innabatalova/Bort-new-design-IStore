import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Button from '../../components/DesignComponents/Button'
import Input from '../../components/DesignComponents/Input'

const Contacts = () => {
  const breadcrumbListItemProps = [
    ['index', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Контакты']
  ]

  return (
    <main className="contacts">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <div className="contacts-wrapper">
          <div className="contacts-info-wrapper">
            <h2 className="contacts-title">Контакты</h2>
            <span className="media-title-line contacts-title-line"></span>
            <div className="contacts-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.161925787227!2d37.44747385059848!3d55.807789195123036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54864726e7323%3A0xb6832e6370ee4e1!2z0JDQstC40LDRhtC40L7QvdC90LDRjyDRg9C7LiwgNzksINCc0L7RgdC60LLQsCwgMTIzMTgy!5e0!3m2!1sru!2sru!4v1632773139226!5m2!1sru!2sru"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="bort-modal contacts-info-modal">
              <h3 className="bort-modal-title contacts-info-title">
                Для нас важно ваше мнение! <br />Если у вас возникли вопросы или
                появились предложения, отправьте нам сообщение.
              </h3>
              <form action="#" className="bort-modal-form contacts-info-form">
                <Input classInputProps='contacts-info-wrap' classInputSpanProps='bort-modal-text contacts-info-subtitle'
                  titleInputProps='Ваше имя' typeInputProps='text' nameInputProps='name' 
                  classInputFieldProps='bort-modal-contacts contacts-info-input' minlengthInputProps='2'
                />
                <Input classInputProps='contacts-info-wrap' classInputSpanProps='bort-modal-text contacts-info-subtitle'
                  titleInputProps='Контактный телефон' typeInputProps='tel' nameInputProps='phone'
                  classInputFieldProps='bort-phone bort-modal-contacts contacts-info-input invalid' minlengthInputProps='18'
                />
                <Input classInputProps='contacts-info-wrap' classInputSpanProps='bort-modal-text contacts-info-subtitle'
                  titleInputProps='E-mail' typeInputProps='email' nameInputProps='Email'
                  classInputFieldProps='bort-modal-contacts contacts-info-input invalid' minlengthInputProps='2'
                />
                <Input classInputProps='contacts-info-wrap' classInputSpanProps='bort-modal-text contacts-info-subtitle'
                  titleInputProps='Тема сообщения' typeInputProps='text' nameInputProps='theme'
                  classInputFieldProps='bort-modal-contacts contacts-info-input invalid' minlengthInputProps='2'
                />
                <div className="contacts-info-message">
                  <span className="bort-modal-text contacts-info-subtitle">Ваше сообщение</span>
                  <textarea name="message" cols="30" rows="10"
                    className="bort-modal-message contacts-info-message-textarea"></textarea>
                </div>
                <Button classDesignButtonProps='orange' classSizeButtonProps='45'
                  classButtonProps='bort-modal-button contacts-info-button' titleButtonProps='Отправить' />
              </form>
            </div>
          </div>
          <div className="contacts-address-wrapper">
            <h3 className="contacts-address-title">
              г. Москва, Авиационная улица, дом 79
            </h3>
            <span className="contacts-address-phone">Телефон:</span>
            <a href="tel:74997001034" target="_blank" className="contacts-address-phone-link">+7 (499) 700-10-34</a>
            <span className="contacts-address-worktime">Понедельник - Пятница: с 10:00 до 18:00</span>
            <span className="contacts-address-reqi">Наименование юр. лица: ООО "Экстего"</span>
            <span className="contacts-address-reqi">ИНН: 6321450605</span>
            <span className="contacts-address-reqi">КПП: 632101001</span>
            <span className="contacts-address-reqi">ОГРН: 1186313073132</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacts