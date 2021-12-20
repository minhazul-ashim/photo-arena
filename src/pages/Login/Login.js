import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import { BsGoogle } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { googleSignIn, manualSignIn } = useAuth();

    const location = useLocation();

    const [information, setInformation] = useState({})

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...information }
        newInfo[field] = value;

        setInformation(newInfo)
    }

    const handleSubmit = (e) => {
        const { email, password } = information;
        manualSignIn(email, password, from, navigate)
        e.preventDefault()
        e.target.reset()
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '5%' }}>

                <Box sx={{ width: '25%' }}>
                    <img src={logo} alt="logo" style={{ width: '100%' }} />
                </Box>

                <Box>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <TextField name='email' onBlur={handleBlur} label="Your Email" variant="outlined" sx={{ my: '2%' }} />

                        <TextField name='password' onBlur={handleBlur} label="Enter Password" variant="outlined" type='password' sx={{ my: '2%' }} />

                        <Button type='submit' variant='outlined'>
                            Log in
                        </Button>

                        <Typography>
                            <Link to='/register'>Need Registration?</Link>
                        </Typography>

                        <Button onClick={() => googleSignIn(from, navigate)} variant='outlined' sx={{ my: '3%', color: 'tomato', borderColor: 'tomato' }}>
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