import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from '../../../features/slices/photoSlice';
import PhotoBox from '../PhotoBox/PhotoBox';
import './PhotoContainer.css'; 
import {FaArrowRight} from 'react-icons/fa'


const PhotoContainer = ({ home }) => {

    const photos = useSelector((state) => state.photo.explore);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchBooks())
    }, [])


    const navigate = useNavigate()



    return (
        <Container sx={{
            mt: '5%'
        }}>
            <Typography variant='h3'>
                Photo Corner
            </Typography>
            <Box xs={12} className='photos-grid'>

                {
                    home ?

                        photos.slice(0, 6).map(art => <PhotoBox
                            key={art._id} data={art}>
                        </PhotoBox>)
                        :
                        photos.map(art => <PhotoBox
                            key={art._id} data={art}>
                        </PhotoBox>)

                }
            </Box>

            <Button variant='outlined' onClick={() => navigate('/arts')}>
                View All <FaArrowRight/>
            </Button>

        </Container>
    );
};

export default PhotoContainer;