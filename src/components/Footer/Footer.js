import { Container, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <Box className='footer'>
            <Container>

                <Grid container >

                    <Grid item xs={12} md={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Box>
                            <img src={logo} alt="" style={{
                                width: '50%'
                            }} />
                            <Typography variant='h6' className='footer-texts'>
                                PixelArt Studio
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={5}>
                        <List>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Navigate
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Explore Photos
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Explore Arts
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Become a member
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Dashboard
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Grid>

                    <Grid item xs={12} md={4}>

                        <List>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Terms and Conditions
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Privacy Policy
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    License
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className='footer-texts'>
                                    Agreements
                                </ListItemText>
                            </ListItem>

                        </List>

                    </Grid>

                </Grid>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '5%'
                }}>
                    <Typography variant='body' className='footer-copy'>
                        All Rights Reserved. &copy; PixelArt Studio | 2021
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;