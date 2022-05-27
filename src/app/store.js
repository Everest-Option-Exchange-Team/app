import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import fundCollateralReducer from '../features/fundCollateralSlice';
import pricesReducer from '../features/pricesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    fundCollateral: fundCollateralReducer,
    prices: pricesReducer
  },
});
