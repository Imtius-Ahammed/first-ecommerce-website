import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/products')
            .then(data => {
                setProducts(data.data)
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    return [products, isLoading]
};

export default useProducts;