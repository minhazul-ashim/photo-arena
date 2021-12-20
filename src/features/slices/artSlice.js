import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {

    explore: [],
    selected: null
}

export const fetchArts = createAsyncThunk(
    'arts/fetchArts',
    async () => {

        const response = await fetch(`https://limitless-bastion-02273.herokuapp.com/artworks`)
            .then(res => res.json())

        return response;
    }
)

const artSlice = createSlice({
    name: 'photo',
    initialState,

    reducers: {
        loadAll: (state, action) => {
            state.explore = state.explore;
        },
        loadSelection: (state, action) => {
            state.selected = action.payload
        },
    },

    extraReducers: (builder) => {

        builder.addCase(fetchArts.fulfilled, (state, action) => {

            state.explore = action.payload
        })
    }
})


export const { loadAll, loadSelection } = artSlice.actions;

export default artSlice.reducer;