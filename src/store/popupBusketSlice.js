import { createSlice } from '@reduxjs/toolkit'

export const popupBusketSlice = createSlice({
  name: 'toogleBusketPopup',
  initialState: {
    classVisible: '',
  },
  reducers: {
    toogleBusketPopup: (state) => {
      const accountPopup = document.querySelector('.account__popup')
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

export const { toogleBusketPopup } = popupBusketSlice.actions

export default popupBusketSlice.reducer