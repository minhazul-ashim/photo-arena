import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../hooks/useAuth';

export default function PhotoDetail({ open, setOpen }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    const { user } = useAuth()

    const selected = useSelector(state => state.photo.selected)

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >

                <DialogContent>

                    <img target='__blank' src={selected?.url} alt="" style={{ width: '100%', objectFit: 'cover' }} />

                </DialogContent>

                <DialogActions>

                    {
                        user ?
                            <Box>
                                <Button>
                                    Download
                                </Button>

                                <Button>
                                    Add to Collection
                                </Button>
                            </Box> :
                            <Typography>
                                Login to Download
                            </Typography>
                    }

                    <Button onClick={handleClose}>
                        Close
                    </Button>

                </DialogActions>
            </Dialog>

        </div>
    );
}