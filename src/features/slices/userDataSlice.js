import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: {},
    userPhotoCollections: [],
    userArtCollections: []
}


export const fetchUserCollections = createAsyncThunk(
    'user/fetchUserData',
    async (email) => {

        const response = await fetch(`http://localhost:5000/user/photos?email=${email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
        return response
    }
)

export const deletePhoto = createAsyncThunk(
    'user/deletePhoto',
    async ({ email, data }) => {

        const response = await fetch(`http://localhost:5000/user/photos?email=${email}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
        return response
    }
)

export const deleteArt = createAsyncThunk(
    'user/deleteArt',
    async ({ email, data }) => {

        const response = await fetch(`http://localhost:5000/user/arts?email=${email}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
        return response;
    }
)

const userDataSlice = createSlice({

    name: 'userData',
    initialState,

    reducers: {

        loadCollectedPhotos: (state, action) => {

            // state.
        }
    },
    extraReducers:
        (builder) => {

            builder.addCase(fetchUserCollections.fulfilled, (state, { payload }) => {

                state.user = payload;
                state.userPhotoCollections = payload.photoCollections;
                state.userArtCollections = payload.artCollections;
            })

            builder.addCase(deletePhoto.fulfilled, (state, { payload }) => {

                // console.log(payload)
            })

            builder.addCase(deleteArt.fulfilled, (state, { payload }) => {

                // console.log(payload)
            })
        }
})

export default userDataSlice.reducer