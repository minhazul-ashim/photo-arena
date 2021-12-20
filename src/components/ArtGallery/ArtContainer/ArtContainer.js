import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchArts } from '../../../features/slices/artSlice';
import PhotoBox from '../../PhotoGallery/PhotoBox/PhotoBox';
import './ArtContainer.css'
import { FaArrowRight } from 'react-icons/fa'
import ArtBox from '../ArtBox/ArtBox';

const ArtContainer = ({ home }) => {

    const arts = useSelector((state) => state.art.explore);

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchArts())
    }, [])

    const navigate = useNavigate()


    return (
        <Container sx={{
            my: '5%'
        }}>
            <Typography variant='h3'>
                Photo Corner
            </Typography>

            <Box xs={12} className='photos-grid'>

                {
                    home ?

                        arts.slice(0, 6).map(art => <ArtBox
                            key={art._id} data={art}>
                        </ArtBox>)
                        :
                        arts.map(art => <PhotoBox
                            key={art._id} data={art}>
                        </PhotoBox>)

                }

            </Box>

            <Button variant='outlined' onClick={() => navigate('/arts')}>
                View All    <FaArrowRight />
            </Button>

        </Container>
    );
};

export default ArtContainer;