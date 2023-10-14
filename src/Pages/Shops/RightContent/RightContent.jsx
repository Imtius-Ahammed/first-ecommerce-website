import React from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import useProducts from '../../../Hooks/useProducts';

const RightContent = () => {
    
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                <ProductCard />
            </div>
            <div className='text-center'>
                <button className=' bg-stone-800 text-lg font-medium text-white rounded-none border-0 normal-case px-10 py-4 hover:bg-emerald-400'>Load More</button>
            </div>
        </div>
    );
};

export default RightContent;