import React from 'react'
import OwlCarousel from 'react-owl-carousel'

import MainSliderCarouselItem from './MainSliderCarouselItem'

const MainSlider = ({ classMainSliderProps, navigationMainSliderProps, arrayMainSliderCarouselItemProps }) => {
  const options = {
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: false,
    navContainer: navigationMainSliderProps,
    navText: [
      "<img src='http://localhost:3000/img/novelty-slider-prev.svg'>",
      "<img src='http://localhost:3000/img/novelty-slider-next.svg'>"
    ],
    responsive: {
      360: {
        margin: -70,
      },

      400: {
        margin: -160,
      },

      530: {
        items: 2,
        margin: 0,
      },

      680: {
        items: 3,
        margin: 0,
      },

      1150: {
        items: 4,
        margin: 0,
      },
    },
  }

  const sortArrayMainSliderCarouselItemProps = arrayMainSliderCarouselItemProps.map((item, index) =>
    <MainSliderCarouselItem key={index} classMainSliderCarouselItemProps={item[0]} srcMainSliderCarouselItemProps={item[1]}
      titleMainSliderCarouselItemProps={item[2]} />
  );

  return (
    <OwlCarousel {...options} className={classMainSliderProps}>
      {sortArrayMainSliderCarouselItemProps}
    </OwlCarousel>
  )
}

export default MainSlider