import React from 'react'

import CategoriesCard from '../../CategoriesCard/CategoriesCard'

import CardOne from '../../../static/categories_image/card-one.jpg'
import CardTwo from '../../../static/categories_image/card-two.jpg'
import CardThree from '../../../static/categories_image/card-three.jpg'
import CardFour from '../../../static/categories_image/card-four.jpg'
import CardFive from '../../../static/categories_image/card-five.jpg'
import CardSix from '../../../static/categories_image/card-six.jpg'
import CardSeven from '../../../static/categories_image/card-seven.jpg'
import CardEight from '../../../static/categories_image/card-eight.jpg'

const CategoriesList = () => {
  return (
    <section className="categories">
      <div className="grid-container">
        <div className="card-wrapper">
          <CategoriesCard srcCategoriesCardProps={CardOne} titleCategoriesCardProps='Аккумуляторные дрели/шуруповерты' />
          <CategoriesCard classCategoriesCardProps='card_mobile' srcCategoriesCardProps={CardTwo}
            titleCategoriesCardProps='Аккумуляторные перфораторы' />
          <CategoriesCard srcCategoriesCardProps={CardThree} titleCategoriesCardProps='Аккумуляторные гайковерты' />
          <CategoriesCard classCategoriesCardProps='card_end' srcCategoriesCardProps={CardFour}
            titleCategoriesCardProps='Аккумуляторные реноваторы' />
          <CategoriesCard srcCategoriesCardProps={CardFive} titleCategoriesCardProps='Аккумуляторные лобзики' />
          <CategoriesCard classCategoriesCardProps='card_mobile' srcCategoriesCardProps={CardSix}
            titleCategoriesCardProps='Аккумуляторные сабельные пилы' />
          <CategoriesCard srcCategoriesCardProps={CardSeven} titleCategoriesCardProps='Аккумуляторные шлифовальные машины' />
          <CategoriesCard classCategoriesCardProps='card_end' srcCategoriesCardProps={CardEight}
            titleCategoriesCardProps='Аккумуляторы для инструмента' />
        </div>
      </div>
    </section>
  )
}

export default CategoriesList