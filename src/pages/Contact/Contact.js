import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {

    const handleMessage = (e) => {

        console.log('message sent')
        e.preventDefault()
    }

    return (
        <Container sx={{ py: '10%' }}>

            <Typography variant='h4' sx={{ textAlign: 'center', mb: '4%' }}>
                Send us any message or queries
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={handleMessage} style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>

                    <TextField label="Enter your email address" variant="outlined" sx={{ my: '2%' }} />

                    <TextField label="Enter your Full Name" variant="outlined" sx={{ my: '2%' }} />

                    <TextareaAutosize placeholder='Your message or feedback' minRows={5} />

                    <Button type='submit' variant='contained' sx={{ mt: '2%' }}>
                        Send
                    </Button>
                </form>

            </Box>

            <Box sx={{ my: '5%', py: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    Reach us digitally!
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '50%', mt: '5%' }}>

                    <FaFacebook style={{ fontSize: '35px', color: '#444' }} />
                    <FaTwitter style={{ fontSize: '35px', color: '#444' }} />
                    <FaLinkedin style={{ fontSize: '35px', color: '#444' }} />
                    <FaInstagram style={{ fontSize: '35px', color: '#444' }} />

                </Box>
            </Box>
        </Container>
    );
};

export default Contact;