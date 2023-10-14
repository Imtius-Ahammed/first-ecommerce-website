import React from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const FeaturedItems = ({ option }) => {

    return (
        <div className="max-w-6xl mx-auto my-20 relative">
            <h1 className='text-center text-4xl font-semibold my-6'>Featured Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    option.map(products => {
                        return <ProductCard key={products._id} option={products} />
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedItems;