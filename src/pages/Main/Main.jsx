import React from 'react'
import { useNavigate } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'

import SliderNavigationPrevNext from '../../components/SliderNavigationPrevNext/SliderNavigationPrevNext'
import CarouselItemMain from '../../components/CarouselItemMain/CarouselItemMain'
import TextParagraph from '../../components/TextParagraph/TextParagraph'
import Button from '../../components/DesignComponents/Button'
import MainSlider from '../../components/MainSlider/MainSlider'

import MainPrev from '../../static/image/main-prev.svg'
import MainNext from '../../static/image/main-next.svg'

import NoveltyImg1 from '../../static/image/compressor.jpg'
import NoveltyImg2 from '../../static/image/tools.jpg'
import NoveltyImg3 from '../../static/image/grinder.jpg'
import NoveltyImg4 from '../../static/image/milling.jpg'

const Main = () => {
  const options = {
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navContainer: ".main-slider-navigation",
    dotsEach: true,
    navText: [
      `<img src=${MainPrev}>`,
      `<img src=${MainNext}>`
    ],
  }

  const CarouselItemMainItems = []
  for (let i = 0; i < 6; i++) {
    CarouselItemMainItems.push([i])
  }

  const sortCarouselItemMainItems = CarouselItemMainItems.map((index) =>
    <CarouselItemMain key={index} classCarouselItemMainProps='main-slider-item'
      brandCarouselItemMainProps='Bort '
      modelCarouselItemMainProps='BSS-36'
      modelCarouselItemMainProps2=' Duo'
      descriptionCarouselItemMainProps='Пароочиститель высокой мощности'
      infoCarouselItemMainProps='Ручной бытовой прибор, применение которому найдется в любом
          частном доме и квартире. С его помощью эффективность уборки
          увеличивается в несколько раз.'/>
  )

  const navigate = useNavigate()
  const onBeDealer = () => { navigate('/be-dealer') }


  return (
    <>
      <main className="main">
        <OwlCarousel {...options} className="main-slider">
          {sortCarouselItemMainItems}
        </OwlCarousel>
        <div className="main-slider-navigation"></div>
        <SliderNavigationPrevNext arrowSliderNavigationPrevNextProps='prev' />
        <SliderNavigationPrevNext arrowSliderNavigationPrevNextProps='next' />
      </main>
      <section className="present">
        <div className="grid-container">
          <div className="present-wrapper">
            <div className="present-info">
              <h3 className="present-title">
                <span className="present-name">
                  Международная группа компаний «Bort Global»
                </span>
                – один из успешных игроков российского рынка электроинструмента,
                который один из немногих удачно реализует свою продукцию под
                торговой маркой Bort в Европе, странах ближнего и дальнего
                зарубежья, городах России.
              </h3>
              <TextParagraph classTextParagraphProps='present-text'
                textTextParagraphProps='Представительства компании находятся в нескольких странах: Москва
                - Россия, Германия и Гонконг. Крупный и основной склад группы
                компаний находится в столице Латвии – Риге. История холдинга
                уходит своими корнями в далекий 1996 год.'/>
              <TextParagraph classTextParagraphProps='present-guarantee'
                textTextParagraphProps='На каждый инструмент ТМ Bort распространяется стандартная
                  гарантия – 2 года и расширенная гарантия - до 5 лет.'/>
              <Button classDesignButtonProps='black' classSizeButtonProps='50'
                classButtonProps='present__button' titleButtonProps='История BORT' />
            </div>
            <div className="present-map"></div>
          </div>
        </div>
      </section>
      <section className="novelty">
        <div className="grid-container">
          <h2 className="novelty-title">Новинки<span className="novelty-title-name"> BORT</span></h2>
          <TextParagraph classTextParagraphProps='novelty-info'
            textTextParagraphProps='Постоянно улучшается качество моделей и их эргономичность. Инженеры
            офиса Bort Global в Германии разрабатывают и совершенствуют
            технические показатели каждой группы товаров, испытывают модель на
            стендах при максимальной нагрузке, а специалисты нашего головного
            офиса в Гонконге, заботятся о 100% проверке заказов, что
            свидетельствует о качестве сервиса.'/>
          <MainSlider classMainSliderProps='novelty-slider' navigationMainSliderProps='.novelty-slider-navigation'
            arrayMainSliderCarouselItemProps={[
              ['novelty', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
              ['novelty', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
              ['novelty', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
              ['novelty', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N'],
              ['novelty', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
              ['novelty', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
              ['novelty', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
              ['novelty', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N']
            ]} />
        </div>
        <div className="novelty-slider-navigation"></div>
      </section>
      <div className="novelty-video">
        <iframe
          src="https://www.youtube.com/embed/M368JLuWwpA?rel=0&autoplay=1&mute=1&controls=0&disablekb=0&loop=1&playlist=M368JLuWwpA&modestbranding=0"
          title="YouTube video player" allow="autoplay" allowFullScreen></iframe>
      </div>
      <div className="section-wrapper">
        <section className="popular">
          <div className="grid-container">
            <h2 className="popular-title">Популярные товары<span className="popular-title-name"> BORT</span></h2>
            <TextParagraph classTextParagraphProps='popular-info'
              textTextParagraphProps='На предприятиях внедрена система ISO 9001. В новые разработки и
              усовершенствование существующих ассортиментных групп постоянно
              вкладываются средства. Компания старается предоставлять своим
              клиентам необходимый товар с качественными характеристиками, по
              доступной цене и организовывать оптимальный сервис. В нашем
              понимании, сервис – это не только гибкая система скидок, логистика,
              но и качественное гарантийное и постгарантийное обслуживание.'/>
            <MainSlider classMainSliderProps='popular-slider' navigationMainSliderProps='.popular-slider-navigation'
              arrayMainSliderCarouselItemProps={[
                ['popular', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
                ['popular', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
                ['popular', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
                ['popular', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N'],
                ['popular', NoveltyImg3, 'МАШИНА ШЛИФОВАЛЬНАЯ УГЛОВАЯ АККУМУЛЯТОРНАЯ BWS-18LI-125'],
                ['popular', NoveltyImg2, 'НАБОР РУЧНОГО ИНСТРУМЕНТА BTK-82'],
                ['popular', NoveltyImg1, 'КОМПРЕССОР АВТОМОБИЛЬНЫЙ BLK-250D-LI'],
                ['popular', NoveltyImg4, 'ФРЕЗЕР ЭЛЕКТРИЧЕСКИЙ BOF-1080N']
              ]} />
          </div>
          <div className="popular-slider-navigation"></div>
        </section>
        <section className="story">
          <div className="grid-container">
            <div className="story-wrapper">
              <div className="story-img"></div>
              <div className="story-message">
                <h3 className="story-message-title">
                  История холдинга уходит своими корнями в далекий 1996 год.
                </h3>
                <span className="story-message-description">Первоначально компания создавалась под именем SMB Group.</span>
                <TextParagraph classTextParagraphProps='story-message-text'
                  textTextParagraphProps='В первые годы основной деятельностью холдинга была продажа
                  стройматериалов и электроинструментов во многие страны мира. В
                  течение небольшого срока SBM Group, насчитывающая несколько
                  человек по тем временам, разрастается до успешной компании на
                  рынке электроинструментов.'/>
                <TextParagraph classTextParagraphProps='story-message-text'
                  textTextParagraphProps='Торговая марка Bort появилась на рынке электроинструментов
                  России в 2001 году. Как известно, это время характеризуется
                  очень активным ростом рынка электроинструмента, что благополучно
                  сказывается на развитии широкого ассортимента компании. Начинают
                  появляться разные модификации инструментов: дрели, перфораторы,
                  пилы, лобзики, углошлифовальные машины, сварочные аппараты.'/>
                <div className="story__button__wrapper">
                  <Button clickDesignButtonProps={onBeDealer} classDesignButtonProps='black' classSizeButtonProps='50'
                    classButtonProps='story__button be-dealer-button-link' titleButtonProps='Стать дилером' />
                  <Button classDesignButtonProps='orange' classSizeButtonProps='50'
                    classButtonProps='story__button' titleButtonProps='Оптовый портал' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Main