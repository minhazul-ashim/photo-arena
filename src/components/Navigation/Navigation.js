import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate()

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleDrawer = () => {

        console.log('drawer should be opened')
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
                    <Box>
                        <img src={logo} alt="" width='40px' />
                    </Box>
                    {auth && (
                        <Box>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleDrawer} 
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
