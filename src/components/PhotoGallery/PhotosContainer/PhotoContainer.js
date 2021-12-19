import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../features/slices/photoSlice';
import PhotoBox from '../PhotoBox/PhotoBox';
import './PhotoContainer.css'

const PhotoContainer = () => {

    const photos = useSelector((state) => state.photo.explore);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchBooks())
    },[])


    return (
        <Container sx={{
            mt: '5%'
        }}>
            <Typography variant='h3'>
                Photo Corner
            </Typography>

            <Grid container>

                <Grid item xs={12} className='photos-grid'>

                    {
                        photos?.slice(0, 6).map(photo => <PhotoBox
                            key={photo._id} data={photo}>
                        </PhotoBox>)
                    }

                </Grid>

            </Grid>

        </Container>
    );
};

export default PhotoContainer;