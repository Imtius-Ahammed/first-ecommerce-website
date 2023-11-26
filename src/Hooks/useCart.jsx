import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,        
        queryFn: async () => {
            if(user?.email){
                const result = await axiosSecure.get(`/carts?email=${user?.email}`)
                return result.data
            }
            else{
                return []
            }
        }
    })

    return [cart, refetch]
};

export default useCart;