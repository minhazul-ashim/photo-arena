import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../features/slices/photoSlice'
import artReducer from '../features/slices/artSlice'
import collectionSlice from '../features/slices/collectionSlice';
import userDataSlice from '../features/slices/userDataSlice';

export const store = configureStore({
  reducer: {
    photo: photoReducer,
    art: artReducer,
    collection: collectionSlice,
    user: userDataSlice
  },
});
