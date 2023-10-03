import React, { useState } from 'react'

import FeedbackArrow from '../../static/image/feedback-arrow.svg'

const FeedbackSliderItem = ({ questionFeedbackSliderItemProps, answerFeedbackSliderItemProps, classFeedbackSliderItemProps, answerLinkFeedbackSliderItemProps } ) => {
  const [stateFeedbackSliderItem, setStateFeedbackSliderItem] = useState(classFeedbackSliderItemProps)
  const openFeedbackSliderItem = () => {
    stateFeedbackSliderItem == '' ? setStateFeedbackSliderItem('_visible') : setStateFeedbackSliderItem('')
  }

  return (
    <div className="feedback-slider__item" onClick={openFeedbackSliderItem}>
      <div className="feedback-slider__question">
        <span>{questionFeedbackSliderItemProps}</span>
        <img className={`feedback-slider__question__img feedback-slider__question__img` + stateFeedbackSliderItem} src={FeedbackArrow} />
      </div>
      <div className={`feedback-slider__answer feedback-slider__answer` + stateFeedbackSliderItem}>
        <span>{answerFeedbackSliderItemProps}
          <a className="feedback-slider__answer__link">{answerLinkFeedbackSliderItemProps}</a>
        </span>
      </div>
    </div>
  )
}

export default FeedbackSliderItem