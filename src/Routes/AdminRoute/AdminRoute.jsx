import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import useAdmin from '../../Hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading && isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{ from: location}} replace></Navigate>
}

export default AdminRoute;