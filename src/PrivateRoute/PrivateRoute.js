import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingPage from '../components/LoadingPage/LoadingPage'

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingPage></LoadingPage>
    } else {
        if (!user) {
            return <Navigate to='/login' state={{ from: location }} />
        } else {
            return children
        }
    }
};

export default PrivateRoute;