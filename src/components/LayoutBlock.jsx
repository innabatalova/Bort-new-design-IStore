import React from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './HeaderComp/Header/Header'
import News from './News/News'
import Banner from './Banner/Banner'
import Footer from './FooterComp/Footer/Footer'
import ScrollArrow from './ScrollArrow/ScrollArrow'
import ModalOverlay from './ModalOverlay/ModalOverlay'
import ModalOpen from './ModalOpen/ModalOpen'

const LayoutBlock = () => {
  return (
    <>
      <Header />
      <News />
      <Banner />
      <Footer />
      <ScrollArrow />
      <ModalOverlay />
      <ModalOpen />
    </>
  )
}

export default LayoutBlock