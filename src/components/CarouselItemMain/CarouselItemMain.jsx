import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../DesignComponents/Button'
import MainModel from './MainModel'

const CarouselItemMain = ({ classCarouselItemMainProps, brandCarouselItemMainProps, modelCarouselItemMainProps, modelCarouselItemMainProps2, descriptionCarouselItemMainProps, infoCarouselItemMainProps }) => {
  const navigate = useNavigate()
  const onProductCard = () => { navigate('/product-card') }

  return (
    <div className={`carousel-item ` + classCarouselItemMainProps}>
      <div className="main-wrapper">
        <div className="main-card">
          <div className="main-card-wrapper">
            <div className="main__title__wrapper">
              <h2 className="main__title">
                {brandCarouselItemMainProps}
                <MainModel textMainModelProps={modelCarouselItemMainProps}/>
                {modelCarouselItemMainProps2}
              </h2>
              <span className="main__description">{descriptionCarouselItemMainProps}</span>
            </div>
            <p className="main__info">{infoCarouselItemMainProps}</p>
            <Button clickDesignButtonProps={onProductCard} classDesignButtonProps='orange' classSizeButtonProps='50' 
              classButtonProps='main__button' titleButtonProps='Подробнее о товаре'/>
          </div>
        </div>
        <div className="main-img"></div>
      </div>
    </div>
  )
}

export default CarouselItemMain