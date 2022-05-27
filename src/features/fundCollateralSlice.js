import { createSlice } from '@reduxjs/toolkit';
import abi from './../abis/Fund.json';

const initialState = {
  address: "0xdE4E6EFcaaEaa997A77b812eCE98739948391c51", 
  abi: abi,
  showEventSnackbar: false,
  typeOfEvent: "",
  amountDeposit: 0,
  transactionHash: "",
  transactionBlockNumber:"",
  loadingDeposit: false
};


export const userSlice = createSlice({
  name: "fundCollateral",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setShowEventSnackbar: (state, action) => {
        state.showEventSnackbar = action.payload;
    },
    setTypeOfEvent: (state, action) => {
        state.typeOfEvent = action.payload;
    },
    setAmountDeposit: (state, action) => {
        state.amountDeposit = action.payload;
    },
    setTransactionHash: (state, action) => {
        state.transactionHash = action.payload;
    },
    setTransactionBlockNumber: (state, action) => {
        state.transactionBlockNumber = action.payload;
    },
    setLoadingDeposit: (state, action) => {
        state.loadingDeposit = action.payload;
    }
  },
});

export const { 
    setAddress, 
    setShowEventSnackbar, 
    setTypeOfEvent, 
    setAmountDeposit, 
    setTransactionHash,
    setTransactionBlockNumber,
    setLoadingDeposit

} = userSlice.actions;

export const selectAddress = (state) => state.address;

export default userSlice.reducer;
