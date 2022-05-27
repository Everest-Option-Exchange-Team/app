import { createSlice } from '@reduxjs/toolkit';
import abi from './../artifacts/contracts/Fund.sol/Fund.json';
import { BigNumber } from "ethers";

const initialState = {
  address: "0xdE4E6EFcaaEaa997A77b812eCE98739948391c51", 
  abi: abi.abi,
  showEventSnackbar: false,
  typeOfEvent: "",
  amountDeposit: 1,
  amountWithdraw: 0,
  transactionHash: "",
  transactionBlockNumber:"",
  loadingDeposit: false,
  loadingWithdraw: false,
  amountFunded: BigNumber.from('0'),
  totalAmountFunded: BigNumber.from('0')
};


export const fundCollateralSlice = createSlice({
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
    setAmountWithdraw: (state, action) => {
        state.amountWithdraw = action.payload;
    },
    setTransactionHash: (state, action) => {
        state.transactionHash = action.payload;
    },
    setTransactionBlockNumber: (state, action) => {
        state.transactionBlockNumber = action.payload;
    },
    setLoadingDeposit: (state, action) => {
        state.loadingDeposit = action.payload;
    },
    setLoadingWithdraw: (state, action) => {
        state.loadingWithdraw = action.payload;
    },
    setAmountFunded: (state, action) => {
        state.amountFunded = action.payload;
    },
    setTotalAmountFunded: (state, action) => {
        state.totalAmountFunded = action.payload;
    }
  },
});

export const { 
    setAddress, 
    setShowEventSnackbar, 
    setTypeOfEvent, 
    setAmountDeposit,
    setAmountWithdraw,
    setTransactionHash,
    setTransactionBlockNumber,
    setLoadingDeposit,
    setLoadingWithdraw,
    setAmountFunded,
    setTotalAmountFunded

} = fundCollateralSlice.actions;

export const selectAddress = (state) => state.address;

export default fundCollateralSlice.reducer;
