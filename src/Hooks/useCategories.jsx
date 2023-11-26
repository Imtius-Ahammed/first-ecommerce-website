import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCategories = () => {

    const [categories, setCategories] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        try {
            axiosSecure.get('/products-categories')
                .then(data => {
                    setCategories(data.data)
                })
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    return [categories]
};

export default useCategories;