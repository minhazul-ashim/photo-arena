import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loadSelection } from '../../../features/slices/photoSlice';

const PhotoBox = ({ data }) => {
    const { _id, url } = data;
    const dispatch = useDispatch();

    return (
        <Box sx={{
            margin: '2%'
        }} onClick={() => dispatch(loadSelection(data))}>
            <img src={url} alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px'
            }} />
        </Box>
    );
};

export default PhotoBox;