import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null,
  connected: false
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
    }
  },
});

export const { setAddress, setConnected } = userSlice.actions;

export const selectAddress = (state) => state.address;

export default userSlice.reducer;
