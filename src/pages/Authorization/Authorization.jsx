import React from 'react'
import { useNavigate } from 'react-router-dom'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import FormField from '../../components/PagesComp/FormField/FormField'
import Button from '../../components/DesignComponents/Button'

const Authorization = () => {
    const breadcrumbListItemProps = [
        ['/main', 'onelevel-breadcrumb-nav', 'Главная'],
        ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Авторизация']
    ]

    const navigate = useNavigate()
    const onRegistration = () => { navigate('/registration') }

    return (
        <main className="authorization">
            <div className="grid-container">
                <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
                <h2 className="authorization-title">Авторизация</h2>
                <div className="bort-modal authorization-modal">
                    <form action="#" className="bort-modal-form authorization-form">
                        <FormField titleFormFieldProps='E-mail' typeFormFieldProps='email'
                            nameFormFieldProps='Email' classFormFieldProps='invalid authorization-form-contacts' />
                        <FormField titleFormFieldProps='Пароль' typeFormFieldProps='text'
                            nameFormFieldProps='name' classFormFieldProps='authorization-form-contacts' />
                        <div className="authorization-form-checkbox">
                            <input type="checkbox" className="bort-checkbox" id="bcheck" />
                            <label htmlFor="bcheck" className="bort-checkbox-label">Запомнить меня</label>
                            <a target="_blank" className="authorization-form-link">Забыли пароль?</a>
                        </div>
                        <Button classDesignButtonProps='orange' classSizeButtonProps='45'
                            classButtonProps='bort-modal-button authorization-form-button' titleButtonProps='Войти' />
                        <div>
                            <a onClick={onRegistration} target="_blank" className="authorization-form-newlink">Создать новую учетную запись</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Authorization