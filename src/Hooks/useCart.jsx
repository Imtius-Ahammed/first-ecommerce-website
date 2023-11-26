import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Contexts/AuthProvider';

const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('E-Access-Token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,        
        queryFn: async () => {
            if(user?.email){
                const result = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
                return result.json()
            }
            else{
                return []
            }
        }
    })

    return [cart, refetch]
};

export default useCart;