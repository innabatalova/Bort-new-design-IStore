import React from 'react'
import { useNavigate } from 'react-router-dom'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Button from '../../components/DesignComponents/Button'
import TextParagraph from '../../components/TextParagraph/TextParagraph'
import Input from '../../components/DesignComponents/Input'

import RichImgTwo from '../../static/rich_image/rich-section-two.jpg'
import RichImgThree from '../../static/rich_image/rich-section-three.jpg'
import RichImgFourLeft from '../../static/rich_image/rich-section-four-left.jpg'
import RichImgFourRight from '../../static/rich_image/rich-section-four-right.jpg'
import RichImgFourFive from '../../static/rich_image/rich-section-five.jpg'

const NewsView = () => {
  const breadcrumbListItemProps = [
    ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
    ['/news-view', 'onelevel-breadcrumb-nav', 'Новости'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Как выбрать пылесос из всего многообразия моделей, представленного на рынке.']
  ]

  const navigate = useNavigate()
  const onNewsPreview = () => { navigate('/news-preview') }

  return (
    <>
      <main className="news-view">
        <div className="grid-container">
          <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
          <div className="news-view-wrapper">
            <div className="news-view-rich-wrapper">
              <h2 className="news-view-title">
                Как выбрать пылесос из всего многообразия моделей, представленного
                на рынке.
              </h2>
              <span className="news-view-date">29/08/2020</span>
              <Button clickDesignButtonProps={onNewsPreview} classDesignButtonProps='black' classSizeButtonProps='45' 
                classButtonProps='news-view-button' titleButtonProps='К списку новостей'/>
              <div className="rich-section rich-section-one">
                <div className="rich-video">
                  <iframe src="https://www.youtube.com/embed/hq5JDnUHKJk?autoplay=0&mute=1" title="YouTube video player" allowFullScreen></iframe>
                </div>
              </div>
              <div className="rich-section rich-section-two">
                <div className="rich-section__image">
                  <img className="rich-section__img parallax-object" src={RichImgTwo}></img>
                  <h4 className="rich-section__subtitle">
                    Корпус мойки выполнен из качественного пластика
                  </h4>
                </div>
                <div className="rich-section__info">
                  <h3 className="rich-section__title">
                    Мойка высокого давления Bort BHR-2100-PRO
                  </h3>
                  <TextParagraph classTextParagraphProps='rich-text rich-section-two__info' 
                    textTextParagraphProps='Качественная бытовая мойка высокого давления позволит
                    существенно сэкономить деньги на посещении автомойки и упростит
                    процесс поддержания частоты на приусадебном участке. В обзоре я
                    расскажу о мини-мойке Bort BHR-2100-PRO, которую тестировал на
                    даче в течение двух недель.'/>
                </div>
              </div>
              <div className="rich-section rich-section-three parallax-section">
                <div className="rich-section__image">
                  <img src={RichImgThree} alt="мойка высокого давления Bort" className="rich-section__img parallax-object2"/>
                  <h4 className="rich-section__subtitle">
                    Корпус мойки выполнен из качественного пластика
                  </h4>
                </div>
                <div className="rich-section__info">
                  <h3 className="rich-section__title">
                    Умеет работать с моющим средством и с другими веществами
                  </h3>
                  <TextParagraph classTextParagraphProps='rich-text rich-section-three__info'
                    textTextParagraphProps='В задней части корпуса предусмотрен бачок для моющего
                    средства. Объём бачка небольшой, но его достаточно для мытья
                    машины. Гибкий заборный шланг оснащён фильтрующей сеточкой.
                    Для корректной работы устройства рекомендую использовать
                    специализированные моющие средства.'/>
                  <ul className="rich-section__list">
                    <li className="rich-section__list__item">Удобство использования.</li>
                    <li className="rich-section__list__item">Длинный напорный шлаг — восемь метров.</li>
                    <li className="rich-section__list__item">Уровня давления достаточно для бытовых задач.</li>
                    <li className="rich-section__list__item">Сборка и качество материалов.</li>
                  </ul>
                </div>
              </div>
              <div className="rich-section rich-section-four parallax-section2">
                <div className="rich-section__image">
                  <img src={RichImgFourLeft} alt="мойка высокого давления Bort" className="rich-section__img parallax-object3"/>
                  <h4 className="rich-section__subtitle">
                    Корпус мойки выполнен из качественного пластика
                  </h4>
                </div>
                <div className="rich-section__image">
                  <img src={RichImgFourRight} alt="мойка высокого давления Bort" className="rich-section__img parallax-object3"/>
                  <h4 className="rich-section__subtitle">
                    Корпус мойки выполнен из качественного пластика
                  </h4>
                </div>
              </div>
              <div className="rich-section rich-section-five rich-section-last parallax-section3">
                <img src={RichImgFourFive} alt="мойка высокого давления Bort" className="rich-section__five__img parallax-object5"/>
              </div>
            </div>
            <div className="news-view-form-wrapper">
              <div className="bort-modal news-view-form-modal">
                <h3 className="bort-modal-title">обратная связь</h3>
                <form action="#" className="bort-modal-form">
                  <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО'
                    typeInputProps='text' nameInputProps='name' 
                    classInputFieldProps='bort-modal-contacts news-view-form-modal-contacts' minlengthInputProps='2'
                    />
                  <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
                    typeInputProps='tel' nameInputProps='phone'
                    classInputFieldProps='bort-phone bort-modal-contacts invalid news-view-form-modal-contacts' 
                    minlengthInputProps='18'
                  />
                  <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
                    typeInputProps='email' nameInputProps='Email'
                    classInputFieldProps='bort-modal-contacts invalid news-view-form-modal-contacts'
                    minlengthInputProps='2'
                  />
                  <span className="bort-modal-text">Ваше сообщение</span>
                  <textarea name="message" cols="30" rows="10" className="bort-modal-message news-view-form-modal-contacts"></textarea>
                  <Button classDesignButtonProps='orange' classSizeButtonProps='50'
                    classButtonProps='bort-modal-button' titleButtonProps='Отправить'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="grid-container">
        <Button classDesignButtonProps='black' classSizeButtonProps='45'
          classButtonProps='news-view-button' titleButtonProps='К списку новостей' />
      </div>
    </>
  )
}

export default NewsView