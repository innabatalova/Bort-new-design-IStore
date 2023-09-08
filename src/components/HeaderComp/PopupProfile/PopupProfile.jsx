import React from 'react'

import AccountNavbarItem from './AccountNavbarItem'
import Button from '../../DesignComponents/Button'

const PopupProfile = ({ classPopupProfileProps }) => {
  const accountNavbarList = ['Учетная запись', 'Заказы', 'Список сравнения', 'Запросы на возврат', 'Отложенные товары (1)', 'Отслеживание заказа']
  const sortAccountNavbarList = accountNavbarList.map(item =>
    <AccountNavbarItem textAccountNavbarItemProps={item}/>
    )
  
  return (
    <div className={`account__popup ` + classPopupProfileProps}>
      <ul className='account__navbar'>
        {sortAccountNavbarList}
      </ul>
      <input type="text" className='account__input' placeholder='Номер заказа'/>
      <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='' titleButtonProps='Выйти'/>
    </div>
  )
}

export default PopupProfile