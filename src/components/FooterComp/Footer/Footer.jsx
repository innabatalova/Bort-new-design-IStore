import React from 'react'

import FooterListingItem from '../FooterListingItem/FooterListingItem'

import FooterLogo from '../../../static/image/Bort_logo_footer.svg'
import YouTubeIcon from '../../../static/image/Youtube.svg'
import VKIcon from '../../../static/image/VK.svg'
import OKIcon from '../../../static/image/OK.svg'
import TwitterIcon from '../../../static/image/Twitter.svg'

const Footer = () => {
    const FooterListingItemPropsCatalog = [
        ['#', 'Инструменты'], ['#', 'Измельчители'], ['#', 'Клининг'], ['#', 'Автотовары'], ['#', 'Бытовая техника'],
        ['#', 'Товары для сада'], ['#', 'Ручные инструменты']
    ]
    const sortFooterListingItemPropsCatalog = FooterListingItemPropsCatalog.map((item, index) =>
        <FooterListingItem key={index} hrefProps={item[0]} titleProps={item[1]} />)

    const FooterListingItemPropsSocial = [
        ['#', 'Youtube'], ['#', 'Facebook'], ['#', 'Instagram'], ['#', 'Pinterest'], ['#', 'Яндекс Дзен'],
        ['#', 'Drive2']
    ]
    const sortFooterListingItemPropsSocial = FooterListingItemPropsSocial.map((item, index) =>
        <FooterListingItem key={index} hrefProps={item[0]} titleProps={item[1]} />)

    const FooterListingItemPropsCompany = [
        ['#', 'О компании'], ['#', 'Контакты'], ['#', 'Гарантия'], ['#', 'Сервисные центры'], ['#', 'Конфидециальность'],
        ['#', 'Drive2']
    ]
    const sortFooterListingItemPropsCompany = FooterListingItemPropsCompany.map((item, index) =>
    <FooterListingItem key={index} hrefProps={item[0]} titleProps={item[1]} />)

    const FooterListingItemPropsOther = [
        ['#', 'Блог'], ['#', 'Каталог товаров'], ['#', 'Каталог клининг'], ['#', 'Акции и новости'], ['#', 'eXtreme серия'],
        ['#', 'Карта сайта']
    ]
    const sortFooterListingItemPropOther = FooterListingItemPropsOther.map((item, index) =>
    <FooterListingItem key={index} hrefProps={item[0]} titleProps={item[1]} />)


    return (
        <footer className="footer">
            <div className="grid-container">
                <div className="footer-wrapper">
                    <div className="footer-contacts index-link">
                        <img src={FooterLogo} alt="bort logo" className="footer__logo" />
                        <a href="tel:74997001034" target="_blank" className="footer-phone bort-support-phone">+7<span
                            className="footer-phone-code bort-support-phone-code">(499)</span>700-10-34</a>
                        <div className="footer-address">
                            Россия, Москва, Авиационная улица, 79В
                        </div>
                        <div className="footer-map">
                            <a href="#" target="_blank">Показать на карте</a>
                        </div>
                        <div className="icons">
                            <a href="#" target="_blank" className="footer-link">
                                <img src={YouTubeIcon} alt="Youtube icon" className="icons-image" />
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
                    <div className="footer-listing">
                        <div className="listing-wrapper grid-x">
                            <div className="footer__catalog small-6 large-3 cell">
                                <ul>
                                    <li className="bort-listing-title listing-title">
                                        каталог товаров
                                    </li>
                                    {sortFooterListingItemPropsCatalog}
                                </ul>
                            </div>
                            <div className="small-6 large-3 cell">
                                <ul>
                                    <li className="bort-listing-title listing-title">
                                        присоединяйтесь!
                                    </li>
                                    {sortFooterListingItemPropsSocial}
                                </ul>
                            </div>
                            <div className="small-6 large-3 cell">
                                <ul>
                                    <li className="bort-listing-title listing-title">О КОМПАНИИ</li>
                                    {sortFooterListingItemPropsCompany}
                                </ul>
                            </div>
                            <div className="small-6 large-3 cell">
                                <ul>
                                    <li className="bort-listing-title listing-title">
                                        ДОПОЛНИТЕЛЬНО
                                    </li>
                                    {sortFooterListingItemPropOther}
                                </ul>
                            </div>
                        </div>
                        <span className="copyright">Все права защищены © 2016-2020 Bort-global.ru</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer