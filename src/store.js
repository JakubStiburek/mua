import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice'

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
})
