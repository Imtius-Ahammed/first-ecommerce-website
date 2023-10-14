import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Categories</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                {
                    categories.map(category => {
                        return <Link key={category._id} className='font-bold hover:text-orange-600'>
                            {category.category}
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;