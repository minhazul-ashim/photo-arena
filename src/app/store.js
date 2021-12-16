import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../features/slices/photoSlice'
import artReducer from '../features/slices/artSlice'

export const store = configureStore({
  reducer: {
    photo: photoReducer,
    art: artReducer
  },
});
