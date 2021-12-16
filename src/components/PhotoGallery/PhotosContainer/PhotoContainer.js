import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import PhotoBox from '../PhotoBox/PhotoBox';
import './PhotoContainer.css'

const PhotoContainer = () => {

    const photos = useSelector((state) => state.photo.explore);


    return (
        <Container>
            <Typography variant='h3'>
                Photo Corner
            </Typography>

            <Grid container>

                <Grid item xs={12} className='photos-grid'>

                    {
                        photos.slice(0, 6).map(photo => <PhotoBox
                            key={photo._id} data={photo}>
                        </PhotoBox>)
                    }

                </Grid>

            </Grid>

        </Container>
    );
};

export default PhotoContainer;