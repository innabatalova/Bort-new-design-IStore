import React from 'react'

import Button from './Button'
import FooterListingItem from './FooterListingItem'
import CarouselItemCard from './CarouselItemCard'
import InputSize from './InputSize'
import MenuItemDrop from './MenuItemDrop'
import FeedBackForm from './FeedBackForm'

const Design = () => {
  return(
    <div className="grid-container">
      <div className="buttons-wrapper">
        <div className="buttons__block">
          <Button classDesignButtonProps='black' classSizeButtonProps='35'
            classButtonProps='bort__button' titleButtonProps='Button name'/>
          <Button classDesignButtonProps='white' classSizeButtonProps='35'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='orange' classSizeButtonProps='35'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='disabled' classSizeButtonProps='35'
            classButtonProps='bort__button' titleButtonProps='Button name' />
        </div>
        <div className="buttons__block">
          <Button classDesignButtonProps='black' classSizeButtonProps='45'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='white' classSizeButtonProps='45'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='orange' classSizeButtonProps='45'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='disabled' classSizeButtonProps='45'
            classButtonProps='bort__button' titleButtonProps='Button name' />
        </div>
        <div className="buttons__block">
          <Button classDesignButtonProps='black' classSizeButtonProps='50'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='white' classSizeButtonProps='50'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='orange' classSizeButtonProps='50'
            classButtonProps='bort__button' titleButtonProps='Button name' />
          <Button classDesignButtonProps='disabled' classSizeButtonProps='50'
            classButtonProps='bort__button' titleButtonProps='Button name' />
        </div>
      </div>

      <div className="form-wrapper">
        <FeedBackForm/>

        <div className="bort__list__wrapper">
          <ul>
            <li className="bort-listing-title">каталог товаров</li>
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Инструменты' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Измельчители' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Клининг' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Автотовары' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Бытовая техника' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Товары для сада' />
            <FooterListingItem classFooterListingItemProps=''
              hrefFooterListingItemProps='#' titleFooterListingItemProps='Ручные инструменты' />
          </ul>
        </div>

        <div className="item__news__wrapper">
          <CarouselItemCard dateCarouselItemCardProps='05/11/2020' 
          titleCarouselItemCardProps='Сам себе клиннер! Проводим профессиональную очистку помещения при помощи строительного пылесоса bort.'
            infoCarouselItemCardProps='Вы знаете, что для того, чтобы полностью устранить из помещения
              все следы ремонта, не навредив при этом своему здоровью, нужно
              проводить профессиональную очистку?' />
        </div>


        <div className="checkbox-wrapper">
          <input type="checkbox" className="bort-checkbox" id="bcheck" />
          <label for="bcheck" className="bort-checkbox-label">Default</label>
          <input
            type="checkbox"
            className="bort-checkbox-disabled"
            id="bcheckdis"
          />
          <label for="bcheckdis" className="bort-checkbox-disabled-label">Disabled</label>
        </div>

        <div className="select-wrapper">
          <input type="radio" className="bort-select" id="bselect" />
          <label for="bselect" className="bort-select-label">Default</label>
          <input type="radio" className="bort-select-disabled" id="bselectdis" />
          <label for="bselectdis" className="bort-select-disabled-label">Disabled</label>
        </div>

      </div>

      <div className="input__form">

        <div className="input-wrapper">
          <InputSize classInputSizeSpanProps='bort-input-title' titleInputSizeProps='Заголовок' 
          classInputSizeInputProps='bort-input45' 
          typeInputSizeProps='text' placeholderInputSizeProps='Button name'/>

          <InputSize classInputSizeSpanProps='bort-input-title-disabled' titleInputSizeProps='Заголовок'
            classInputSizeInputProps='bort-input45-disabled' disabledInputSizeProps='disabled'
            typeInputSizeProps='text' placeholderInputSizeProps='Button name' />

          <InputSize classInputSizeSpanProps='bort-input-title' titleInputSizeProps='Заголовок'
            classInputSizeInputProps='bort-input50'
            typeInputSizeProps='text' placeholderInputSizeProps='Button name' />

          <InputSize classInputSizeSpanProps='bort-input-title-disabled' titleInputSizeProps='Заголовок'
            classInputSizeInputProps='bort-input50-disabled' disabledInputSizeProps='disabled'
            typeInputSizeProps='text' placeholderInputSizeProps='Button name' />
        </div>

        <div className="bort__menu">
          <MenuItemDrop titleMenuItemDropProps='Что такое дропшиппинг?'/>
          <MenuItemDrop titleMenuItemDropProps='Как это работает' />
          <MenuItemDrop titleMenuItemDropProps='Требования к сайтам' />
          <MenuItemDrop titleMenuItemDropProps='Способы доставки' />
          <MenuItemDrop titleMenuItemDropProps='API' />
          <MenuItemDrop titleMenuItemDropProps='Документация API v.1.02' />
          <MenuItemDrop titleMenuItemDropProps='Подключить дропшиппинг' />
          <MenuItemDrop titleMenuItemDropProps='Документы' />
        </div>

      </div>

      <a href="tel:74997001034" target="_blank" className="bort-support-phone"
      >+7 <span className="bort-support-phone-code">(499)</span> 700-10-34</a
      >
    </div>
  )
}

export default Design