import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const PhotoSubmission = () => {
    return (
        <Container>

            <Typography variant='h4'>
                Fill necessary information and submit your photo for admin approval.
            </Typography>

            <form style={{ width: '100%' }}>

                <TextField variant='outlined' label='Artist Name' sx={{
                    my: '2%'
                }} required />

                <TextField variant='outlined' label='Category or Photo Context' sx={{
                    my: '2%'
                }} required />

                <TextField variant='outlined' label='License Price ($USD)' type='number' sx={{
                    my: '2%', display: 'block'
                }} required />


                <label>
                    Please Choose a high resolution image

                    <input type='file' style={{
                        margin: '2% 0', display: 'block'
                    }} required />

                </label>

                <Button type="submit" variant='contained'>
                    Submit
                </Button>

            </form>

        </Container>
    );
};

export default PhotoSubmission;