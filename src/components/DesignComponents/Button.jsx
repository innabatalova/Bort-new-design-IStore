import React from 'react'

const Button = ({ classDesignButtonProps, classSizeButtonProps, classButtonProps, titleButtonProps}) => {
  return (
      <button class={`bort-button-` + classDesignButtonProps + classSizeButtonProps + ` ` + classButtonProps}>
        {titleButtonProps}
      </button>
  )
}

export default Button