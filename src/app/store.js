import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import fundCollateralReducer from '../features/fundCollateralSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    fundCollateral: fundCollateralReducer
  },
});
