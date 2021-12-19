import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user } = useAuth()

    if (user) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} />
    }
};

export default PrivateRoute;