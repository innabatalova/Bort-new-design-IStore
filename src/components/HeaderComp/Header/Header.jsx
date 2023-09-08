import React, {useState} from 'react'

import Searchbar from '../Searchbar/Searchbar'
import NavbarItem from '../NavbarItem/NavbarItem'
import SearchMobile from '../SearchMobile/SearchMobile'
import PopupProfile from '../PopupProfile/PopupProfile'

import BortLogo1 from '../../../static/image/Bort_logo_1.svg'
import SearchImg from '../../../static/image/search.svg'
import LogoSearchArrow from '../../../static/image/logo-search-arrow.svg'
import CloseMobileIcon from '../../../static/image/close-mobile-icon.svg'


const Header = () => {
  const navbarProps = [
    ['/about-company', 'О компании', ' '],
    ['/guarantee', 'Оплата и доставка', ' '],
    ['/be-dealer', 'Контакты', ' '],
    ['#', 'Гарантия и сервис', ' '],
    ['#', 'Оптовый портал', ' ', '_blank'],
    ['#', 'Расширенная гарантия', 'over-garanty', '_blank']
  ]

  const sortNavbarProps = navbarProps.map((item, index) =>
    <NavbarItem key={index} hrefProps={item[0]} itemProps={item[1]} classProps={item[2]} targetProps={item[3]} />
  )
  
  const [toggleAccoutPopup, setToggleAccoutPopup] = useState('')
  const openMenuAccount = () => {
    toggleAccoutPopup == '' ? setToggleAccoutPopup('account__popup_visible') : setToggleAccoutPopup('')
  }

  return (
    <header className="header">
      <div className="navigation">
        <div className="grid-container">
          <div className="navigation-wrapper">
            <div className="geolocation">
              <span className="geolocation__title">Ваш город: </span>
              <span className="geolocation__city">Москва</span>
            </div>
            <div className="navigation__sub">
              <ul className="navbar">
                {sortNavbarProps}
              </ul>
              <div className='profile-wrapper'>
                <div className="account">
                  <span className='account__link' onClick={openMenuAccount}>Личный кабинет</span>
                  <PopupProfile classPopupProfileProps={toggleAccoutPopup}/>
                </div>
                <div className="busket">
                  <a href="/cabinet" className="busket__link">Корзина (0)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="logo-wrapper">
          <button type="button" className="logo-mobile">
            <span className="logo-line"></span>
            <span className="logo-line"></span>
            <span className="logo-line logo-end"></span>
          </button>
          <img src={CloseMobileIcon} alt="close mobile icon" className="logo-close" />
          <a href="/"><img src={BortLogo1} alt="Bort logo" className="logo-image" /></a>
          <form action="#" className="logo-search">
            <img src={SearchImg} alt="icon search" className="logo-search-image" />
            <input type="text" className="logo-search-input" placeholder="Поиск по каталогу" />
            <button type="reset" className="logo-search-reset">
              <img src={LogoSearchArrow} alt="logo search arrow" className="logo-search-arrow" />
            </button>
          </form>
          <SearchMobile />
          <div className="info-wrapper">
            <div className="info">
              <span className="info__span">Доступность, эргономичность и качество инструментов,
                <br />создаваемых для вас и вашего бизнеса.
              </span>
              <span className="info__span info__work"> Работаем с 1993 года!</span>
            </div>
            <button className="bort-button-orange45 bort-button-orange45_ready">
              Написать нам
            </button>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <Searchbar />
      </div>
      
    </header>
  )
}

export default Header;