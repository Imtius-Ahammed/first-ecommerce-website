import React from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import useCategories from '../../Hooks/useCategories';
import useProducts from '../../Hooks/useProducts';

const Shops = () => {

    const [categories] = useCategories();
    const [products] = useProducts();

    return (
        <div className='flex flex-col lg:flex-row justify-between gap-6 w-full lg:w-9/12 mx-auto my-12 lg:px-0 px-2'>
            <div className='w-full lg:w-1/4'>
                <LeftContent categories={categories}></LeftContent>
            </div>
            <div className='w-full lg:w-3/4'>
                <RightContent products={products}></RightContent>
            </div>
        </div>
    );
};

export default Shops;