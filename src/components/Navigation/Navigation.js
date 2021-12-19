import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';

export default function Navigation() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const { user, logOut } = useAuth()

    const navigate = useNavigate()

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleDrawer = () => {

        navigate('/dashboard')
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: '#333'
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box onClick={() => navigate('/home')}>
                        <img src={logo} alt="" width='40px' />
                    </Box>
                    {auth && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            {
                                !user ?
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton> :
                                    <Box>
                                        <img src={user?.photoURL} alt="profilepicture" style={{
                                            width: '40px', height: '40px',
                                            borderRadius: '50%'
                                        }} />
                                    </Box>
                            }

                            {
                                !user ?
                                    <Button onClick={() => navigate('/login')} variant='outlined' sx={{
                                        mx: '6px'
                                    }}>
                                        Log in
                                    </Button> :
                                    <Button onClick={logOut} variant='outlined' sx={{
                                        mx: '6px'
                                    }}>
                                        Log out
                                    </Button>
                            }

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
