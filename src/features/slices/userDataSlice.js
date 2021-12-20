import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: {},
    userPhotoCollections: [],
    userArtCollections: []
}


export const fetchUserCollections = createAsyncThunk(
    'user/fetchUserData',
    async (email) => {

        const response = await fetch(`https://limitless-bastion-02273.herokuapp.com/user/photos/?email=${email}`)
            .then(res => res.json())
        return response
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

        }
})

export default userDataSlice.reducer