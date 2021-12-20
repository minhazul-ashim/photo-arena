import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {

    photoCollection: [],
    artCollection: []
}

export const postUserArtCollect = createAsyncThunk(
    'arts/postArtCollect',

    async ({ email, data }) => {

        const response = await fetch(`https://limitless-bastion-02273.herokuapp.com/user/art/?email=${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { })
    }
)

export const postUserPhotoCollect = createAsyncThunk(
    'arts/postPhotoCollect',

    async ({ email, data }) => {

        const response = await fetch(`https://limitless-bastion-02273.herokuapp.com/user/photo/?email=${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { })
    }
)

const collectionSlice = createSlice({

    name: 'collection',
    initialState,

    reducers: {

        addACollectedPhoto: (state, action) => {

            state.photoCollection.push(action.payload)
        },

        addACollectedArt: (state, action) => {

            state.artCollection.push(action.payload)
        }
    },

    extraReducers: (builder) => {

        builder.addCase(postUserArtCollect.fulfilled, (state, action) => {

            state.artCollection.push(action.payload);
        })

        builder.addCase(postUserPhotoCollect.fulfilled, (state, action) => {

            state.photoCollection.push(action.payload);
        })
    },
})

export const { loadCollectedPhotos, addACollectedPhoto, loadSelectedArts, addACollectedArt } = collectionSlice.actions;

export default collectionSlice.reducer;