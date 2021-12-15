import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './Banner.css'
import wall from '../../images/wall.jpg'
import { Box } from '@mui/system';

const Banner = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${wall})`
        }} className='banner-container'>
            <Grid container className='banner-overlay'>

                <Grid item xs={6} className='banner-comment'>
                    <Box>
                        <Typography variant='h2' sx={{ color: 'white' }}>
                            Sell your art and live your dreams!
                        </Typography>

                        <Typography variant='body' sx={{ color: 'white' }}>
                            Sell your art and live your dreams!
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>

                    <Button>
                        Explore
                    </Button>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;