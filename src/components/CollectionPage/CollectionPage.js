import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserCollections } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';

const CollectionPage = () => {

    const dispatch = useDispatch();
    const { user } = useAuth()
    const email = user?.email;

    const userPhotos = useSelector(state => state.user.userPhotoCollections);
    const userArts = useSelector(state => state.user.userArtCollections)

    useEffect(() => {

        dispatch(fetchUserCollections(email))
    }, [])

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

                <Grid container>

                    {
                        userPhotos?.map(photo => {
                            return (
                                <Grid key={photo._id} item xs={6} md={4} lg={3} gap={1}>
                                    <Box sx={{ m: '2%', height: '100%' }}>
                                        <img src={photo.url} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

                <Grid container>

                    {
                        userArts?.map(art => {
                            return (
                                <Grid key={art._id} item xs={6} md={4} lg={3}>
                                    <Box sx={{ m: '2%', height: '100%' }}>
                                        <img src={art.url} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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