import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const popupAccountSlice = createSlice({
  name: 'toogleAccountPopup',
  initialState: {
    classVisible: '',
  },
  reducers: {
    toogleAccountPopup: (state) => {
      const busketPopup = document.querySelector('.busket__popup')
      if (state.classVisible === '' && busketPopup.classList.contains('busket__popup_visible')) {
        busketPopup.classList.remove('busket__popup_visible')
        state.classVisible = 'account__popup_visible'
      } else if (state.classVisible === ''){
        state.classVisible = 'account__popup_visible'
      } else {
        state.classVisible = ''
      }
    },
    closeAccountPopup: (state) => {
      state.classVisible = ''
    }
  },
})

export const { toogleAccountPopup, closeAccountPopup } = popupAccountSlice.actions

export default popupAccountSlice.reducer