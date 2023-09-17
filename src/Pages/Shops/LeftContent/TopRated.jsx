import React from 'react';
import { BsFillStarFill } from '@react-icons/all-files/bs/BsFillStarFill';
import { Link } from 'react-router-dom';

const TopRated = () => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Top Rated Products</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2018/01/product-15-300x400.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>Pellentesque posuere</Link>
                        <div className='flex items-center gap-1 text-orange-300'>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                        </div>
                        <p className='text-xl font-medium text-orange-600'>$52</p>
                    </div>
                </div>

                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2018/01/product-15-300x400.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>Pellentesque posuere</Link>
                        <div className='flex items-center gap-1 text-orange-300'>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                        </div>
                        <p className='text-xl font-medium text-orange-600'>$52</p>
                    </div>
                </div>

                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2018/01/product-15-300x400.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>Pellentesque posuere</Link>
                        <div className='flex items-center gap-1 text-orange-300'>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                            <BsFillStarFill></BsFillStarFill>
                        </div>
                        <p className='text-xl font-medium text-orange-600'>$52</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;