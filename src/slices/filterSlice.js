import {createSlice} from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selected: 'all',
  },
  reducers: {
    setSelected: (state, loadSelected) => {
      state.selected = loadSelected.payload;
    }
  }
})

export const { setSelected } = filterSlice.actions;

export default filterSlice.reducer;
