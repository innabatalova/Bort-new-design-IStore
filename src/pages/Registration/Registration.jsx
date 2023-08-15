import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Input from '../../components/DesignComponents/Input'
import Button from '../../components/DesignComponents/Button'

const Registration = () => {
    const breadcrumbListItemProps = [
    ['index', 'onelevel-breadcrumb-nav', 'Главная'],
      ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Регистрация']
  ]

  return (
    <main className="registration">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="registration-title">Регистрация</h2>
        <div className="bort-modal registration-modal">
          <form action="#" className="bort-modal-form registration-form">
            <Input classInputSpanProps='bort-modal-text registration-form-text' titleInputProps='E-mail'
              typeInputProps='email' nameInputProps='Email'
              classInputFieldProps='bort-modal-contacts invalid registration-form-contacts' minlengthInputProps='2'
            />
            <Input classInputSpanProps='bort-modal-text registration-form-text' titleInputProps='Пароль'
              typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts registration-form-contacts' minlengthInputProps='2'
            />
            <Input classInputSpanProps='bort-modal-text registration-form-text' titleInputProps='Повторите пароль'
              typeInputProps='text' nameInputProps='name'
              classInputFieldProps='bort-modal-contacts registration-form-contacts' minlengthInputProps='2'
            />
            <span className="bort-modal-text registration-form-text">Антибот</span>
            <div className="registration-form-antibot"></div>
            <Button classDesignButtonProps='orange' classSizeButtonProps='45' 
              classButtonProps='bort-modal-button registration-form-button' titleButtonProps='Регистрация'/>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Registration