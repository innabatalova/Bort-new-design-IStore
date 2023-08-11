import React from 'react'

import Button from '../../DesignComponents/Button'
import Input from '../../DesignComponents/Input'

const DropshippingInfoOpenDrop = () => {
  return (
    <>
      <form action="#" className="bort-modal-form dropshipping-info-modal-form">
        <Input classInputProps='dropshipping-info-modal-item' classInputSpanProps='bort-modal-text dropshipping-info-modal-text'
          titleInputProps='Имя' typeInputProps='text' nameInputProps='name'
          classInputFieldProps='bort-modal-contacts invalid dropshipping-info-modal-contacts' minlengthInputProps='2' />
        <Input classInputProps='dropshipping-info-modal-item' classInputSpanProps='bort-modal-text dropshipping-info-modal-text'
          titleInputProps='E-mail' typeInputProps='email' nameInputProps='Email'
          classInputFieldProps='bort-modal-contacts invalid dropshipping-info-modal-contacts' minlengthInputProps='2' />
        <Input classInputProps='dropshipping-info-modal-item' classInputSpanProps='bort-modal-text dropshipping-info-modal-text'
          titleInputProps='Tелефон' typeInputProps='tel' nameInputProps='phone'
          classInputFieldProps='bort-phone bort-modal-contacts invalid dropshipping-info-modal-contacts' minlengthInputProps='18' />
        <Input classInputProps='dropshipping-info-modal-item' classInputSpanProps='bort-modal-text dropshipping-info-modal-text'
          titleInputProps='ИНН организации (если есть)' typeInputProps='text' nameInputProps='name'
          classInputFieldProps='bort-modal-contacts dropshipping-info-modal-contacts' minlengthInputProps='2' />
        <div className="dropshipping-info-modal-item dropshipping-info-modal-area">
          <span className="bort-modal-text dropshipping-info-modal-text">Комментарий</span>
          <textarea name="message" cols="30" rows="10"
            className="bort-modal-message dropshipping-info-modal-message"
          ></textarea>
        </div>
        <Button classDesignButtonProps='orange' classSizeButtonProps='50'
          classButtonProps='bort-modal-button dropshipping-info-modal-button' titleButtonProps='Отправить' />
      </form>
    </>
  )
}

export default DropshippingInfoOpenDrop