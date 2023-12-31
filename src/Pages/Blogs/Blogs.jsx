import React from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Ecom BD - Blogs</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row justify-between gap-6 w-full lg:w-9/12 mx-auto my-12 lg:px-0 px-2'>
                <div className='w-full lg:w-3/4'>
                    <LeftContent></LeftContent>
                </div>
                <div className='w-full lg:w-1/4'>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default Blogs;