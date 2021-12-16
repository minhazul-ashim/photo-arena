import { createSlice } from "@reduxjs/toolkit";
import artworks from '../../fakedata/artworks.json'

const initialState = {

    explore: artworks,
    selected: null
}

const artSlice = createSlice({
    name: 'photo',
    initialState,

    reducers: {
        loadAll: (state, action) => {
            state.explore = artworks;
        },
        loadSelection: (state, action) => {
            state.selected = action.payload
        },
    },
})


export const { loadAll, loadSelection } = artSlice.actions;

export default artSlice.reducer;