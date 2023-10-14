import React from 'react';
import { Link } from 'react-router-dom';

const Trendings = ({ categories, products }) => {

    const trendingCategory = categories.filter(category => {
        const result = category.option === 'trending';
        return result;
    })
    
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className='text-center lg:m-0 mx-4'>
                <h1 className='text-4xl font-bold '>Trendings Categories</h1>
                <p>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>

            <div className='flex items-center justify-center gap-16 my-12 lg:mx-0 mx-4'>
                {
                    trendingCategory.map(items => {
                        const { _id, icon, category } = items;

                        const categoryProducts = products.filter((product) => product.category === category);

                        return <div className='flex flex-col items-center' key={_id}>
                            <img className='h-24 lg:h-44 w-24 lg:w-44 rounded-full' src={icon} alt="" />
                            <div className='text-center p-5'>
                                <Link className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500'>{category}</Link>
                                <p>{categoryProducts.length} <span>Products</span></p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default Trendings;