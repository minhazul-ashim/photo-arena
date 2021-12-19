import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import { BsGoogle } from 'react-icons/bs'

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
                        <TextField label="Outlined" variant="outlined" sx={{ my: '2%' }} />
                        <TextField label="Outlined" variant="outlined" sx={{ my: '2%' }} />
                        <Button type='submit' variant='outlined'>
                            Log in
                        </Button>
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