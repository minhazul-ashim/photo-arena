import React from 'react';
import Slider from 'react-slick';
import camera from '../../images/camera.jpg'
import art from '../../images/art.jpg'
import './Banner.css'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='carousel-parent'>
            <Slider {...settings}>
                <Grid container className='carousel-container'>
                    <Grid item>
                        <Box >
                            <img className='carousel-img' src={camera} alt="" />
                        </Box>
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>

                <Grid container className='carousel-container'>
                    <Grid item>
                        <Box >
                            <img className='carousel-img' src={camera} alt="" />
                        </Box>
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>

            </Slider>
        </div >
    );
};

export default Banner;