import React from 'react';
import Categories from './Categories';
import ProductTags from './ProductTags';
import TopRated from './TopRated';

const LeftContent = ({categories, products, filteredProducts}) => {

    return (
        <div className='bg-[#f2f5f5f5] p-2 mt-10'>
            <Categories categories={categories} filteredProducts={filteredProducts}></Categories>
            <TopRated products={products}></TopRated>
        </div>
    );
};

export default LeftContent;