import React from 'react'

import Breadcrumb from '../../Breadcrumb/Breadcrumb'

const Charter = () => { 
  const breadcrumbListItemProps = [
    ['/', 'breadcrumb-list__nav', 'Главная'],
    ['#', 'breadcrumb-list__nav', 'Инструменты'],
    ['#', ' ', 'Аккумуляторный инструмент']
  ]

  return(
    <main className="charter">
      <div className="grid-container">
        <Breadcrumb breadcrumbListItemProps={breadcrumbListItemProps} />
        <h1 className="charter-title">АККУМУЛЯТОРНЫЙ ИНСТРУМЕНT</h1>
      </div>
    </main>
  )
}

export default Charter