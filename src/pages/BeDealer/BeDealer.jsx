import React, { useState, useContext } from 'react'
import { ContextModalOpen } from '../../context/contextModalOpen'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BeDealerBoardDesc from '../../components/PagesComp/BeDealerBoardDesc/BeDealerBoardDesc'
import Input from '../../components/DesignComponents/Input'
import Button from '../../components/DesignComponents/Button'
import TextParagraph from '../../components/TextParagraph/TextParagraph'

import BeDealerBoardOne from '../../static/image/be-dealer-board-one.svg'
import BeDealerBoardTwo from '../../static/image/be-dealer-board-two.svg'
import BeDealerBoardThree from '../../static/image/be-dealer-board-three.svg'
import BeDealerBoardFour from '../../static/image/be-dealer-board-four.svg'


const BeDealer = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Стать дилером']
  ]

  const { openModal, setOpenModel } = useContext(ContextModalOpen)
  const OpenFeedbackModal = (e) => {
    e.preventDefault()
    setOpenModel('modal-open__visible')
  }

  return (
    <ContextModalOpen.Provider>
      <main className='be-dealer'>
        <div className="grid-container">
          <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
          <h2 className="be-dealer-title" onClick={() => { setOpenClass('light') }}>СТАТЬ ДИЛЕРОМ</h2>
          <TextParagraph classTextParagraphProps='be-dealer-subtitle'
            textTextParagraphProps='Компания Bort Global имеет обширную дилерскую сеть на территории
          Российской Федерации и за рубежом. Мы заинтересованы в её развитии и
          приглашаем московские и региональные организации к долгосрочному и
          взаимовыгодному сотрудничеству.'/>
          <h3 className="be-dealer__title">Став нашим дилером, Вы получите:</h3>
          <div className="be-dealer__board__wrapper">
            <BeDealerBoardDesc scrBeDealerBoardDescProps={BeDealerBoardOne} titleBeDealerBoardDescProps='Выгодные условия'
              itemsBeDealerBoardDescProps={[['Закупка товара по оптовым ценам.'],
              ['Одно из лучших на рынке cоотношений «цена-качество».'],
              ['Гибкая система скидок, постоянные акции для поддержания продаж.'],
              ['Действительно индивидуальный подход, с учетом особенностей именно вашего бизнеса.'],
              ['Стабильное наличие товара на складе.']
              ]} />
            <BeDealerBoardDesc scrBeDealerBoardDescProps={BeDealerBoardTwo} titleBeDealerBoardDescProps='Информационная поддержка'
              itemsBeDealerBoardDescProps={[
                ['Владение актуальной информацией о товаре, его цене и наличии с помощью нашего API.'],
                ['Профессиональная консультация персонального менеджера для подбора ассортимента.'],
                ['Своевременное получение информационных рассылок о новинках и спецпредложениях.']
              ]} />
            <BeDealerBoardDesc scrBeDealerBoardDescProps={BeDealerBoardThree} titleBeDealerBoardDescProps='Качество и ответственность'
              itemsBeDealerBoardDescProps={[
                ['Гарантия качества и надёжности приобретаемого товара вследствие всестороннего контроля.'],
                ['Качественное и быстрое гарантийное обслуживание.'],
                ['Сервисные центры по всей России и нескольким зарубежным странам.']
              ]} />
            <BeDealerBoardDesc scrBeDealerBoardDescProps={BeDealerBoardFour} titleBeDealerBoardDescProps='Продуманная логистика'
              itemsBeDealerBoardDescProps={[
                ['Доставка по Москве и регионам любой удобной вам транспортной компанией.'],
                ['Возможность самовывоза со склада в Москве, Ростове-на-Дону и Новосибирске.']
              ]} />
          </div>
          <h3 className="be-dealer__info__title">Кто может стать дилером?</h3>
          <TextParagraph classTextParagraphProps='be-dealer__info__text'
            textTextParagraphProps='Нашим дилером может стать любая организация или индивидуальный
          предприниматель, осуществляющие регулярные закупки.'/>
          <h3 className="be-dealer__info__title">Как стать дилером?</h3>
          <TextParagraph classTextParagraphProps='be-dealer__info__text'
            textTextParagraphProps='Стать дилером компании Bort Global несложно. Об условиях получения
          статуса дилера, Вы можете узнать у наших менеджеров по телефону:
          8(499)700-10-34, отправив запрос на электронный адрес:
          b2b-service@bort-global.com или заполнив форму ниже. Наш специалист
          свяжется с вами в течение двух рабочих дней.'/>
          <form className="be-dealer__form__wrapper" onSubmit={OpenFeedbackModal}>
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text be-dealer__input__req'
              titleInputProps='Название компании' typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts be-dealer__input__field' minlengthInputProps='2' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text'
              titleInputProps='Адрес сайта' typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts be-dealer__input__field' minlengthInputProps='2' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text be-dealer__input__req'
              titleInputProps='Сфера деятельности' typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts be-dealer__input__field' minlengthInputProps='2' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text'
              titleInputProps='Адрес офис' typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts be-dealer__input__field' minlengthInputProps='2' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text be-dealer__input__req'
              titleInputProps='ФИО' typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts be-dealer__input__field' minlengthInputProps='2' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text be-dealer__input__req'
              titleInputProps='Контактный телефон' typeInputProps='tel' nameInputProps='phone'
              classInputFieldProps='bort-phone bort-modal-contacts invalid be-dealer__input__field' minlengthInputProps='18' />
            <Input classInputProps='be-dealer__input' classInputSpanProps='bort-modal-text be-dealer__input__req'
              titleInputProps='E-mail' typeInputProps='email' nameInputProps='Email'
              classInputFieldProps='bort-modal-contacts invalid be-dealer__input__field' minlengthInputProps='2' />
            <div className="be-dealer__area">
              <span className="bort-modal-text be-dealer__input__req">Дополнительная информация</span>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="bort-modal-message be-dealer__area__field"
              ></textarea>
            </div>
            <Button classDesignButtonProps='orange' classSizeButtonProps='45'
              classButtonProps='bort-modal-button be-dealer__button' titleButtonProps='Отправить' />
          </form>
        </div>
      </main>
    </ContextModalOpen.Provider>
  )
}

export default BeDealer