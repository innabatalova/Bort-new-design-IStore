import React from 'react'

const DropshippingBlock = ({ classTopDropshippingBlockProps, classBottomDropshippingBlockProps, titleDropshippingBlockProps, infoDropshippingBlockProps }) => {
  return(
    <>
      <div
        className={`bort-menu-item dropshipping-menu-item dropshipping-menu-item-` + classTopDropshippingBlockProps}>
        <span>{titleDropshippingBlockProps}</span>
      </div>
      <div className={`dropshipping-info-block dropshipping-info-block-` + classBottomDropshippingBlockProps}>
        {infoDropshippingBlockProps}
      </div>
    </>
  )
}

export default DropshippingBlock