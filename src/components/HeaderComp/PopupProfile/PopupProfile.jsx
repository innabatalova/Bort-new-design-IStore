import React from 'react'
import { useDispatch } from 'react-redux'
import { closePopup } from '../../../store/popupSlice'

import AccountNavbarItem from './AccountNavbarItem'
import Button from '../../DesignComponents/Button'

const PopupProfile = ({ classPopupProfileProps, classPopupProfileCloseProps }) => {
  const accountNavbarList = ['Учетная запись', 'Заказы', 'Список сравнения', 'Запросы на возврат', 'Отложенные товары (1)', 'Отслеживание заказа']
  const sortAccountNavbarList = accountNavbarList.map(item =>
    <AccountNavbarItem textAccountNavbarItemProps={item}/>
    )

  const dispatch = useDispatch()
  
  return (
    <div className={`account__popup ` + classPopupProfileProps}>
      <div className={`account__close ` + classPopupProfileCloseProps} onClick={() => dispatch(closePopup())}>✕</div>
      <ul className='account__navbar'>
        {sortAccountNavbarList}
      </ul>
      <input type="text" className='account__input' placeholder='Номер заказа'/>
      <Button classDesignButtonProps='orange' classSizeButtonProps='45' classButtonProps='account__button' titleButtonProps='Выйти'/>
    </div>
  )
}

export default PopupProfile