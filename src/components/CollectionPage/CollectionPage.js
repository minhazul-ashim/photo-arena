import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteArt, deletePhoto, fetchUserCollections } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';

const CollectionPage = () => {

    const dispatch = useDispatch();
    const { user } = useAuth()
    const email = user?.email;

    const userPhotos = useSelector(state => state.user.userPhotoCollections);
    const userArts = useSelector(state => state.user.userArtCollections);

    const collectUserData = () => {

        dispatch(fetchUserCollections(email))
    }

    const handleDelete = (collection, email, data) => {

        if (collection === 'PHOTO') {
            dispatch(deletePhoto({ email, data }))
        } else if (collection === 'ART') {
            dispatch(deleteArt({ email, data }))
        }
        collectUserData()
    }

    useEffect(collectUserData, [])

    return (
        <Container>

            <Box>
                {
                    userPhotos?.length ?
                        <Typography variant='h4'>
                            Your Photo Gallery
                        </Typography> :
                        <Typography variant='h4'>
                            Your Photo Gallery is empty
                        </Typography>
                }

                <Grid container spacing={2}>

                    {
                        userPhotos?.map(photo => {
                            return (
                                <Grid key={photo._id} item xs={6} md={4} lg={3}>
                                    <Box sx={{ height: '100%' }}>
                                        <img src={photo.url} alt='' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant='contained' onClick={() => handleDelete('PHOTO', email, photo)}>
                                            Delete
                                        </Button>
                                        <Button variant='contained'>
                                            Download
                                        </Button>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>

            <Box sx={{ mt: '5%' }}>
                {
                    userArts?.length ?
                        <Typography variant='h4'>
                            Your Art Gallery
                        </Typography> :
                        <Typography variant='h4'>
                            Your Art Gallery is empty
                        </Typography>
                }

                <Grid container spacing={6}>

                    {
                        userArts?.map(art => {
                            return (
                                <Grid key={art._id} item xs={6} md={4} lg={3}>
                                    <Box sx={{ height: '100%' }}>
                                        <img src={art.url} alt='' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant='contained' onClick={() => handleDelete('ART', email, art)}>
                                            Delete
                                        </Button>
                                        <Button variant='contained'>
                                            Download
                                        </Button>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>

        </Container>
    );
};

export default CollectionPage;