import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Button from '../../components/DesignComponents/Button'
import CabinetSertItem from '../../components/CabinetSertItem/CabinetSertItem'
import TextParagraph from '../../components/TextParagraph/TextParagraph'

const Cabinet = () => {
  const breadcrumbListItemProps = [
    ['index', 'onelevel-breadcrumb-nav', 'Главная'],
    ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Личный кабинет']
  ]

  return (
    <main className="cabinet">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="cabinet-title">Личный кабинет</h2>
        <div className="cabinet-wrapper">
          <div className="bort-menu-item cabinet-menu-item cabinet-menu-item-userinfo">
            <span>Информация</span>
          </div>
          <div className="cabinet-info-block cabinet-info-block-userinfo">
            <TextParagraph classTextParagraphProps='cabinet-userinfo'
              textTextParagraphProps='Информация о пользователе'/>
          </div>
          <div
            className="
              bort-menu-item
              cabinet-menu-item cabinet-menu-item-active cabinet-menu-item-sert
            "
          ><span>Зарегистрированные покупки</span>
          </div>
          <div
            className="
              cabinet-info-block
              cabinet-info-block-visible
              cabinet-info-block-sert
            "
          >
            <h3 className="cabinet-info-subtitle">Артикул товара:</h3>
            <form action="#" className="cabinet-info-form">
              <input type="text" className="cabinet-info-input" />
              <Button classDesignButtonProps='orange' classSizeButtonProps='45'
                classButtonProps='cabinet-info-button' titleButtonProps='Добавить' />
            </form>
            <div className="cabinet-sert-wrapper">
              <table>
                <thead>
                  <tr className="cabinet-sert-title">
                    <CabinetSertItem titleCabinetSertItemProps='Артикул' />
                    <CabinetSertItem titleCabinetSertItemProps='Город' />
                    <CabinetSertItem titleCabinetSertItemProps='Дата покупки' />
                    <CabinetSertItem titleCabinetSertItemProps='Магазин' />
                    <CabinetSertItem titleCabinetSertItemProps='Гарантия, лет' />
                    <CabinetSertItem titleCabinetSertItemProps='Расширенная гарантия, лет' />
                    <CabinetSertItem titleCabinetSertItemProps='' />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                  <tr>
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='9746473643' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Санкт-Петербург' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='Мар 28, 2020' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='ОНЛАЙНТРЕЙД.РУ' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='2' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps='5' />
                    <CabinetSertItem classCabinetSertItemProps='cabinet-sert-item' titleCabinetSertItemProps={
                      <a download href="image/сертификат_bort_bss-18-li.pdf" className="cabinet-sert-link">Сертификат</a>
                    } />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bort-menu-item cabinet-menu-item cabinet-menu-item-close">
            <span>Выход</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cabinet