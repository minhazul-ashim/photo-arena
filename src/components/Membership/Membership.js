import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './MemberShip.css';

const Membership = () => {
    return (
        <Box className='member-container'>

            <Box className='memberContainer-overlay'>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography variant='h4' sx={{
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        Become a user and advertise your own photos and artworks!
                    </Typography>
                    <Button variant='outlined'>
                        Sign up now
                    </Button>
                </Container>
            </Box>

        </Box>
    );
};

export default Membership;