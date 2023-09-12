import { configureStore } from '@reduxjs/toolkit'
import popupReduser from './popupSlice'

export default configureStore({
  reducer: {
    popup: popupReduser
  },
})