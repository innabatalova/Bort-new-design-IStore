import React from 'react'

import BreadcrumbListItem from '../../components/Breadcrumb/BreadcrumbListItem'
import ProductCardGalleryItem from '../../components/ProductCardGalleryItem/ProductCardGalleryItem'
import ProductCardNavlineItem from '../../components/ProductCardNavlineItem/ProductCardNavlineItem'
import ProductCardSectionTitle from '../../components/ProductCardSectionTitle/ProductCardSectionTitle'
import ProductCardSpecificationListItem from '../../components/ProductCardSpecificationListItem/ProductCardSpecificationListItem'
import ProductCardSetListItem from '../../components/ProductCardSetListItem/ProductCardSetListItem'
import MainSlider from '../../components/MainSlider/MainSlider'

import ProductCardGalleryImg1 from '../../static/product-card-image/BAB-10,8X_1.jpg'
import ProductCardGalleryImg2 from '../../static/product-card-image/BAB-10,8X_2.jpg'
import ProductCardGalleryImg3 from '../../static/product-card-image/BAB-10,8X_3.jpg'
import ProductCardGalleryImg4 from '../../static/product-card-image/BAB-10,8X_4.jpg'
import ProductCardGalleryImg5 from '../../static/product-card-image/BAB-10,8X_5.jpg'
import ProductCardGalleryImg6 from '../../static/product-card-image/BAB-10,8X_6.jpg'

import BortLogoImg from '../../static/image/Bort_logo_1.svg'
import ExtegoLogoImg from '../../static/image/extego-logo.svg'

import RichImg1 from '../../static/rich_image/rich-section-two.jpg'
import RichImg2 from '../../static/rich_image/rich-section-three.jpg'
import RichImg3 from '../../static/rich_image/rich-section-four-left.jpg'
import RichImg4 from '../../static/rich_image/rich-section-four-right.jpg'
import RichImg5 from '../../static/rich_image/rich-section-five.jpg'

import FilesIcon from '../../static/rich_image/files-icon.svg'

import NoveltyImg1 from '../../static/image/compressor.jpg'
import NoveltyImg2 from '../../static/image/tools.jpg'
import NoveltyImg3 from '../../static/image/grinder.jpg'
import NoveltyImg4 from '../../static/image/milling.jpg'

const ProductCard = () => {
  const arrayProductCardGalleryItems = [
    ['', ProductCardGalleryImg1, 'BAB-10,8X_1'], ['', ProductCardGalleryImg2, 'BAB-10,8X_2'],
    ['', ProductCardGalleryImg3, 'BAB-10,8X_3'], ['view', ProductCardGalleryImg4, 'BAB-10,8X_4'],
    ['', ProductCardGalleryImg5, 'BAB-10,8X_5'], ['', ProductCardGalleryImg6, 'BAB-10,8X_6']]

  const sortArrayProductCardGalleryItems = arrayProductCardGalleryItems.map((item, index) =>
    <ProductCardGalleryItem key={index} classProductCardGalleryItemProps={item[0]} srcProductCardGalleryItemProps={item[1]}
      altProductCardGalleryItemProps={item[2]} />
  );

  const arrayProductCardNavlineItems = [
    ['navline__item__active', '#rich', 'Описание'], ['', '#specification', 'Характеристики'],
    ['', '#buy', 'ГДЕ КУПИТЬ?'], ['', '#set', 'Комплектация'],
    ['', '#related', 'Сопутствующие товары'], ['', '#', 'доп.информация']]

  const sortArrayProductCardNavlineItems = arrayProductCardNavlineItems.map((item, index) =>
    <ProductCardNavlineItem key={index} classProductCardNavlineItemProps={item[0]} hrefProductCardNavlineItemProps={item[1]}
      titleProductCardNavlineItemProps={item[2]}
    />
  );

  const arrayProductCardSpecificationListItems = [
    ['Brand:', 'BORT'], ['Тип:', 'Мойка высокого давления'], ['Потребляемая мощность, Вт:', '2 000'],
    ['Максимальное давление, бар:', '150'], ['Рабочее давление, бар:', '130'],
    ['Максимальная производительность (л/мин), л/мин:', '7,5'], ['Максимальная производительность (л/мин), л/мин:', '7,5'],
    ['Максимальная производительность (л/час), л/час:', '450'], ['Функция автоматического всасывания:', 'Да'],
    ['Встроенный бачок для моющего средства:', 'Нет'], ['Автостоп', 'Да'], ['Шланг, м:', '8'],
    ['Длина шнура питания, м:', '5'], ['Напряжение, В:', '220'], ['Частота тока, Гц:', '50'], ['Вес изделия, кг:', '7']
  ]

  const sortArrayProductCardSpecificationListItems = arrayProductCardSpecificationListItems.map((item, index) =>
    <ProductCardSpecificationListItem key={index} nameProductCardSpecificationListItemProps={item[0]}
      valueProductCardSpecificationListItemProps={item[1]}
    />
  );

  const buyBlockItems = []
  for(let i = 0; i < 12; i++){
    buyBlockItems.push([i])
  }

  const sortBuyBlockItems = buyBlockItems.map(() =>
    <div className="buy-block__item"></div>
  );

  return (
    <>
      <main className="product-card">
        <div className="grid-container">
          <nav className="breadcrumb">
            <ul className="breadcrumb-list product-card__breadcrumb__list">
              <BreadcrumbListItem hrefBreadcrumbListItemProps='index.html' classBreadcrumbListItemProps='product-card__breadcrumb__nav'
                titleBreadcrumbListItemProps='Главная' />
              <BreadcrumbListItem hrefBreadcrumbListItemProps='#' classBreadcrumbListItemProps='product-card__breadcrumb__nav'
                titleBreadcrumbListItemProps='Инструменты' />
              <BreadcrumbListItem hrefBreadcrumbListItemProps='category.html' classBreadcrumbListItemProps='product-card__breadcrumb__nav'
                titleBreadcrumbListItemProps='Аккумуляторный инструмент' />
              <BreadcrumbListItem hrefBreadcrumbListItemProps='category.html' classBreadcrumbListItemProps='product-card__breadcrumb__nav product-card__breadcrumb__nav__last'
                titleBreadcrumbListItemProps='Аккумуляторные дрели / шуруповерты' />
            </ul>
          </nav>
        </div>
        <div className="grid-container">
          <div className="product-card-wrapper">
            <div className="product-card-wrapper-gallery">
              <div className="owl-carousel owl-theme product-card-gallery">
                {sortArrayProductCardGalleryItems}
              </div>
              <div className="product-card-gallery-view"></div>
            </div>
            <div className="product-card-wrapper-info">
              <div className="product-card-info">
                <div className="product-card-info__title">
                  Дрель-шуруповерт аккумуляторная BORT BAB-10,8X (1x1,3А.ч)
                </div>
                <div className="product-card-info__code">
                  <span>Код товара: 91272560 </span>
                  <span>
                    <img
                      src="image/product-card-chart.svg"
                      alt="chart card icon"
                    />
                    <span><a href="#">Добавить в сравнение</a></span>
                  </span>
                </div>
                <div className="product-card-info__text">
                  <p className="product-card-info__description">
                    Часто ли вы пользуетесь шуруповертом? Предполагаем, что да.
                    Вам хочется, чтобы он был удобный? Надежный? Компактный?
                    Дрель-шуруповерт BAB-10,8X - это та модель, которая вам нужна.
                    С помощью нее вы выполните несложные работы по сборке мебели,
                    монтаже карниза и полок с легкостью.
                  </p>
                  <ul className="product-card-info__specifications">
                    <li className="product-card-info__specifications__item">
                      Компактность и простота использования
                    </li>
                    <li className="product-card-info__specifications__item">
                      Литий-ионный аккумулятор
                    </li>
                    <li className="product-card-info__specifications__item">
                      Подсветка рабочей зоны
                    </li>
                  </ul>
                  <div className="product-card-info__price">2 690 Р</div>
                  <div className="product-card-info__recomend">
                    (рекомендованная цена)
                  </div>
                </div>
                <div className="product-card-info__buy">
                  <span className="product-card-info__buy__title"
                  >Купить в магазинах:</span
                  >
                  <div className="product-card-info__buy__die">
                    <div className="product-card-info__buy__bort">
                      <img
                        src={BortLogoImg}
                        alt="Официальный интернет-магазин Bort"
                        className="product-card-info__buy__bort__img"
                      />
                      <span className="product-card-info__buy__bort__subtitle"
                      >Официальный интернет-магазин</span
                      >
                    </div>
                    <div className="product-card-info__buy__extego">
                      <img
                        src={ExtegoLogoImg}
                        alt="интернет-магазин Extego"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="grid-container">
        <ul className="navline">
          {sortArrayProductCardNavlineItems}
        </ul>
      </div>
      <span className="navline-under"></span>
      <div className="grid-container">
        <div id="rich" className="rich">
          <div className="rich-wrapper">
            <div className="rich-section rich-section-one">
              <p className="rich-text rich-section-one__info">
                Беспроводная дрель-шуруповерт BAB-18IX2Li-FD – удобная замена
                сразу трем инструментам - дрель, шуруповерт и дрель с функцией
                удара. Данная модель имеет массу преимуществ и обладает высокими
                техническими параметрами.
              </p>
              <div className="rich-video">
                <iframe
                  src="https://www.youtube.com/embed/hq5JDnUHKJk?autoplay=0&mute=1"
                  title="YouTube video player"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            <div className="rich-section rich-section-two">
              <div className="rich-section__image">
                <img className="rich-section__img parallax-object" src={RichImg1}></img>
                <h4 className="rich-section__subtitle">Корпус мойки выполнен из качественного пластика</h4>
              </div>
              <div className="rich-section__info">
                <h3 className="rich-section__title">Мойка высокого давления Bort BHR-2100-PRO</h3>
                <p className="rich-text rich-section-two__info">
                  Качественная бытовая мойка высокого давления позволит
                  существенно сэкономить деньги на посещении автомойки и упростит
                  процесс поддержания частоты на приусадебном участке. В обзоре я
                  расскажу о мини-мойке Bort BHR-2100-PRO, которую тестировал на
                  даче в течение двух недель.
                </p>
              </div>
            </div>
            <div className="rich-section rich-section-three parallax-section">
              <div className="rich-section__image">
                <img
                  src={RichImg2}
                  alt="мойка высокого давления Bort"
                  className="rich-section__img parallax-object2"
                />
                <h4 className="rich-section__subtitle">
                  Корпус мойки выполнен из качественного пластика
                </h4>
              </div>
              <div className="rich-section__info">
                <h3 className="rich-section__title">
                  Умеет работать с моющим средством и с другими веществами
                </h3>
                <p className="rich-text rich-section-three__info">
                  В задней части корпуса предусмотрен бачок для моющего средства.
                  Объём бачка небольшой, но его достаточно для мытья машины.
                  Гибкий заборный шланг оснащён фильтрующей сеточкой. Для
                  корректной работы устройства рекомендую использовать
                  специализированные моющие средства.
                </p>
                <ul className="rich-section__list">
                  <li className="rich-section__list__item">
                    Удобство использования.
                  </li>
                  <li className="rich-section__list__item">
                    Длинный напорный шлаг — восемь метров.
                  </li>
                  <li className="rich-section__list__item">
                    Уровня давления достаточно для бытовых задач.
                  </li>
                  <li className="rich-section__list__item">
                    Сборка и качество материалов.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rich-section rich-section-four parallax-section2">
              <div className="rich-section__image">
                <img
                  src={RichImg3}
                  alt="мойка высокого давления Bort"
                  className="rich-section__img parallax-object3"
                />
                <h4 className="rich-section__subtitle">
                  Корпус мойки выполнен из качественного пластика
                </h4>
              </div>
              <div className="rich-section__image">
                <img
                  src={RichImg4}
                  alt="мойка высокого давления Bort"
                  className="rich-section__img parallax-object3"
                />
                <h4 className="rich-section__subtitle">
                  Корпус мойки выполнен из качественного пластика
                </h4>
              </div>
            </div>
            <div className="rich-section rich-section-five rich-section-last parallax-section3">
              <img
                src={RichImg5}
                alt="мойка высокого давления Bort"
                className="rich-section__five__img parallax-object4"
              />
            </div>
          </div>
          <div className="fales-wrapper">
            <div className="fales-sticky">
              <div className="fales-board">
                <h4 className="fales-board__title">Прикрепленные файлы</h4>
                <div className="fales-board__pdf">
                  <img
                    src={FilesIcon}
                    alt="pdf icon"
                    className="fales-board__icon"
                  />
                  <div className="fales-board__download">
                    <a
                      className="fales-board__link"
                      href="rich_image/bort-pdf.pdf"
                      download
                    >Инструкция</a
                    >
                    <span className="fales-board__kb">1,581 Kb</span>
                  </div>
                </div>
                <div className="fales-board__pdf">
                  <img
                    src={FilesIcon}
                    alt="pdf icon"
                    className="fales-board__icon"
                  />
                  <div className="fales-board__download">
                    <a
                      className="fales-board__link"
                      href="rich_image/bort-pdf.pdf"
                      download
                    >Инструкция</a
                    >
                    <span className="fales-board__kb">1,581 Kb</span>
                  </div>
                </div>
              </div>
              <div className="support">
                <p className="support-info">
                  По всем вопросам эсплуатации изделия вы можете обратиться к
                  нашим специалистам по телефону:
                </p>
                <a
                  href="tel:74997001034"
                  target="_blank"
                  className="support-phone bort-support-phone">+7<span className="support-phone-code bort-support-phone-code">(499)</span>700-10-34</a>
                <div className="support-watch">
                  <span>Понедельник — Пятница:</span>
                  <span>10:00 — 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <section id="specification" className="specification">
          <ProductCardSectionTitle classProductCardSectionTitleProps='specification' titleProductCardSectionTitleProps='Характеристики' />
          <dl className="specification-list">
            {sortArrayProductCardSpecificationListItems}
          </dl>
        </section>
        <section id="buy" className="buy">
          <ProductCardSectionTitle classProductCardSectionTitleProps='buy' titleProductCardSectionTitleProps='Где купить?' />
          <div className="buy-block">
            {sortBuyBlockItems}
          </div>
        </section>
        <section id="set" className="set">
          <ProductCardSectionTitle classProductCardSectionTitleProps='set' titleProductCardSectionTitleProps='Комплектация' />
          <dl className="set-list">
            <ProductCardSetListItem nameProductCardSetListIteProps='Пистолет-распылитель:' valueProductCardSetListIteProps='1'/>
            <ProductCardSetListItem nameProductCardSetListIteProps='Напорный шланг:' valueProductCardSetListIteProps='1' />
            <ProductCardSetListItem nameProductCardSetListIteProps='Фильтр:' valueProductCardSetListIteProps='1' />
          </dl>
        </section>
      </div>
      <section id="related" className="related">
        <div className="grid-container">
          <ProductCardSectionTitle classProductCardSectionTitleProps='related' titleProductCardSectionTitleProps='Сопутствующие товары' />
          <MainSlider classMainSliderProps='related-slider' arrayMainSliderCarouselItemProps={[
            ['related', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
            ['related', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
            ['related', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
            ['related', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N'],
            ['related', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
            ['related', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
            ['related', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
            ['related', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N']
          ]} />
        </div>
        <div className="related-slider-navigation"></div>
      </section>
    </>
  )
}

export default ProductCard