import React from 'react'

import SearchMobileItem from '../SearchMobileItem/SearchMobileItem'
import FooterMobileListingItem from '../FooterMobileListingItem/FooterMobileListingItem'

import YoutubeIcon from '../../../static/image/Youtube.svg'
import VKIcon from '../../../static/image/VK.svg'
import OKIcon from '../../../static/image/OK.svg'
import TwitterIcon from '../../../static/image/Twitter.svg'

const SearchMobile = () => {
  return (
    <div className="searchmobile">
      <span className="searchmobile-shadow"></span>
      <div className="geolocation geolocation_searchmobile">
        <span className="geolocation__title geolocation__title_searchmobile">Ваш город: </span>
        <span className="geolocation__city">Москва</span>
      </div>

      <ul className="searchmobile-wrapper">
        <SearchMobileItem hrefSearchMobileItemProps='listing.html' titleSearchMobileItemProps='инструменты' classSearchMobileItemProps='tool'
          arraySearchMobileItemProps={[
            ['category.html', 'Пилы', 'saws',
            [['product-card.html', 'Лобзики электрические'], ['product-card.html', 'Пилы циркулярные'], ['product-card.html', 'Сабельные пилы', 'searchmobile-submenu-item-last']]],
            ['category.html', 'Дрели и миксеры', 'drill',
              [['#', 'Сетевые дрели'], ['#', 'Дрели ударные'], ['#', 'Сетевые шуруповерты'], ['#', 'Граверы', 'searchmobile-submenu-item-last']]],
            ['#', 'Перфораторы', '',
              []],
            ['#', 'Аккумуляторный инструмент', 'cordless',
              [['#', 'Болгарки (УШМ) аккумуляторные'], ['#', 'Перфораторы аккумуляторные'], ['#', 'Дрели-шуруповерты аккумуляторые'], ['#', 'Гайковерты аккумуляторные'],
                ['#', 'Лобзики аккумуляторные'], ['#', 'Пилы сабельные аккумуляторные'], ['#', 'Реноваторы аккумуляторные'], ['#', 'Аккумуляторы для инструмента', 'searchmobile-submenu-item-last']]],
            ['#', 'Рубанки', '',
            []],
            ['#', 'Фрезеры', '',
              []],
            ['#', 'Шлифмашины', 'grinder',
              [['#', 'Орбитальные шлифмашины'], ['#', 'Ленточные шлифмашины'], ['#', 'Болгарки (УШМ)'], ['#', 'Вибрационные шлифмашины'], ['#', 'Реноваторы', 'searchmobile-submenu-item-last']]],
            ['#', 'Фены', '',
              []],
            ['#', 'Краскопульты', '',
              []],
            ['#', 'Измерительные инструменты', 'measuring',
              [['#', 'Лазерные уровни'], ['#', 'Мультиметры', 'searchmobile-submenu-item-last']]],
            ['#', 'Сварочное оборудование', 'welding',
              [['#', 'Аппараты для сварки труб', 'searchmobile-submenu-item-last']]]
          ]}
        />
        <SearchMobileItem hrefSearchMobileItemProps='#' titleSearchMobileItemProps='клининг' classSearchMobileItemProps='clining'
          arraySearchMobileItemProps={[
            ['#', 'Пылесосы бытовые', '',
              []],
            ['#', 'Пылесосы строительные', '',
              []],
            ['#', 'Пылесосы автомобильные', '',
              []],
            ['#', 'Роботы-пылесосы', '',
              []]
          ]}
        />
        <SearchMobileItem hrefSearchMobileItemProps='#' titleSearchMobileItemProps='автотовары' classSearchMobileItemProps='car'
          arraySearchMobileItemProps={[
            ['#', 'Ударные гайковерты', '',
              []],
            ['#', 'Полировальные машины', '',
              []],
            ['#', 'Компрессоры', '',
              []]
          ]}
        />
        <SearchMobileItem hrefSearchMobileItemProps='#' titleSearchMobileItemProps='Бытовая техника' classSearchMobileItemProps='tech'
          arraySearchMobileItemProps={[
            ['#', 'Отпариватели', '',
              []],
            ['#', 'Парогенераторы', '',
              []],
            ['#', 'Мойки воздуха', '',
              []],
            ['#', 'Измельчители отходов', '',
              []],
            ['#', 'Аксессуары', '',
              []]
          ]}
        />
        <SearchMobileItem hrefSearchMobileItemProps='#' titleSearchMobileItemProps='Ручные инструменты' classSearchMobileItemProps='handtool'
          arraySearchMobileItemProps={[
            ['#', 'Наборы ручного инструмента', '',
              []]
          ]}
        />
      </ul>

      <div className="footer-mobile">
        <div className="footer-mobile-listing-wrapper">
          <ul className="footer-mobile-listing">
            <FooterMobileListingItem hrefProps='about-company.html' titleProps='О компании' />
            <FooterMobileListingItem titleProps='Новости' />
            <FooterMobileListingItem hrefProps='guarantee.html' titleProps='Гарантия и сервис' />
            <FooterMobileListingItem hrefProps='be-dealer.html' titleProps='Стать дилером' />
            <FooterMobileListingItem hrefProps='contacts.html' titleProps='Контакты' />
            <FooterMobileListingItem hrefProps='about-company.html' titleProps='О компании' />
          </ul>
          <ul className="footer-mobile-listing">
            <FooterMobileListingItem titleProps='Конфиденциальность' />
            <FooterMobileListingItem hrefProps='be-dealer.html' titleProps='Стать дилером' />
            <FooterMobileListingItem hrefProps='dropshipping.html' titleProps='Дропшиппинг' />
            <FooterMobileListingItem titleProps='Оптовый портал' />
            <FooterMobileListingItem titleProps='Сервисные центры' />
            <FooterMobileListingItem titleProps='Наши партнеры' />
          </ul>
        </div>

        <div className="footer-contacts">
          <a href="tel:74997001034" target="_blank" className="footer-phone">+7 <span
            className="footer-phone-code">(499)</span> 700-10-34</a>

          <div className="footer-address">
            Россия, Москва, Авиационная улица, 79В
          </div>

          <div className="footer-map">
            <a href="#" target="_blank">Показать на карте</a>
          </div>

          <div className="icons">
            <a href="#" target="_blank" className="footer-link">
              <img src={YoutubeIcon} alt="Youtube icon" className="icons-image" />
            </a>

            <a href="#" target="_blank" className="footer-link">
              <img src={VKIcon} alt="VK icon" className="icons-image" />
            </a>

            <a href="#" target="_blank" className="footer-link">
              <img src={OKIcon} alt="OK icon" className="icons-image" />
            </a>
            <a href="#" target="_blank" className="footer-link"><img src={TwitterIcon} alt="Twitter icon"
              className="icons-image" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMobile