import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/HeaderComp/Header/Header'
import News from './components/News/News'
import Banner from './components/Banner/Banner'
import Footer from './components/FooterComp/Footer/Footer'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'
import ModalOverlay from './components/ModalOverlay/ModalOverlay'
import ModalOpen from './components/ModalOpen/ModalOpen'

import Listing from './pages/Listing/Listing'
import AboutCompany from './pages/AboutCompany/AboutCompany'

const LayoutBlock = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Listing />} />
        <Route path="about-company" element={<AboutCompany />} />
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