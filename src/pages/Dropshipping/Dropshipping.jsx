import React from 'react'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import DropshippingBlock from '../../components/PagesComp/DropshippingBlock/DropshippingBlock'

import DropshippingInfoDrop from '../../components/PagesComp/DropshippingBlock/DropshippingInfoDrop'
import DropshippingInfoWork from '../../components/PagesComp/DropshippingBlock/DropshippingInfoWork'
import DropshippingInfoSite from '../../components/PagesComp/DropshippingBlock/DropshippingInfoSite'
import DropshippingInfoDelivery from '../../components/PagesComp/DropshippingBlock/DropshippingInfoDelivery'
import DropshippingInfoAPI from '../../components/PagesComp/DropshippingBlock/DropshippingInfoAPI'
import DropshippingInfoDocAPI from '../../components/PagesComp/DropshippingBlock/DropshippingInfoDocAPI'
import DropshippingInfoOpenDrop from '../../components/PagesComp/DropshippingBlock/DropshippingInfoOpenDrop'
import DropshippingInfoDocs from '../../components/PagesComp/DropshippingBlock/DropshippingInfoDocs'

const Dropshipping = () => {
    const breadcrumbListItemProps = [
    ['/', 'onelevel-breadcrumb-nav', 'Главная'],
      ['#', 'onelevel-breadcrumb-nav onelevel-breadcrumb-nav-last', 'Дропшиппинг']
  ]

  return(
    <main className="dropshipping">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="dropshipping-title">Дропшиппинг</h2>
        <div className="dropshipping-wrapper">
          <DropshippingBlock classTopDropshippingBlockProps='drop dropshipping-menu-item-active' 
            classBottomDropshippingBlockProps='drop dropshipping-info-block-visible'
            titleDropshippingBlockProps='Что такое дропшиппинг?' infoDropshippingBlockProps={<DropshippingInfoDrop/>}/>
          <DropshippingBlock classTopDropshippingBlockProps='work' classBottomDropshippingBlockProps='work'
            titleDropshippingBlockProps='Как это работает' infoDropshippingBlockProps={<DropshippingInfoWork />} />
          <DropshippingBlock classTopDropshippingBlockProps='site' classBottomDropshippingBlockProps='site'
            titleDropshippingBlockProps='Требования к сайтам' infoDropshippingBlockProps={<DropshippingInfoSite />} />
          <DropshippingBlock classTopDropshippingBlockProps='delivery' classBottomDropshippingBlockProps='delivery'
            titleDropshippingBlockProps='Способы доставки' infoDropshippingBlockProps={<DropshippingInfoDelivery />} />
          <DropshippingBlock classTopDropshippingBlockProps='api' classBottomDropshippingBlockProps='api'
            titleDropshippingBlockProps='API' infoDropshippingBlockProps={<DropshippingInfoAPI />} />
          <DropshippingBlock classTopDropshippingBlockProps='docapi' classBottomDropshippingBlockProps='docapi'
            titleDropshippingBlockProps='Документация API v.1.02' infoDropshippingBlockProps={<DropshippingInfoDocAPI />} />
          <DropshippingBlock classTopDropshippingBlockProps='opendrop' classBottomDropshippingBlockProps='opendrop'
            titleDropshippingBlockProps='Подключить дропшиппинг' infoDropshippingBlockProps={<DropshippingInfoOpenDrop />} />
          <DropshippingBlock classTopDropshippingBlockProps='docs' classBottomDropshippingBlockProps='docs'
            titleDropshippingBlockProps='Документы' infoDropshippingBlockProps={<DropshippingInfoDocs />} />
        </div>
      </div>
    </main>
  )
}

export default Dropshipping