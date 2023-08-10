import React from 'react'

const MenuItemDrop = ({ classMenuItemDropProps, titleMenuItemDropProps }) => {
  return (
    <div class={`bort-menu-item ` + classMenuItemDropProps}>
      <span>{titleMenuItemDropProps}</span>
    </div>
  )
}

export default MenuItemDrop