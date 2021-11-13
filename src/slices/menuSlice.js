import {createSlice} from "@reduxjs/toolkit";


export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    },
    closeMenu: (state) => {
      state.open = false;
    },
    openMenu: (state) => {
      state.open = true;
    }
  }
})

export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions;

export default menuSlice.reducer;
