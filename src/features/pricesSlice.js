import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tsla_pool: 120,
  msft_pool: 121,
  aapl_pool: 122,
  goog_pool: 123,
  abnb_pool: 124,

  tsla_oracle: 100,
  msft_oracle: 101,
  aapl_oracle: 102,
  goog_oracle: 103,
  abnb_oracle: 104
};


export const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    setTSLA_oraclePrice: (state, action) => {
      state.tsla_oracle = action.payload;
    },
    setMSFT_oraclePrice: (state, action) => {
        state.msft_oracle = action.payload;
    },
    setAAPL_oraclePrice: (state, action) => {
        state.aapl_oracle = action.payload;
    },
    setGOOG_oraclePrice: (state, action) => {
        state.goog_oracle = action.payload;
    },
    setABNB_oraclePrice: (state, action) => {
        state.abnb_oracle = action.payload;
    },
    setTSLA_poolPrice: (state, action) => {
        state.tsla_pool = action.payload;
    },
    setMSFT_poolPrice: (state, action) => {
        state.msft_pool = action.payload;
    },
    setAAPL_poolPrice: (state, action) => {
      state.aapl_pool = action.payload;
    },
    setGOOG_poolPrice: (state, action) => {
        state.goog_pool = action.payload;
    },
    setABNB_poolPrice: (state, action) => {
        state.abnb_pool = action.payload;
    },
    
    
  },
});

export const { 
    setTSLA_poolPrice, 
    setMSFT_poolPrice, 
    setAAPL_poolPrice, 
    setGOOG_poolPrice, 
    setABNB_poolPrice,

    setTSLA_oraclePrice, 
    setMSFT_oraclePrice, 
    setAAPL_oraclePrice, 
    setGOOG_oraclePrice, 
    setABNB_oraclePrice,

} = pricesSlice.actions;

export const selectAddress = (state) => state.address;

export default pricesSlice.reducer;
