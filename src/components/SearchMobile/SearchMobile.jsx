import React from 'react'

import FooterMobileListingItem from '../FooterMobileListingItem/FooterMobileListingItem'

import YoutubeIcon from '../../static/image/Youtube.svg'
import VKIcon from '../../static/image/VK.svg'
import OKIcon from '../../static/image/OK.svg'
import TwitterIcon from '../../static/image/Twitter.svg'

const SearchMobile = () => {
  return(
    <div className="searchmobile">
      <span className="searchmobile-shadow"></span>
      <div className="geolocation geolocation_searchmobile">
        <span className="geolocation__title geolocation__title_searchmobile">Ваш город: </span>
        <span className="geolocation__city">Москва</span>
      </div>

      <ul className="searchmobile-wrapper">
        <li className="searchmobile-item">
          <div className="searchmobile-item-wrapper searchmobile-tool">
            <span className="searchmobile-title"><a href="listing.html">инструменты</a></span>
            <span className="plus searchmobile-plus">+</span>
          </div>
          <ul className="searchmobile-menu menu-tool">
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-saws">
                <span className="searchmobile-menu-title"><a href="category.html">Пилы</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-saws">
                <li className="searchmobile-submenu-item">
                  <a href="product-card.html">Лобзики электрические</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="product-card.html">Пилы циркулярные</a>
                </li>
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="product-card.html">Сабельные пилы</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-drill">
                <span className="searchmobile-menu-title"><a href="category.html">Дрели и миксеры</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-drill">
                <li className="searchmobile-submenu-item">
                  <a href="#">Сетевые дрели</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Дрели ударные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Сетевые шуруповерты</a>
                </li>
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="#">Граверы</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Перфораторы</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-cordless">
                <span className="searchmobile-menu-title"><a href="#">Аккумуляторный инструмент</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-cordless">
                <li className="searchmobile-submenu-item">
                  <a href="#">Болгарки (УШМ) аккумуляторные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Перфораторы аккумуляторные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Дрели-шуруповерты аккумуляторые</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Гайковерты аккумуляторные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Лобзики аккумуляторные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Пилы сабельные аккумуляторные</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Реноваторы аккумуляторные</a>
                </li>
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="#">Аккумуляторы для инструмента</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Рубанки электрические</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Фрезеры электрические</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-grinder">
                <span className="searchmobile-menu-title"><a href="#">Шлифмашины</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-grinder">
                <li className="searchmobile-submenu-item">
                  <a href="#">Орбитальные шлифмашины</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Ленточные шлифмашины</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Болгарки (УШМ)</a>
                </li>
                <li className="searchmobile-submenu-item">
                  <a href="#">Вибрационные шлифмашины</a>
                </li>
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="#">Реноваторы</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Фены технические</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Краскопульты</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-measuring">
                <span className="searchmobile-menu-title"><a href="#">Измерительные инструменты</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-measuring">
                <li className="searchmobile-submenu-item">
                  <a href="#">Лазерные уровни</a>
                </li>
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="#">Мультиметры</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper searchmobile-welding">
                <span className="searchmobile-menu-title"><a href="#">Сварочное оборудование</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
              <ul className="searchmobile-submenu submenu-welding">
                <li className="
                          searchmobile-submenu-item
                          searchmobile-submenu-item-last
                        ">
                  <a href="#">Аппараты для сварки труб</a>
                </li>
              </ul>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Клеевые пистолеты</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
          </ul>
        </li>
        <li className="searchmobile-item">
          <div className="searchmobile-item-wrapper searchmobile-clining">
            <span className="searchmobile-title"><a href="#">клининг</a></span>
            <span className="plus searchmobile-plus">+</span>
          </div>
          <ul className="searchmobile-menu menu-clining">
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Пылесосы бытовые</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Пылесосы строительные</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Пылесосы автомобильные</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Роботы-пылесосы</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
          </ul>
        </li>
        <li className="searchmobile-item">
          <div className="searchmobile-item-wrapper searchmobile-car">
            <span className="searchmobile-title"><a href="#">автотовары</a></span>
            <span className="plus searchmobile-plus">+</span>
          </div>
          <ul className="searchmobile-menu menu-car">
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Ударные гайковерты</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Полировальные машины</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Компрессоры</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
          </ul>
        </li>
        <li className="searchmobile-item">
          <div className="searchmobile-item-wrapper searchmobile-tech">
            <span className="searchmobile-title"><a href="#">Бытовая техника</a></span>
            <span className="plus searchmobile-plus">+</span>
          </div>
          <ul className="searchmobile-menu menu-tech">
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Отпариватели</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Парогенераторы</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Мойки воздуха</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Измельчители отходов</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Аксессуары</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
          </ul>
        </li>
        <li className="searchmobile-item">
          <div className="searchmobile-item-wrapper searchmobile-handtool">
            <span className="searchmobile-title"><a href="#">Ручные инструменты</a></span>
            <span className="plus searchmobile-plus">+</span>
          </div>
          <ul className="searchmobile-menu menu-handtool">
            <li className="searchmobile-menu-item">
              <div className="searchmobile-item-wrapper">
                <span className="searchmobile-menu-title"><a href="#">Наборы ручного инструмента</a></span>
                <span className="subplus searchmobile-menu-plus">+</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <div className="footer-mobile">

        <div className="footer-mobile-listing-wrapper">
          <ul className="footer-mobile-listing">
            <FooterMobileListingItem hrefProps='about-company.html' titleProps='О компании'/>
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