import React from 'react';
import Categories from './Categories';
import ProductTags from './ProductTags';
import TopRated from './TopRated';

const LeftContent = ({categories}) => {

    return (
        <div className='bg-[#f2f5f5f5] p-2 mt-10'>
            <Categories categories={categories}></Categories>
            <ProductTags></ProductTags>
            <TopRated></TopRated>
        </div>
    );
};

export default LeftContent;