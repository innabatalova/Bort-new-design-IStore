import { createSlice } from '@reduxjs/toolkit'

export const popupBusketMobileSlice = createSlice({
  name: 'toogleBusketPopupMobile',
  initialState: {
    classVisible: '',
  },
  reducers: {
    toogleBusketPopupMobile: (state) => {
      const accountPopup = document.querySelector('.searchmobile-account__popup')
      if (state.classVisible === '' && accountPopup.classList.contains('account__popup_visible')) {
        accountPopup.classList.remove('account__popup_visible')
        state.classVisible = 'busket__popup_visible'
      } else if (state.classVisible === '') {
        state.classVisible = 'busket__popup_visible'
      } else {
        state.classVisible = ''
      }    }
  },
})

export const { toogleBusketPopupMobile } = popupBusketMobileSlice.actions

export default popupBusketMobileSlice.reducer