import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage:""
};


export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

export const { setCurrentPage } = pageSlice.actions;

export const selectAddress = (state) => state.currenPage;

export default pageSlice.reducer;
