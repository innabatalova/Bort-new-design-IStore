import React from 'react'

const DropshippingBlock = ({ classTopDropshippingBlockProps, classBottomDropshippingBlockProps, titleDropshippingBlockProps, infoDropshippingBlockProps }) => {
  return(
    <>
      <div
        class={`bort-menu-item dropshipping-menu-item dropshipping-menu-item-` + classTopDropshippingBlockProps}>
        <span>{titleDropshippingBlockProps}</span>
      </div>
      <div class={`dropshipping-info-block dropshipping-info-block-` + classBottomDropshippingBlockProps}>
        {infoDropshippingBlockProps}
      </div>
    </>
  )
}

export default DropshippingBlock