import React, { useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const RightContent = ({ 
    selectedProducts, 
    products, 
    selected,
    showBtn,
    setShowBtn
 }) => {
    const [allProducts, setAllProducts] = useState(true);

    const handleAllProducts = () => {
        setAllProducts(false)
        setShowBtn(false)
    }

    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    selected ?
                        <>
                            {
                                allProducts ?
                                    selectedProducts.slice(0, 9).map(product => {
                                        return <ProductCard key={product._id} option={product} />
                                    })
                                    :
                                    selectedProducts.map(product => {
                                        return <ProductCard key={product._id} option={product} />
                                    })
                            }
                        </>
                        :
                        <>
                            {
                                allProducts ?
                                    products.slice(0, 9).map(product => {
                                        return <ProductCard key={product._id} option={product} />
                                    })
                                    :
                                    products.map(product => {
                                        return <ProductCard key={product._id} option={product} />
                                    })
                            }
                        </>
                }
            </div>
            <div className='text-center'>
                <button onClick={() => handleAllProducts()} className={!showBtn ? 'hidden' : 'bg-stone-800 text-lg font-medium text-white rounded-none border-0 normal-case px-10 py-4 hover:bg-emerald-400'}>
                    {
                        showBtn &&
                        <h1>Load More</h1>
                    }
                </button>
            </div>
        </div>
    );
};

export default RightContent;