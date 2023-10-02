import React, { useContext } from 'react'
import { ContextWindowScroll } from '../../context/contextWindowScroll'

import FooterArrow from '../../static/image/footer-arrow.svg'

const ScrollArrow = () => {
    const { windowScrolling } = useContext(ContextWindowScroll)

    return (
        <div onClick={() => window.scrollBy(0, -windowScrolling)} className={`scroll-arrow ` + (windowScrolling > 200 ? 'scroll-arrow_visible' : '')}>
            <img src={FooterArrow} alt="arrow top" className="scroll-img" />
        </div>
    )
}

export default ScrollArrow