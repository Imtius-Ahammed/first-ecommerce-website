import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAllProducts = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: allProducts = [] } = useQuery({
        queryKey: ['allProducts', user?.email],
        queryFn: async () => {
            if(user?.email){
                const result = await axiosSecure.get('/products')
                return result.data;
            }
            else{
                return []
            }
        }
    })

    return [allProducts, refetch]
};

export default useAllProducts;