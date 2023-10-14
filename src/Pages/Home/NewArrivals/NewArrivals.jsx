import React from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const NewArrivals = ({option}) => {

    return (
        <div className='max-w-6xl mx-auto my-20'>
            <h1 className='text-center text-4xl font-semibold mb-3'>New Arrivals</h1>
            <p className='text-center text-lg text-gray-500'>Add our new arrivals to your weekly lineup</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    option.map(products => {
                        return <ProductCard key={products._id} option={products} />
                    })
                }
            </div>
            <div className='text-center'>
                <button className=' bg-stone-800 text-lg font-medium text-white rounded-none border-0 normal-case px-10 py-4 hover:bg-emerald-400'>Load More</button>
            </div>
        </div>
    );
};

export default NewArrivals;