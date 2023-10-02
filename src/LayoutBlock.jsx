import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextModalOverlay } from './context/contextModalOverlay'
import { ContextModalOpen } from './context/contextModalOpen'
import { ContextProductCardImage } from './context/contextProductCardImage'
import { ContextWindowScroll } from './context/contextWindowScroll'

import Design from './components/DesignComponents/Design'

import Header from './components/HeaderComp/Header/Header'
import News from './components/News/News'
import Banner from './components/Banner/Banner'
import Footer from './components/FooterComp/Footer/Footer'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import ModalOverlay from './components/ModalOverlay/ModalOverlay'
import ModalOpen from './components/ModalOpen/ModalOpen'

import Main from './pages/Main/Main'
import Listing from './pages/Listing/Listing'
import AboutCompany from './pages/AboutCompany/AboutCompany'
import Authorization from './pages/Authorization/Authorization'
import BeDealer from './pages/BeDealer/BeDealer'
import Cabinet from './pages/Cabinet/Cabinet'
import Category from './pages/Category/Category'
import Contacts from './pages/Contacts/Сontacts'
import Dropshipping from './pages/Dropshipping/Dropshipping'
import Guarantee from './pages/Guarantee/Guarantee'
import NewsPreview from './pages/NewsPreview/NewsPreview'
import NewsView from './pages/NewsView/NewsView'
import Partners from './pages/Partners/Partners'
import Politics from './pages/Politics/Politics'
import Registration from './pages/Registration/Registration'
import ProductCard from './pages/ProductCard/ProductCard'
import Orders from './pages/Orders/Orders'
import Profiles from './pages/Profiles/Profiles'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'

import ProductCardGalleryImg4 from './static/product-card-image/BAB-10,8X_4.jpg'

const LayoutBlock = () => {
  const [openOverlay, setOpenOverlay] = useState('')
  const [openModal, setOpenModal] = useState('')
  const [openImage, setOpenImage] = useState(ProductCardGalleryImg4)
  const [windowScrolling, setWindowScrolling] = useState(0)

  useEffect(() => {
      const handleScroll = () => {
        setWindowScrolling(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <BrowserRouter>
      <ContextWindowScroll.Provider value={{ windowScrolling, setWindowScrolling }}>
      <ContextModalOverlay.Provider value={{ openOverlay, setOpenOverlay }}>
        <ContextModalOpen.Provider value={{ openModal, setOpenModal }}>
          <ContextProductCardImage.Provider value={{ openImage, setOpenImage }}>
            <Header />
            <Routes>
              <Route path="design" element={<Design />} />
              <Route path="*" element={<Main />} />
              <Route path="listing" element={<Listing />} />
              <Route path="about-company" element={<AboutCompany />} />
              <Route path="authorization" element={<Authorization />} />
              <Route path="be-dealer" element={<BeDealer />} />
              <Route path="cabinet" element={<Cabinet />} />
              <Route path="category" element={<Category />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="dropshipping" element={<Dropshipping />} />
              <Route path="guarantee" element={<Guarantee />} />
              <Route path="news-preview" element={<NewsPreview />} />
              <Route path="news-view" element={<NewsView />} />
              <Route path="partners" element={<Partners />} />
              <Route path="politics" element={<Politics />} />
              <Route path="registration" element={<Registration />} />
              <Route path="product-card" element={<ProductCard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="profiles" element={<Profiles />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Routes>
            <News />
            <Banner />
            <Footer />
            <ScrollArrow />
            <ModalOverlay />
            <ModalOpen />
          </ContextProductCardImage.Provider>
        </ContextModalOpen.Provider>
      </ContextModalOverlay.Provider>
      </ContextWindowScroll.Provider>
    </BrowserRouter>
  )
}

export default LayoutBlock