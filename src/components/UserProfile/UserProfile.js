import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserCollections } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {

    const userInfo = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const { user } = useAuth();

    useEffect(() => {

        dispatch(fetchUserCollections(user?.email))
    }, [])

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box>
                    <img src={user.photoURL} style={{ borderRadius: '50%' }} alt="" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant='h4'>
                        {userInfo?.name}
                    </Typography>
                    <Typography variant='h6'>
                        {userInfo?.email}
                    </Typography>
                    <Typography variant='h5'>
                        Gallery Status
                    </Typography>
                    <Typography variant='h6'>
                        Photo Gallery: {userInfo?.photoCollections?.length}
                    </Typography>
                    <Typography variant='h6'>
                        Art Gallery: {userInfo?.artCollections?.length}
                    </Typography>
                    <Typography variant='h6'>
                        Your Submission: 0
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default UserProfile;