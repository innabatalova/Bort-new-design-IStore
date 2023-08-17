import React from 'react'

import SliderNavigationPrevNextItem from './SliderNavigationPrevNextItem'

const SliderNavigationPrevNext = ({ arrowSliderNavigationPrevNextProps }) => {
  const arraySliderNavigationPrevNext = new Array()
  arraySliderNavigationPrevNext.length = 9
  const sortArraySliderNavigationPrevNext = []
  for (let i = 0; i < arraySliderNavigationPrevNext.length; i++){
    sortArraySliderNavigationPrevNext.push(
      <SliderNavigationPrevNextItem key={[i]} classSliderNavigationPrevNextItemProps={arrowSliderNavigationPrevNextProps} />
    ) 
  }

  return(
    <div className={`main-chest-` + arrowSliderNavigationPrevNextProps}>
      {sortArraySliderNavigationPrevNext}
    </div>
  )
}

export default SliderNavigationPrevNext