import React from 'react'

const InputSize = ({ classInputSizeSpanProps, titleInputSizeProps, classInputSizeInputProps, typeInputSizeProps, disabledInputSizeProps, placeholderInputSizeProps }) => {
  return (
    <>
      <span class={classInputSizeSpanProps}>{titleInputSizeProps}</span>
      <input class={classInputSizeInputProps} type={typeInputSizeProps} disabled={disabledInputSizeProps} placeholder={placeholderInputSizeProps} />
    </>
  )
}

export default InputSize