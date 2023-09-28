import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import NewsPreviewCard from '../../components/NewsPreviewCard/NewsPreviewCard'

import NewsImgOne from '../../static/news-preview_image/news-preview-one.jpg'
import NewsImgTwo from '../../static/news-preview_image/news-preview-two.jpg'
import NewsImgThree from '../../static/news-preview_image/news-preview-three.jpg'
import NewsImgFour from '../../static/news-preview_image/news-preview-four.jpg'
import NewsImgFive from '../../static/news-preview_image/news-preview-five.jpg'
import NewsImgSix from '../../static/news-preview_image/news-preview-six.jpg'
import NewsImgSeven from '../../static/news-preview_image/news-preview-seven.jpg'

const NewsPreview = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Новости']
  ]

  return (
    <main className="news-preview">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <div className="news-preview-wrapper">
          <h2 className="guarantee-title">Новости</h2>
          <span className="media-title-line"></span>
          <div className="news-preview-board">
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgOne} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ИЗМЕЛЬЧИТЕЛИ ПИЩЕВЫХ ОТХОДОВ, ЧТО ЭТО ТАКОЕ? МИРОВОЙ ОПЫТ ИСПОЛЬЗОВАНИЯ'
              textNewsPreviewCardProps='Как влияют измельчители пищевых отходов на экологию и экономику?
                Пример использования измельчителя Bort Мировой опыт
                использования измельчителей пищевых отходов Проблема утилизации
                пищевых отходов...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgTwo} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Тест аккумуляторной ушм BORT BWS-18Li-125 Все тесты сделаны в
                развлекательных целях, не стоит это повторять Обзор
                аккумуляторной УШМ Bort BWS-18Li-125 Можно ли пилить ушм под
                водой? Данный...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgThree} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Автомобильный гайковерт – это инструмент для закручивания и
                раскручивания преимущественно колесных гаек или болтов.
                Незаменим для автолюбителей при самостоятельной замене колес.
                Гайковерт BSR-12 –...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgFour} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ИЗМЕЛЬЧИТЕЛИ ПИЩЕВЫХ ОТХОДОВ, ЧТО ЭТО ТАКОЕ? МИРОВОЙ ОПЫТ ИСПОЛЬЗОВАНИЯ'
              textNewsPreviewCardProps='Как влияют измельчители пищевых отходов на экологию и экономику?
                Пример использования измельчителя Bort Мировой опыт
                использования измельчителей пищевых отходов Проблема утилизации
                пищевых отходов...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgFive} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Тест аккумуляторной ушм BORT BWS-18Li-125 Все тесты сделаны в
                развлекательных целях, не стоит это повторять Обзор
                аккумуляторной УШМ Bort BWS-18Li-125 Можно ли пилить ушм под
                водой? Данный...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgSix} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПЕРВЫЙ БЫТОВОЙ ДИСПОУЗЕР С АВТОМАТИЧЕСКОЙ ПОДАЧЕЙ ВОДЫ И ВОЗМОЖНОСТЬЮ УПРАВЛЕНИЯ ГОЛОСОМ'
              textNewsPreviewCardProps='Автомобильный гайковерт – это инструмент для закручивания и
                раскручивания преимущественно колесных гаек или болтов.
                Незаменим для автолюбителей при самостоятельной замене колес.
                Гайковерт BSR-12 –...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgSeven} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Тест аккумуляторной ушм BORT BWS-18Li-125 Все тесты сделаны в
                развлекательных целях, не стоит это повторять Обзор
                аккумуляторной УШМ Bort BWS-18Li-125 Можно ли пилить ушм под
                водой? Данный...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgTwo} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Тест аккумуляторной ушм BORT BWS-18Li-125 Все тесты сделаны в
                развлекательных целях, не стоит это повторять Обзор
                аккумуляторной УШМ Bort BWS-18Li-125 Можно ли пилить ушм под
                водой? Данный...'/>
            <NewsPreviewCard srcNewsPreviewCardProps={NewsImgThree} dateNewsPreviewCardProps='17/04/2020'
              titleNewsPreviewCardProps='ПИЛИТ ЛИ БОЛГАРКА ПОД ВОДОЙ?'
              textNewsPreviewCardProps='Автомобильный гайковерт – это инструмент для закручивания и
                раскручивания преимущественно колесных гаек или болтов.
                Незаменим для автолюбителей при самостоятельной замене колес.
                Гайковерт BSR-12 –...'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewsPreview