import React from 'react'

import Input from './Input'
import Button from './Button'

const FeedBackForm = () => {
  return (
    <div className="bort-modal">
      <h3 className="bort-modal-title">обратная связь</h3>
      <form action="#" className="bort-modal-form">
        <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО'
          typeInputProps='text' nameInputProps='name' classInputFieldProps='bort-modal-contacts' minlengthInputProps='2' />

        <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
          typeInputProps='tel' nameInputProps='phone' classInputFieldProps='bort-phone bort-modal-contacts invalid' minlengthInputProps='18' />

        <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
          typeInputProps='email' nameInputProps='Email' classInputFieldProps='bort-modal-contacts invalid' minlengthInputProps='2' />

        <div>
          <span className="bort-modal-text">Ваше сообщение</span>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="bort-modal-message"
          ></textarea>
        </div>
        <Button classDesignButtonProps='orange' classSizeButtonProps='50'
          classButtonProps='bort-modal-button' titleButtonProps='Отправить' />
      </form>
    </div>
  )
}

export default FeedBackForm