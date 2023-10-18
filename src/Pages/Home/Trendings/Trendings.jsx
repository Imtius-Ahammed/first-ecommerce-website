import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const Trendings = ({ categories, selectedProducts, selected, handleComponent }) => {

    const trendingCategory = categories.filter(category => {
        const result = category.option === 'trending';
        return result;
    })

    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className='text-center lg:m-0 mx-4'>
                <h1 className='text-4xl font-bold '>Trendings Categories</h1>
                <p>Find a bright ideal to suit your taste with our great selection of suspension.</p>
            </div>

            <div className='flex items-center justify-center gap-4 my-12 lg:mx-0 mx-4'>
                {
                    trendingCategory.map(items => {
                        const { _id, icon, category } = items;

                        return <div className='flex flex-col items-center' key={_id}>
                            <img className='h-24 lg:h-44 w-24 lg:w-44 rounded-full' src={icon} alt="" />
                            <div className='text-center p-5'>
                                <button onClick={()=>handleComponent(category)} className='lg:text-2xl md:text-2xl font-medium hover:underline hover:text-red-500'>{category}</button>
                                <p>{selectedProducts.length} <span>Products</span></p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className={selected ? "mx-4" : 'hidden'}>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
                    {
                        selectedProducts.map(products => {
                            return <ProductCard option={products} />
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Trendings;