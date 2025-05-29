import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/parfumSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});