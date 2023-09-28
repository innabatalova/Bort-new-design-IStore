import React, { useEffect, useState } from 'react'

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

  const [dropActiveTab, setDropActiveTab] = useState('drop')

  return (
    <main className="dropshipping">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h2 className="dropshipping-title">Дропшиппинг</h2>
        <div className="dropshipping-wrapper">
          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('drop') }}
            classTopDropshippingBlockProps={`drop ` + (dropActiveTab == 'drop' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`drop ` + (dropActiveTab == 'drop' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Что такое дропшиппинг?' infoDropshippingBlockProps={<DropshippingInfoDrop />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('work') }}
            classTopDropshippingBlockProps={`work ` + (dropActiveTab == 'work' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`work ` + (dropActiveTab == 'work' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Как это работает' infoDropshippingBlockProps={<DropshippingInfoWork />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('site') }}
            classTopDropshippingBlockProps={`site ` + (dropActiveTab == 'site' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`site ` + (dropActiveTab == 'site' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Требования к сайтам' infoDropshippingBlockProps={<DropshippingInfoSite />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('delivery') }}
            classTopDropshippingBlockProps={`delivery ` + (dropActiveTab == 'delivery' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`delivery ` + (dropActiveTab == 'delivery' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Способы доставки' infoDropshippingBlockProps={<DropshippingInfoDelivery />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('api') }}
            classTopDropshippingBlockProps={`api ` + (dropActiveTab == 'api' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`api ` + (dropActiveTab == 'api' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='API' infoDropshippingBlockProps={<DropshippingInfoAPI />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('docapi') }}
            classTopDropshippingBlockProps={`docapi ` + (dropActiveTab == 'docapi' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`docapi ` + (dropActiveTab == 'docapi' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Документация API v.1.02' infoDropshippingBlockProps={<DropshippingInfoDocAPI />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('opendrop') }}
            classTopDropshippingBlockProps={`opendrop ` + (dropActiveTab == 'opendrop' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`opendrop ` + (dropActiveTab == 'opendrop' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Подключить дропшиппинг' infoDropshippingBlockProps={<DropshippingInfoOpenDrop />} />

          <DropshippingBlock clickDropshippingBlockProps={() => { setDropActiveTab('docs') }}
            classTopDropshippingBlockProps={`docs ` + (dropActiveTab == 'docs' ? 'dropshipping-menu-item-active' : '')}
            classBottomDropshippingBlockProps={`docs ` + (dropActiveTab == 'docs' ? 'dropshipping-info-block-visible' : '')}
            titleDropshippingBlockProps='Документы' infoDropshippingBlockProps={<DropshippingInfoDocs />} />

        </div>
      </div>
    </main>
  )
}

export default Dropshipping