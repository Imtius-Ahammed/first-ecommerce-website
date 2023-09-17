import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Categories</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                <Link className='hover:text-orange-600'>Accessories</Link>
                <Link className='hover:text-orange-600'>Backpack</Link>
                <Link className='hover:text-orange-600'>Dresses</Link>
                <Link className='hover:text-orange-600'>Shoes</Link>
                <Link className='hover:text-orange-600'>Tops & T-Shurt</Link>
                <Link className='hover:text-orange-600'>Uncategory</Link>
            </div>
        </div>
    );
};

export default Categories;