import React, { useEffect, useState } from 'react';

const useCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:5000/products-categories')
                .then(res => res.json())
                .then(data => {
                    setCategories(data)
                })
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    return [categories]
};

export default useCategories;