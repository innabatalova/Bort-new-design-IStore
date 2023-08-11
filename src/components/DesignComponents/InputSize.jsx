import React from 'react'

const InputSize = ({ classInputSizeSpanProps, titleInputSizeProps, classInputSizeInputProps, typeInputSizeProps, nameInputSizeProps, disabledInputSizeProps, placeholderInputSizeProps }) => {
  return (
    <>
      <span className={classInputSizeSpanProps}>{titleInputSizeProps}</span>
      <input className={classInputSizeInputProps} type={typeInputSizeProps} name={nameInputSizeProps}
      disabled={disabledInputSizeProps} placeholder={placeholderInputSizeProps} />
    </>
  )
}

export default InputSize