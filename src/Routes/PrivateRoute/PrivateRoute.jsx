import React, { useContext } from 'react';
import Login from '../../Pages/Login/Login';
import Loader from '../../Pages/Shared/Loader/Loader';
import { AuthContext } from "../../Pages/Contexts/AuthProvider";
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader />
    }

    if (!user && !user?.uid) {
         Swal.fire({
            icon: 'error',
            title: 'Login First...',
            text: "You are not logged in!!!"
        })
        return <Login />
    }

    return children;
};

export default PrivateRoute;