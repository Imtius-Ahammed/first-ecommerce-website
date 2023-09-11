import React from 'react';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='w-full lg:w-9/12 mx-auto mb-24'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-4xl font-medium'>Latest News</h1>
                <p className='text-slate-500'>Update the latest fashion trends today</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                <div className='flex flex-col gap-3 mx-2 lg:mx-0'>
                    <div className='relative'>
                        <img className='w-full h-96' src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-03.jpg" alt="" />
                        <p className='px-3 py-1 text-sm bg-orange-600 text-white font-medium w-1/3 text-center absolute bottom-2'>On Sale</p>
                    </div>
                    <div className='flex items-center gap-4 text-slate-500'>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><FiUser className='text-orange-500'></FiUser></span>
                            Admin
                        </p>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><AiOutlineClockCircle className='text-orange-500'></AiOutlineClockCircle></span>
                            May 10, 2023
                        </p>
                    </div>
                    <Link to='blog-details' className='text-xl font-normal hover:text-orange-500'>8 Fashion Photographers in UK</Link>
                </div>

                <div className='flex flex-col gap-3 mx-2 lg:mx-0'>
                    <div className='relative'>
                        <img className='w-full h-96' src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-05.jpg" alt="" />
                        <p className='px-3 py-1 text-sm bg-orange-600 text-white font-medium w-1/3 text-center absolute bottom-2'>On Sale</p>
                    </div>
                    <div className='flex items-center gap-4 text-slate-500'>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><FiUser className='text-orange-500'></FiUser></span>
                            Admin
                        </p>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><AiOutlineClockCircle className='text-orange-500'></AiOutlineClockCircle></span>
                            May 9, 2023
                        </p>
                    </div>
                    <Link to='blog-details' className='text-xl font-normal hover:text-orange-500'>On Salvatore Ferragamo’s New Chapter</Link>
                </div>

                <div className='flex flex-col gap-3 mx-2 lg:mx-0'>
                    <div className='relative'>
                        <img className='w-full h-96' src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-04.jpg" alt="" />
                        <p className='px-3 py-1 text-sm bg-orange-600 text-white font-medium w-1/3 text-center absolute bottom-2'>On Sale</p>
                    </div>
                    <div className='flex items-center gap-4 text-slate-500'>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><FiUser className='text-orange-500'></FiUser></span>
                            Admin
                        </p>
                        <p className='flex items-center gap-2 hover:text-orange-500'>
                            <span><AiOutlineClockCircle className='text-orange-500'></AiOutlineClockCircle></span>
                            May 8, 2023
                        </p>
                    </div>
                    <Link to='blog-details' className='text-xl font-normal hover:text-orange-500'>Sample post with format chat</Link>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;