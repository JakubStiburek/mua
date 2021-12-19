import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice'
import filterReducer from './slices/filterSlice'

export default configureStore({
  reducer: {
    menu: menuReducer,
    filter: filterReducer,
  },
})
