import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import PhotoBox from '../../PhotoGallery/PhotoBox/PhotoBox';
import './ArtContainer.css'

const ArtContainer = () => {

    const arts = useSelector((state) => state.art.explore);


    return (
        <Container sx={{
            my: '5%'
        }}>
            <Typography variant='h3'>
                Photo Corner
            </Typography>

            <Grid container>

                <Grid item xs={12} className='photos-grid'>

                    {
                        arts.slice(0, 6).map(art => <PhotoBox
                            key={art._id} data={art}>
                        </PhotoBox>)
                    }

                </Grid>

            </Grid>

        </Container>
    );
};

export default ArtContainer;