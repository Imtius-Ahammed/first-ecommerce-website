import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            if(user?.email){
                const result = await axiosSecure.get('/users')
                return result.data;
            }
            else{
                return []
            }
        }
    })

    return [users, refetch]
};

export default useAllUsers;