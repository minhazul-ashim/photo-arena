import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addACollectedArt, postUserArtCollect } from '../../../features/slices/collectionSlice';
import { loadSelection } from '../../../features/slices/photoSlice';
import useAuth from '../../../hooks/useAuth';
import PhotoDetail from '../../PhotoDetail/PhotoDetail';

const ArtBox = ({ data }) => {

    const { url } = data;
    const dispatch = useDispatch();

    const [openDetail, setOpenDetail] = useState(false)

    const { user } = useAuth();

    const email = user?.email;

    const handleDetail = (data) => {

        dispatch(loadSelection(data))
        setOpenDetail(true)
    }

    return (

        <Box className='photo-box'>

            <img src={url} alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px'
            }} onClick={() => handleDetail(data)} />

            <Box className='photoBox-inner'>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', mt: '2%', p: '5%' }}>

                    <Button sx={{ color: 'white', background: '#222' }} title='Add to Collection' onClick={() => {

                        dispatch(addACollectedArt(data))
                        dispatch(postUserArtCollect({email, data}))
                    }
                    }>
                        <FaPlus />
                    </Button>

                    <Button sx={{ color: 'white', background: '#222', p: '5%' }} title='Download'>
                        <FaDownload />
                    </Button>

                </Box>

                <Box>

                    <Button sx={{ color: 'white', background: '#222', p: '10%', mb: '10%' }} onClick={() => handleDetail(data)}>
                        View
                    </Button>

                </Box>
            </Box>


            <PhotoDetail open={openDetail} setOpen={setOpenDetail}></PhotoDetail>
        </Box >
    );
};

export default ArtBox;