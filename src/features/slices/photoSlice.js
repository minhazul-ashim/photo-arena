import { createSlice } from "@reduxjs/toolkit";
import photos from '../../fakedata/photos.json'

const initialState = {

    explore: photos,
    selected: null
}

const photoSlice = createSlice({
    name: 'photo',
    initialState,

    reducers: {
        loadAll: (state, action) => {
            state.explore = photos;
        },
        loadSelection: (state, action) => {
            state.selected = action.payload
        },
    },
})


export const { loadAll, loadSelection } = photoSlice.actions;

export default photoSlice.reducer;