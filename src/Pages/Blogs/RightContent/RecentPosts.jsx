import React from 'react';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
    return (
        <div className='p-2 mb-8'>
            <h1 className='font-medium text-xl font-sans'>Recent Posts</h1>
            <div className='divider'></div>
            <div className='flex flex-col gap-6'>
                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-03-150x150.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>8 Fashion Photographers in UK</Link>
                        <p className='text-sm font-normal'>May 10, 2023</p>
                    </div>
                </div>

                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-03-150x150.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>8 Fashion Photographers in UK</Link>
                        <p className='text-sm font-normal'>May 10, 2023</p>
                    </div>
                </div>

                <div className='w-full flex gap-2 items-center justify-between border-b-2 py-3'>
                    <div className='w-1/3'>
                        <img src="https://demo-54.woovinapro.com/wp-content/uploads/2019/10/blog-03-150x150.jpg" alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col gap-2'>
                        <Link className='text-md lg:text-sm font-medium hover:text-orange-500'>8 Fashion Photographers in UK</Link>
                        <p className='text-sm font-normal'>May 10, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;