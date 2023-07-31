import React from 'react'

import FooterArrow from '../../static/image/footer-arrow.svg'

const ScrollArrow = () => {
    return (
        <div className="scroll-arrow">
            <img src={FooterArrow} alt="arrow top" className="scroll-img" />
        </div>
    )
}

export default ScrollArrow