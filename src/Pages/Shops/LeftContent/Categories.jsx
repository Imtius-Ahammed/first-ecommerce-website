import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories, filteredProducts }) => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Categories</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                {
                    categories.map(category => {
                        return <button onClick={()=>filteredProducts(category.category)} key={category._id} className='font-bold hover:text-orange-600'>
                            {category.category}
                        </button>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;