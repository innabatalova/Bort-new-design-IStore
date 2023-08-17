import React from 'react'

import MainSliderCarouselItem from './MainSliderCarouselItem'

const MainSlider = ({ classMainSliderProps, arrayMainSliderCarouselItemProps } ) => {
  const sortArrayMainSliderCarouselItemProps = arrayMainSliderCarouselItemProps.map((item, index) =>
    <MainSliderCarouselItem key={index} classMainSliderCarouselItemProps={item[0]} srcMainSliderCarouselItemProps={item[1]}
      titleMainSliderCarouselItemProps={item[2]} />
  );

return(
  <div className={`owl-carousel owl-theme ` + classMainSliderProps}>
    {sortArrayMainSliderCarouselItemProps}
  </div>
)
}

export default MainSlider