import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


const LoadingPage = () => {
    return (
        <div style={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <CircularProgress />

        </div>
    );
};

export default LoadingPage;