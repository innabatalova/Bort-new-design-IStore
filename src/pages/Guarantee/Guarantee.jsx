import React, { useContext } from 'react'
import { ContextModalOpen } from '../../context/contextModalOpen'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import TextParagraph from '../../components/TextParagraph/TextParagraph'
import Input from '../../components/DesignComponents/Input'
import Button from '../../components/DesignComponents/Button'

const Guarantee = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Гарантийное обслуживание']
  ]

  const { openModal, setOpenModal } = useContext(ContextModalOpen)
  const OpenFeedbackModal = (e) => {
    e.preventDefault()
    setOpenModal('modal-open__visible')
  }

  return (
    <main className="guarantee">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <div className="guarantee-wrapper">
          <div className="guarantee-info-wrapper">
            <h2 className="guarantee-title">Гарантийное обслуживание</h2>
            <span className="media-title-line"></span>
            <ul className="guarantee__list">
              <li className="guarantee__list__item">
                Условия гарантийного обслуживания
                <TextParagraph classTextParagraphProps='guarantee-text'
                  textTextParagraphProps='В нашем понимании, сервис – это не только гибкая система
                  скидок, логистика, но и качественное гарантийное и
                  постгарантийное обслуживание.'/>
                <TextParagraph classTextParagraphProps='guarantee-text'
                  textTextParagraphProps='Разветвленная сеть авторизованных сервисных центров, более 550
                  объектов по всему миру и 700 дилеров, позволяют оперативно
                  выполнять не только ремонт инструмента, но и обеспечивать
                  бесперебойные поставки товара в любую точку мира. На все
                  товары компании Bort Global распространяется стандартная
                  гарантия от производителя на 2 года. Стандартная гарантия
                  действует исключительно в соответствии с условиями компании
                  Bort Global, изложенными ниже. Гарантийный случай не
                  распространяется на товары, если инструмент был использован с
                  нарушением правил эксплуатации.'/>
                <TextParagraph classTextParagraphProps='guarantee-text guarantee-text-black'
                  textTextParagraphProps='Напоминаем! Все товары торговой марки Bort предназначены для
                  бытового или полупрофессионального применения.'/>
                <TextParagraph classTextParagraphProps='guarantee-text'
                  textTextParagraphProps='Подтверждением высокого качества продукции Bort Global
                  является уникальное предложение по расширенной гарантии.
                  Данное предложение распространяется на определенные страны.
                  Для нас важно, чтобы вы были довольны нашей продукцией,
                  поэтому список стран постоянно расширяется.'/>
                <TextParagraph classTextParagraphProps='guarantee-text'
                  textTextParagraphProps='Для получения расширенной гарантии на 5 лет необходимо
                  зарегистрировать новый товар Bort Global на нашем сервисном
                  портале. Если у вас возникают вопросы, наши
                  высококвалифицированные специалисты ответят в течении двух
                  рабочих дней через форму обратной связи на сайте компании или
                  через социальную сеть facebook.'/>
              </li>
            </ul>
            <object
              data="image/Инструкция-к-товару.pdf"
              type="application/pdf"
              className="guarantee-pdf"
            ></object>
          </div>
          <div className="guarantee-form-wrapper">
            <div className="bort-modal guarantee-form-modal">
              <h3 className="bort-modal-title">обратная связь</h3>
              <form className="bort-modal-form" onSubmit={OpenFeedbackModal}>
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО'
                  typeInputProps='text' nameInputProps='name'
                  classInputFieldProps='bort-modal-contacts guarantee-form-modal-contacts'
                  minlengthInputProps='2'
                />
                <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
                  typeInputProps='tel' nameInputProps='phone'
                  classInputFieldProps='bort-modal-contacts guarantee-form-modal-contacts'
                  minlengthInputProps='18'
                />
                <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
                  typeInputProps='email' nameInputProps='Email'
                  classInputFieldProps='bort-modal-contacts invalid guarantee-form-modal-contacts'
                  minlengthInputProps='2'
                />
                <span className="bort-modal-text">Ваше сообщение</span>
                <textarea name="message" cols="30" rows="10"
                  className="bort-modal-message guarantee-form-modal-contacts"
                ></textarea>
                <Button classDesignButtonProps='orange' classSizeButtonProps='50'
                  classButtonProps='bort-modal-button' titleButtonProps='Отправить'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Guarantee