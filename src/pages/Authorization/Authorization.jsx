import React from 'react'

import BreadcrumbListItem from '../../components/PagesComp/ListingProduct/BreadcrumbListItem'
import FormField from '../../components/PagesComp/FormField/FormField'

const Authorization = () => {
    const breadcrumbListItemProps = [
        ['index', 'onelevel-breadcrumb-nav', 'Главная'],
        ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Авторизация']
    ]
    const sortBreadcrumbListItemProps = breadcrumbListItemProps.map((item, index) =>
        <BreadcrumbListItem key={index} hrefBreadcrumbListItemProps={item[0]} classBreadcrumbListItemProps={item[1]}
            titleBreadcrumbListItemProps={item[2]} />
    )
    return (
        <main className="authorization">
            <div className="grid-container">
                <nav className="breadcrumb">
                    <ul className="breadcrumb-list onelevel-breadcrumb-list">
                        {sortBreadcrumbListItemProps}
                    </ul>
                </nav>
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
                            <a href="#" target="_blank" className="authorization-form-link">Забыли пароль?</a>
                        </div>
                        <button className="bort-modal-button bort-button-orange45 authorization-form-button">
                            Войти
                        </button>
                        <div>
                            <a href="registration.html" target="_blank" className="authorization-form-newlink">Создать новую учетную запись</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Authorization