import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tsla: 100,
  msft: 100,
  aapl: 100,
  goog: 100,
  abnb: 100
};


export const userSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    setTSLAPrice: (state, action) => {
      state.tsla = action.payload;
    },
    setMSFTPrice: (state, action) => {
        state.msft = action.payload;
    },
    setAAPLPrice: (state, action) => {
        state.aapl = action.payload;
    },
    setGOOGPrice: (state, action) => {
        state.goog = action.payload;
    },
    setABNBPrice: (state, action) => {
        state.abnb = action.payload;
    },
    
    
  },
});

export const { setTSLAPrice, setMSFTPrice, setAAPLPrice, setGOOGPrice, setABNBPrice } = userSlice.actions;

export const selectAddress = (state) => state.address;

export default userSlice.reducer;
