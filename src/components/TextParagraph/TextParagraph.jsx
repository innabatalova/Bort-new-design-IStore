import React from 'react'

const TextParagraph = ({ classTextParagraphProps, textTextParagraphProps }) => {
  return (
    <p className={classTextParagraphProps}>{textTextParagraphProps}</p>
  )
}

export default TextParagraph