import React from 'react'

const Input = ({ classInputProps, classInputSpanProps, titleInputProps,
  typeInputProps, nameInputProps, classInputFieldProps, minlengthInputProps }) => {
  return (
    <div className={classInputProps}>
      <span className={classInputSpanProps}>{titleInputProps}</span>
      <input
        type={typeInputProps}
        name={nameInputProps}
        className={classInputFieldProps}
        required
        minLength={minlengthInputProps}
      />
    </div>
  )
}

export default Input