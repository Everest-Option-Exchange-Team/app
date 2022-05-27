import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tsla_pool: 757.34,
  msft_pool: 271.94,
  aapl_pool: 149.02,
  goog_pool: 2245.79,
  abnb_pool: 120.10,

  tsla_oracle: 757.73,
  msft_oracle: 271.82,
  aapl_oracle: 149.21,
  goog_oracle: 2245.97,
  abnb_oracle: 119.97
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
