import React from 'react'

import Input from '../DesignComponents/Input'
import Button from '../DesignComponents/Button'

const ModalOverlay = () => {
    return (
        <div className="modal-overlay">
            <div className="bort-modal modal-overlay-form-modal">
                <h3 className="bort-modal-title modal-overlay-title">написать нам</h3>
                <form action="#" className="bort-modal-form modal-overlay-modal-form">
                    <Input classInputSpanProps='bort-modal-text' titleInputProps='Ваше ФИО' 
                        typeInputProps='text' nameInputProps='name' 
                        classInputFieldProps='bort-modal-contacts modal-overlay-form-modal-contacts'
                        minlengthInputProps='2' />
                    <Input classInputSpanProps='bort-modal-text' titleInputProps='Контактный телефон'
                        typeInputProps='tel' nameInputProps='phone'
                        classInputFieldProps='bort-phone bort-modal-contacts invalid modal-overlay-form-modal-contacts'
                        minlengthInputProps='18' />
                    <Input classInputSpanProps='bort-modal-text' titleInputProps='E-mail'
                        typeInputProps='email' nameInputProps='Email'
                        classInputFieldProps='bort-modal-contacts invalid modal-overlay-form-modal-contacts'
                        minlengthInputProps='2' />
                    <div>
                        <span className="bort-modal-text">Ваше сообщение</span>
                        <textarea name="message" cols="30" rows="10" className="bort-modal-message modal-overlay-form-modal-contacts modal-overlay-modal-message"></textarea>
                    </div>
                    <Button classDesignButtonProps='orange' classSizeButtonProps='50' 
                        classButtonProps='bort-modal-button modal-overlay-modal-button'
                        titleButtonProps='Отправить'
                    />
                </form>
            </div>
        </div>
    )
}

export default ModalOverlay