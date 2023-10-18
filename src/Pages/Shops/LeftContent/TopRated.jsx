import React from 'react';
import { BsFillStarFill } from '@react-icons/all-files/bs/BsFillStarFill';
import { Link } from 'react-router-dom';

const TopRated = ({ products }) => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Top Rated Products</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                {
                    products.map(product => {
                        const {_id, rating, name, image, price} = product;
                        if (rating >= 4.8) {
                            return <div key={_id} className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                                <div className='w-1/3'>
                                    <img src={image} alt="" />
                                </div>
                                <div className='w-2/3 flex flex-col gap-2'>
                                    <Link to={`/product-details/${_id}`} className='text-md lg:text-sm font-medium hover:text-orange-500'>{name}</Link>
                                    <div className='flex items-center gap-1 text-orange-300'>
                                        <BsFillStarFill />
                                        {rating}
                                    </div>
                                    <p className='text-xl font-medium text-orange-600'>${price}</p>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default TopRated;