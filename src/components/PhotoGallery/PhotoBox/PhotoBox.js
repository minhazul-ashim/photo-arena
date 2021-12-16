import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSelection } from '../../../features/slices/photoSlice';
import PhotoDetail from '../../PhotoDetail/PhotoDetail';

const PhotoBox = ({ data }) => {
    const { url } = data;
    const dispatch = useDispatch();

    const [openDetail, setOpenDetail] = useState(false)

    const handleDetail = (data) => {

        dispatch(loadSelection(data))
        setOpenDetail(true)
    }

    return (
        <Box sx={{
            margin: '2%'
        }}>

                <img src={url} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px'
                }} onClick={() => handleDetail(data)} />
            
            <PhotoDetail open={openDetail} setOpen={setOpenDetail}></PhotoDetail>
        </Box>
    );
};

export default PhotoBox;