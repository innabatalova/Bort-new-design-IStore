import React from 'react'

import StickyBannerWrap from '../../../static/image/sticky-banner.png'

const StickyBanner = () => {
  return(
    <div className="sticky-banner">
      <div className="sticky-banner__wrap">
        <img src="https://makitarussia.ru/wa-data/public/shop/stickyangle/small_image.png?1614167642" className="sticky-banner__smallimg" />
      </div>
      <a href="https://bort-global.ru/" target='_blank' >
        <img src={StickyBannerWrap} alt="sticky-banner" className="sticky-banner__img" />
      </a>
    </div>
  )
}

export default StickyBanner