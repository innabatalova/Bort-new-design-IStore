import { configureStore } from '@reduxjs/toolkit'
import popupAccountReduser from './popupAccountSlice'
import popupBusketReduser from './popupBusketSlice'
import popupAccountMobileReduser from './popupAccountSliceMobile'
import popupBusketMobileReduser from './popupBusketSliceMobile'

export default configureStore({
  reducer: {
    popupAccount: popupAccountReduser,
    popupBusket: popupBusketReduser,
    popupAccountMobile: popupAccountMobileReduser,
    popupBusketMobile: popupBusketMobileReduser
  },
})