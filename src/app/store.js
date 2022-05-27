import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import fundCollateralReducer from '../features/fundCollateralSlice';
import pricesReducer from '../features/pricesSlice';
import pageReducer from '../features/pageSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    fundCollateral: fundCollateralReducer,
    prices: pricesReducer,
    page: pageReducer
  },
});
