import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const popupAccountMobileSlice = createSlice({
  name: 'toogleAccountPopupMobile',
  initialState: {
    classVisible: '',
  },
  reducers: {
    toogleAccountPopupMobile: (state) => {
      const busketPopup = document.querySelector('.searchmobile-busket__popup')
      if (state.classVisible === '' && busketPopup.classList.contains('busket__popup_visible')) {
        busketPopup.classList.remove('busket__popup_visible')
        state.classVisible = 'account__popup_visible'
      } else if (state.classVisible === ''){
        state.classVisible = 'account__popup_visible'
      } else {
        state.classVisible = ''
      }
    }
  },
})

export const { toogleAccountPopupMobile } = popupAccountMobileSlice.actions

export default popupAccountMobileSlice.reducer