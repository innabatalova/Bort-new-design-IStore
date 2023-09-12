import { createSlice } from '@reduxjs/toolkit'

export const popupSlice = createSlice({
  name: 'tooglePopup',
  initialState: {
    classVisible: '',
  },
  reducers: {
    tooglePopup: (state) => {
      state.classVisible === '' ? state.classVisible = 'account__popup_visible' : state.classVisible = ''
    },
    closePopup: (state) => {
      state.classVisible = ''
    }
  },
})

export const { tooglePopup, closePopup } = popupSlice.actions

export default popupSlice.reducer