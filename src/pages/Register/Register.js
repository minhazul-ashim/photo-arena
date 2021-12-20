import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import { BsGoogle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { googleSignIn, userCreation } = useAuth();

    const [information, setInformation] = useState({})

    const navigate = useNavigate()

    const handleBlur = (e) => {

        const field = e.target.name;
        const info = e.target.value;

        const newInfo = { ...information }
        newInfo[field] = info;

        setInformation(newInfo)
    }

    const handleSubmit = (e) => {

        const {email, name, password} = information;

        userCreation(email, password, name, navigate)
        e.preventDefault();
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '5%' }}>

                <Box sx={{ width: '25%' }}>
                    <img src={logo} alt="logo" style={{ width: '100%' }} />
                </Box>

                <Box>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <TextField label="Your Full Name" name='name' variant="outlined" sx={{ my: '2%' }} onBlur={handleBlur} />

                        <TextField label="Your Email Address" name='email' variant="outlined" sx={{ my: '2%' }} onBlur={handleBlur} />

                        <TextField label="Enter Password" name='password' variant="outlined" type='password' sx={{ my: '2%' }} onBlur={handleBlur} />

                        <Button type='submit' variant='outlined'>
                            Register
                        </Button>

                        <Typography>
                            <Link to='/login'>Already have an account?</Link>
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

export default Register;