import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import Contacts from './pages/Сontacts/Сontacts'
import Dropshipping from './pages/Dropshipping/Dropshipping'
import Guarantee from './pages/Guarantee/Guarantee'
import NewsPreview from './pages/NewsPreview/NewsPreview'
import NewsView from './pages/NewsView/NewsView'
import Partners from './pages/Partners/Partners'
import Politics from './pages/Politics/Politics'
import Registration from './pages/Registration/Registration'

const LayoutBlock = () => {
  return (
    <BrowserRouter>
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
      </Routes>
      <News />
      <Banner />
      <Footer />
      <ScrollArrow />
      <ModalOverlay />
      <ModalOpen />
    </BrowserRouter>
  )
}

export default LayoutBlock