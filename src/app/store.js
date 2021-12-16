import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../features/slices/photoSlice'

export const store = configureStore({
  reducer: {
    photo: photoReducer
  },
});
