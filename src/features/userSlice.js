import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null,
  connected: false,
  collateral: 0
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setConnected: (state, action) => {
      state.connected = action.payload;
    },
    setCollateral: (state, action) => {
      state.collateral = action.payload;
    }
  },
});

export const { setAddress, setConnected, setCollateral } = userSlice.actions;

export const selectAddress = (state) => state.address;

export default userSlice.reducer;
