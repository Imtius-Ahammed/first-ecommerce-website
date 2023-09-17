import React, { useEffect, useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const RightContent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }, [])
    console.log(products);
    
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                {products.map((product, index) => (<ProductCard key={index} product={product} />))}
            </div>
            <div className='text-center'>
                <button className=' bg-stone-800 text-lg font-medium text-white rounded-none border-0 normal-case px-10 py-4 hover:bg-emerald-400'>Load More</button>
            </div>
        </div>
    );
};

export default RightContent;