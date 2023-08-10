import React from 'react'

import FooterListingItem from '../../DesignComponents/FooterListingItem'

import FooterLogo from '../../../static/image/Bort_logo_footer.svg'
import YouTubeIcon from '../../../static/image/Youtube.svg'
import VKIcon from '../../../static/image/VK.svg'
import OKIcon from '../../../static/image/OK.svg'
import TwitterIcon from '../../../static/image/Twitter.svg'

const Footer = () => {
    const FooterListingItemPropsCatalog = [
        ['listing-item', '#', 'Инструменты'], ['listing-item', '#', 'Измельчители'], ['listing-item', '#', 'Клининг'], ['listing-item', '#', 'Автотовары'], 
        ['listing-item', '#', 'Бытовая техника'], ['listing-item', '#', 'Товары для сада'], ['listing-item', '#', 'Ручные инструменты']
    ]
    const sortFooterListingItemPropsCatalog = FooterListingItemPropsCatalog.map((item, index) =>
        <FooterListingItem key={index} classFooterListingItemProps={item[0]}
        hrefFooterListingItemProps={item[1]} titleFooterListingItemProps={item[2]} />)

    const FooterListingItemPropsSocial = [
        ['listing-item', '#', 'Youtube'], ['listing-item', '#', 'Facebook'], ['listing-item', '#', 'Instagram'], 
        ['listing-item', '#', 'Pinterest'], ['listing-item', '#', 'Яндекс Дзен'],
        ['listing-item', '#', 'Drive2']
    ]
    const sortFooterListingItemPropsSocial = FooterListingItemPropsSocial.map((item, index) =>
        <FooterListingItem key={index} classFooterListingItemProps={item[0]}
            hrefFooterListingItemProps={item[1]} titleFooterListingItemProps={item[2]} />)

    const FooterListingItemPropsCompany = [
        ['listing-item', '#', 'О компании'], ['listing-item', '#', 'Контакты'], ['listing-item', '#', 'Гарантия'], 
        ['listing-item', '#', 'Сервисные центры'], ['listing-item', '#', 'Конфидециальность'],
        ['listing-item', '#', 'Drive2']
    ]
    const sortFooterListingItemPropsCompany = FooterListingItemPropsCompany.map((item, index) =>
        <FooterListingItem key={index} classFooterListingItemProps={item[0]}
            hrefFooterListingItemProps={item[1]} titleFooterListingItemProps={item[2]} />)

    const FooterListingItemPropsOther = [
        ['listing-item', '#', 'Блог'], ['listing-item', '#', 'Каталог товаров'], ['listing-item', '#', 'Каталог клининг'], 
        ['listing-item', '#', 'Акции и новости'], ['listing-item', '#', 'eXtreme серия'],
        ['listing-item', '#', 'Карта сайта']
    ]
    const sortFooterListingItemPropOther = FooterListingItemPropsOther.map((item, index) =>
        <FooterListingItem key={index} classFooterListingItemProps={item[0]}
            hrefFooterListingItemProps={item[1]} titleFooterListingItemProps={item[2]} />)


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