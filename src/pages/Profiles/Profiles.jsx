import React, { useState } from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import FormField from '../../components/PagesComp/FormField/FormField'
import ProfilesGroupComp from '../../components/ProfilesGroupComp/ProfilesGroupComp'

const Profiles = () => {
  const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
    ['/', 'onelevel-breadcrumb-nav', 'Личный кабинет'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Учетная запись']
  ]

  const [navlineItemActive, setNavlineItemActive] = useState('active-tab-1')

  const profilesGroupCompItemProps = [
    ['', 'Группа', 'Статус'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл'],
    ['profiles-group__comp__item_data', 'test', 'Вкл']
  ]

  const sortProfilesGroupComp = profilesGroupCompItemProps.map(item =>
    <ProfilesGroupComp classProfilesGroupCompProps={item[0]} groupProfilesGroupCompProps={item[1]} statusProfilesGroupCompProps={item[2]} />
    )

  return (
    <main className="profiles">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="authorization-title">Учетная запись</h2>
      </div>

      <div className="grid-container">
        <ul className="navline profiles-navline">
          <li onClick={() => setNavlineItemActive('active-tab-1')} className={`navline__item profiles-navline__item ` + (navlineItemActive === 'active-tab-1' ? 'navline__item__active' : '')}>
            <span>Общее</span>
            <span className="navline__item__arrow"></span>
          </li>
          <li onClick={() => setNavlineItemActive('active-tab-2')} className={`navline__item profiles-navline__item ` + (navlineItemActive === 'active-tab-2' ? 'navline__item__active' : '')}>
            <span>Группы пользователей</span>
            <span className="navline__item__arrow"></span>
          </li>
        </ul>
      </div>
      <span className="navline-under"></span>

      <div className="grid-container">
        <div className='profiles-content'>
          <div className={`profiles-user ` + (navlineItemActive === 'active-tab-1' ? 'profiles-user_active' : '')}>
            <div className="profiles-user__block">
              <span className="profiles-user__subtitle">Информация об учетной записи пользователя</span>
              <div>
                <FormField titleFormFieldProps='E-mail' typeFormFieldProps='email'
                  nameFormFieldProps='Email' classFormFieldProps='invalid profiles-user__field' />
              </div>
              <div>
                <FormField titleFormFieldProps='Пароль' typeFormFieldProps='text'
                  nameFormFieldProps='name' classFormFieldProps='profiles-user__field' />
              </div>
              <div>
                <FormField titleFormFieldProps='Подтверждение пароля' typeFormFieldProps='text'
                  nameFormFieldProps='name' classFormFieldProps='profiles-user__field' />
              </div>
            </div>
            <div className="profiles-user__block">
              <span className="profiles-user__subtitle">Контактная информация</span>
              <div>
                <FormField titleFormFieldProps='Телефон' typeFormFieldProps='phone'
                  nameFormFieldProps='Phone' classFormFieldProps='profiles-user__field' />
              </div>
              <p className="profiles-user__text">Каждый пользователь может иметь несколько профилей.</p>
              <p className="profiles-user__text">Например, один профиль для заказов на дом, второй для заказов на работу, третий — для друзей и родных.</p>
            </div>
            <div className="profiles-user__block">
              <span className="profiles-user__titleprof">Выберите профиль</span>
              <div className="profiles-user__wrapprof">
                <a className="profiles-user__linkprof">Основной</a>
                <a className="profiles-user__overprof">Новый тестовый</a>
                <span>или</span>
                <a className="profiles-user__linkprof">Добавить новый адрес доставки</a>
              </div>
              <div>
                <FormField titleFormFieldProps='Имя профиля' typeFormFieldProps='phone'
                  nameFormFieldProps='Phone' classFormFieldProps='profiles-user__field' valueFormFieldProps='Основной' />
              </div>
            </div>
            <div className="profiles-user__block">
              <span className="profiles-user__subtitle">Адрес доставки</span>
              <div>
                <FormField titleFormFieldProps='Имя' typeFormFieldProps='text'
                  nameFormFieldProps='name' classFormFieldProps='profiles-user__field' />
              </div>
              <div>
                <FormField titleFormFieldProps='Фамилия' typeFormFieldProps='text'
                  nameFormFieldProps='surname' classFormFieldProps='profiles-user__field' />
              </div>
              <div>
                <FormField titleFormFieldProps='Телефон' typeFormFieldProps='phone'
                  nameFormFieldProps='phone' classFormFieldProps='profiles-user__field' />
              </div>
            </div>
          </div>
          <div className={`profiles-group ` + (navlineItemActive === 'active-tab-2' ? 'profiles-group_active' : '')}>
            <div className="profiles-group__wrapper">
              {sortProfilesGroupComp}
            </div>
          </div>
          <div className="profiles-info">
            <span className="profiles-info__title">Детали учетной записи</span>
            <p>На этой странице вы можете изменить данные для авторизации и персональную информацию для её использования при размещении заказов.</p>
            <p>Чтобы повысить уровень безопасности своей учетной записи, рекомендуется избегать паролей, в которых используются:</p>
            <ul className="profiles-info__ul">
              <li>Слова из словарей на любом языке.</li>
              <li>Слова, написанные задом наперед, и абревиатуры.</li>
              <li>Последовательности символов или повторяющиеся символы. Например: 12345678, 222222, abcdefg или соседние буквы на вашей клавиатуре (qwerty).</li>
              <li>Персональную информацию. ваше имя, дата рождения, номер водительских прав, номер паспорта или подобную информацию.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profiles