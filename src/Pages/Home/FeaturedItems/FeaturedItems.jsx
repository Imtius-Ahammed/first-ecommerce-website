import React, { useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const FeaturedItems = ({ option }) => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filtered, setFiltered] = useState(false);

    const handleFilter = (category) => {
        const items = option.filter(product => product.category === category)
        console.log(category);
        setFilteredProducts(items);
        setFiltered(true)
    }

    return (
        <div className="max-w-6xl mx-auto my-20 relative">
            <h1 className='text-center text-4xl font-semibold my-6'>Featured Items</h1>
            <div className='flex h-12 items-center justify-center gap-10'>
                <button
                    onClick={() => handleFilter("Men's")}
                    className='text-xl font-medium hover:text-orange-600 hover:border-b-2 border-orange-600'>
                    For Men
                </button>
                <button
                    onClick={() => handleFilter("Children's")}
                    className='text-xl font-medium hover:text-orange-600 hover:border-b-2 border-orange-600'>
                    For Childrens
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    !filtered ?
                        <>
                            {
                                option.slice(0,8).map(products => {
                                    return <ProductCard key={products._id} option={products} />
                                })
                            }
                        </>
                        :
                        <>
                            {
                                filteredProducts.slice(0,8).map(products => {
                                    return <ProductCard key={products._id} option={products} />
                                })
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default FeaturedItems;