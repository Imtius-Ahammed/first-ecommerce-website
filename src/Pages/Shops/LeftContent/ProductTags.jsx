import React from 'react';
import { Link } from 'react-router-dom';

const ProductTags = () => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Product Tags</h1>
            <div className='divider'></div>
            <div className='grid grid-cols-4 justify-between w-full gap-3'>
                <Link className='hover:text-orange-600'>Tags-1</Link>
                <Link className='hover:text-orange-600'>Tags-2</Link>
                <Link className='hover:text-orange-600'>Tags-3</Link>
                <Link className='hover:text-orange-600'>Tags-4</Link>
                <Link className='hover:text-orange-600'>Tags-5</Link>
                <Link className='hover:text-orange-600'>Tags-6</Link>
            </div>
        </div>
    );
};

export default ProductTags;