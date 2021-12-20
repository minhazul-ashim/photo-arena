import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {

    explore: [],
    selected: null
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await fetch(`https://limitless-bastion-02273.herokuapp.com/photos`)
            .then(res => res.json())
        return response
    }
)

const photoSlice = createSlice({
    name: 'photo',
    initialState,

    reducers: {
        loadAll: (state, action) => {
            state.explore = [];
        },
        loadSelection: (state, action) => {
            state.selected = action.payload
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchBooks.fulfilled, (state, action) => {

            state.explore = action.payload;
        })
    },
})



export const { loadAll, loadSelection } = photoSlice.actions;

export default photoSlice.reducer;