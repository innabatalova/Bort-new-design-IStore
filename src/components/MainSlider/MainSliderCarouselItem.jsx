import React from 'react'

import LinkArrowImg from '../../static/image/card-link-arrow.svg'

const MainSliderCarouselItem = ({ classMainSliderCarouselItemProps, srcMainSliderCarouselItemProps, titleMainSliderCarouselItemProps }) => {
  return (
    <div className="carousel-item">

      <div className={classMainSliderCarouselItemProps + `-card card`}>
        <img src={srcMainSliderCarouselItemProps} alt={titleMainSliderCarouselItemProps} className={classMainSliderCarouselItemProps + `-card-img`} />
        <h3 className={classMainSliderCarouselItemProps + `-card-title`}>
          {titleMainSliderCarouselItemProps}
        </h3>

        <div className={classMainSliderCarouselItemProps + `-card-wrapper-link`}>
          <a onClick={() => window.open("/product-card")} className={classMainSliderCarouselItemProps + `-card-link`}>Где купить?</a>
          <img className={classMainSliderCarouselItemProps + `-card-arrow`} src={LinkArrowImg} alt="card link arrow" />
        </div>
      </div>

    </div>
  )
}

export default MainSliderCarouselItem