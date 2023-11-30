import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Contexts/AuthProvider';

const useOrders = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/payment-info/${user?.email}`);
                return res.data;
            } else {
                return [];
            }
        }
    })

    return [orders, refetch]
};

export default useOrders;