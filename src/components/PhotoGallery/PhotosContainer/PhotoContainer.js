import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoBox from '../PhotoBox/PhotoBox';
import './PhotoContainer.css'

const PhotoContainer = () => {

    const dispatch = useDispatch();

    const photos = useSelector((state) => state.photo.explore);

    return (
        <Container>
            <Typography variant='h3'>
                Photo Corner
            </Typography>

            <Grid container>

                <Grid item xs={12} md={7} className='photos-grid'>

                    {
                        photos.slice(0, 6).map(photo => <PhotoBox
                            key={photo._id} data={photo}>
                        </PhotoBox>)
                    }

                </Grid>

                <Grid item xs={12} md={5}>

                </Grid>

            </Grid>

        </Container>
    );
};

export default PhotoContainer;