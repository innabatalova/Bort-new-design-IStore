import React from 'react'

const Button = ({ classDesignButtonProps, classSizeButtonProps, classButtonProps, titleButtonProps, clickDesignButtonProps }) => {
  return (
    <button onClick={clickDesignButtonProps} className={`bort-button-` + classDesignButtonProps + classSizeButtonProps + ` ` + classButtonProps}>
        {titleButtonProps}
      </button>
  )
}

export default Button