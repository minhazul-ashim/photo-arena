import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Login = () => {

    const { googleSignIn } = useAuth();

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '5%' }}>

                <Box sx={{ width: '25%' }}>
                    <img src={logo} alt="logo" style={{ width: '100%' }} />
                </Box>

                <Box>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <TextField label="Your Email" variant="outlined" sx={{ my: '2%' }} />

                        <TextField label="Enter Password" variant="outlined" type='password' sx={{ my: '2%' }} />

                        <Button type='submit' variant='outlined'>
                            Log in
                        </Button>

                        <Typography>
                            <Link to='/register'>Need Registration?</Link>
                        </Typography>

                        <Button onClick={googleSignIn} variant='outlined' sx={{ my: '3%', color: 'tomato', borderColor: 'tomato' }}>
                            <BsGoogle />oogle Log in
                        </Button>
                    </form>

                </Box>


            </Container>

            <Footer></Footer>
        </>
    );
};

export default Login;